import Image from "next/image";
import Link from "next/link";
import { PastSpeakersSection } from "@/components/past-speakers";
import { InstagramEmbed } from "@/components/instagram-embed";

const partnerLogos = [
  { name: "0100 Conferences", src: "/partners/Conferences.svg", width: 170 },
  { name: "Doers Summit", src: "/partners/doers-summit.svg", width: 170 },
  { name: "0100 Fund", src: "/partners/fund.svg", width: 340 },
  { name: "Hustle Fund", src: "/partners/Hustlefund.svg", width: 170 },
  { name: "Jason Ball", src: "/partners/Jasonball.svg", width: 170 },
  { name: "Laconia", src: "/partners/Laconia.svg", width: 170 },
  { name: "Vestberry", src: "/partners/vestberry.png", width: 170 },
  { name: "Waed", src: "/partners/waed.svg", width: 170 },
  { name: "Sandberg Capital", src: "/partners/Sandberg.svg", width: 170 },
  { name: "Flat6Labs", src: "/partners/Flat6Labs.svg", width: 170 },
  { name: "Silicon Badia", src: "/partners/silicon-badia.svg", width: 170 },
];

const instagramPosts = [
  "https://www.instagram.com/reel/DOvmc3ZDIax/",
  "https://www.instagram.com/reel/DMXzZKFt86k/",
  "https://www.instagram.com/reel/DNyU2XFWPur/",
  "https://www.instagram.com/reel/DL0ISKWN186/",
];


const Header = () => (
  <header className="sticky top-0 z-30 bg-[#f9f6ee]/95 backdrop-blur">
    <div className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-3" aria-label="0100 Academy home">
        <Image
          src="/logo.png"
          alt="0100 Academy logo"
          width={96}
          height={96}
          className="h-24 w-24"
          priority
        />
      </Link>
      <nav aria-label="Primary navigation" className="hidden gap-6 text-sm font-semibold text-slate-600 md:flex">
        <Link href="#speakers" className="transition hover:text-slate-900">
          Speakers
        </Link>
        <a href="#signup" className="transition hover:text-slate-900">
          Sign up
        </a>
      </nav>
      <a
        href="#signup"
        className="hidden rounded-full bg-[#2c2a21] px-5 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
      >
        Join waitlist
      </a>
    </div>
  </header>
);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto flex max-w-[90rem] flex-col gap-20 px-6 pb-20 pt-16 md:pt-20 lg:gap-24">
        <section className="relative overflow-hidden px-8 py-16 md:px-16">
          <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-transparent blur-[120px]" aria-hidden="true" />
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Upcoming cohort
              </span>
              <div>
                <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  Next Venture Academy cohort opens soon
                </h1>
                <p className="mt-4 text-lg text-slate-600">
                  For aspiring investors, angel investors & next-generation venture capitalists.
                </p>
              </div>
              <div>
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-full bg-[#2c2a21] px-8 py-3 text-base font-semibold text-white transition hover:brightness-110"
                >
                  I want in
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] w-full overflow-hidden border border-slate-100 bg-transparent">
              <Image
                src="/hero-image.png"
                alt="Community of operators meeting"
                fill
                sizes="(min-width: 768px) 28rem, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-8" />
        </section>

        <section aria-label="Partners" className="bg-transparent px-6 py-10">
          <p className="text-center text-3xl font-semibold uppercase tracking-[0.2em] text-slate-900">
            Partners & Experts
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="logo-marquee-track">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => {
                  const isWideLogo =
                    logo.name === "Doers Summit" || logo.name === "Hustle Fund";
                  const isJasonBall = logo.name === "Jason Ball";
                  const isLaconia = logo.name === "Laconia";
                  const isFund = logo.name === "0100 Fund";
                  const isConferences = logo.name === "0100 Conferences";
                  const displayWidth = isJasonBall
                    ? 100
                    : isConferences
                      ? 110
                      : isLaconia || isFund
                        ? 130
                        : isWideLogo
                          ? 180
                          : 120;
                  const displayHeight = isJasonBall
                    ? 100
                    : isConferences
                      ? 110
                      : isLaconia || isFund
                        ? 130
                        : 120;

                  return (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex min-w-[180px] items-center justify-center opacity-70 transition hover:opacity-100"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        width={displayWidth}
                        height={displayHeight}
                        className="object-contain"
                        style={{
                          width: `${displayWidth}px`,
                          height: `${displayHeight}px`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
          </div>
        </section>

        <section id="overview" className="px-6 py-10 text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.2em] text-slate-900">
            Our beliefs
          </h2>
          <p className="mt-6 text-base text-slate-600 md:px-40">
            The tech world is evolving fast. But the venture investing? Not so much. Same people, similar background, with artificial barriers to enter the investment world.
            New technologies require diverse insights; new founders need a new wave of investors to understand them, and new markets need innovative ways of financing.
            Everyone should have access to the necessary knowledge and by providing accessible education real-world education from industry professionals we aim for the needed diversity and impact.
            Our goal is to create a more transparent industry, welcoming individuals from outside the traditional bubble.
          </p>
        </section>

        <PastSpeakersSection />

        <section className="px-6">
          <h3 className="mb-6 text-2xl font-semibold uppercase tracking-[0.2em] text-slate-900">
            Watch clips from our previous speakers
          </h3>
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
            {instagramPosts.map((permalink) => (
              <InstagramEmbed key={permalink} permalink={permalink} />
            ))}
          </div>
        </section>

        <section id="signup" aria-labelledby="signup-title" className="space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Secure a spot
            </p>
            <h2 id="signup-title" className="mt-3 text-3xl font-semibold text-slate-900">
              Tell us about you to join the next cohort
            </h2>
            <p className="mt-2 max-w-2xl text-base text-slate-600">
              Share your name, company, and best email so we can review your profile and give you priority access when the new cohort opens.
            </p>
          </div>
          <a
            href="https://tally.so/r/gDMyyK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#ff5c35] px-8 py-3 text-base font-semibold text-white transition hover:brightness-110"
          >
            Apply now
          </a>
        </section>
      </main>
    </div>
  );
}
