import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "0100 Academy Cohort - Coming Soon",
  description:
    "Get a first look at the next 0100 Academy cohort, meet the speakers, and reserve your seat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f9f6ee] text-slate-900 antialiased">
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
