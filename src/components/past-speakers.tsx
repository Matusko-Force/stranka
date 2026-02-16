import Image from "next/image";
import { getSpeakers } from "@/lib/speakers";

export const PastSpeakersSection = async () => {
  const speakers = await getSpeakers();

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="px-0 py-10 sm:px-4 sm:py-16 md:px-10"
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            id="speakers-title"
            className="text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl"
          >
            Past speakers
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" style={{ gridAutoRows: "1fr" }}>
        {speakers.map((speaker) => (
          <article
            key={speaker.name}
            className="flex h-full flex-col gap-4 bg-transparent p-4 text-slate-900 transition hover:-translate-y-1 sm:p-6"
          >
            {speaker.linkedin ? (
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-transparent sm:h-72"
              >
                <Image
                  src={speaker.image}
                  alt={`${speaker.name} portrait`}
                  fill
                  sizes="(min-width: 1280px) 18rem, (min-width: 768px) 20rem, 100vw"
                  className="object-cover"
                />
              </a>
            ) : (
              <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-transparent sm:h-72">
                <Image
                  src={speaker.image}
                  alt={`${speaker.name} portrait`}
                  fill
                  sizes="(min-width: 1280px) 18rem, (min-width: 768px) 20rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-lg font-semibold uppercase tracking-wide text-slate-900">
                {speaker.name}
              </p>
              <p className="text-sm uppercase text-slate-600">
                {speaker.position} - {speaker.company}
              </p>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};
