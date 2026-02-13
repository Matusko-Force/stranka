import { existsSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";
import { parse } from "csv-parse/sync";

export type Speaker = {
  name: string;
  company: string;
  position: string;
  linkedin: string;
  image: string;
};

type RawSpeaker = Record<string, string>;

const csvPath = path.join(process.cwd(), "data", "past-speakers.csv");
const imageExtensions = ["jpg", "jpeg", "png", "webp"];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const getImagePath = (name: string) => {
  const slug = slugify(name);
  for (const extension of imageExtensions) {
    const relative = path.join("speakers", `${slug}.${extension}`);
    const absolute = path.join(process.cwd(), "public", relative);
    if (existsSync(absolute)) {
      return `/${relative.replace(/\\\\/g, "/")}`;
    }
  }
  return "/speakers/placeholder.jpeg";
};

const getColumnValue = (row: RawSpeaker, column: string) => {
  const key = Object.keys(row).find(
    (current) => current.trim().toLowerCase() === column,
  );
  return key ? row[key]?.trim() ?? "" : "";
};

export const getSpeakers = async (): Promise<Speaker[]> => {
  const file = await readFile(csvPath, "utf8");
  const records = parse(file, {
    columns: true,
    skip_empty_lines: true,
  }) as RawSpeaker[];

  return records.map((row) => {
    const name = row["Name"]?.trim() ?? "TBA";
    const company = row["Company"]?.trim() ?? "0100 Academy";
    const position = row["Position"]?.trim() ?? "";
    const linkedin =
      getColumnValue(row, "linkedin") ||
      getColumnValue(row, "linkedin ") ||
      "";

    return {
      name,
      company,
      position,
      linkedin,
      image: getImagePath(name),
    };
  });
};
