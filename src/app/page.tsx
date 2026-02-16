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
    <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
      <Link href="/" className="flex items-center gap-3" aria-label="0100 Academy home">
        <Image
          src="/logo.png"
          alt="0100 Academy logo"
          width={96}
          height={96}
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24"
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
        className="inline-flex rounded-full bg-[#2c2a21] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110 sm:px-5 sm:text-sm"
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
      <main className="mx-auto flex max-w-[90rem] flex-col gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:gap-20 lg:pt-20">
        <section className="relative overflow-hidden px-0 py-8 sm:px-4 sm:py-12 md:px-12 md:py-16">
          <div className="absolute -top-16 right-0 h-56 w-56 rounded-full bg-transparent blur-[120px]" aria-hidden="true" />
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Upcoming cohort
              </span>
              <div>
                <h1 id="hero-title" className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                  Next Venture Academy cohort opens soon
                </h1>
                <p className="mt-4 text-base text-slate-600 sm:text-lg">
                  For aspiring investors, angel investors & next-generation venture capitalists.
                </p>
              </div>
              <div>
                <a
                  href="#signup"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#2c2a21] px-8 py-3 text-base font-semibold text-white transition hover:brightness-110 sm:w-auto"
                >
                  I want in
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px] w-full overflow-hidden border border-slate-100 bg-transparent sm:min-h-[320px] md:min-h-[360px]">
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

        <section aria-label="Partners" className="bg-transparent px-0 py-6 sm:px-2 sm:py-10">
          <p className="text-center text-2xl font-semibold uppercase tracking-[0.15em] text-slate-900 sm:text-3xl sm:tracking-[0.2em]">
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
                      className="flex min-w-[140px] items-center justify-center opacity-70 transition hover:opacity-100 sm:min-w-[180px]"
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

        <section id="overview" className="px-0 py-8 text-center sm:px-4 sm:py-10">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.15em] text-slate-900 sm:text-3xl sm:tracking-[0.2em]">
            Our beliefs
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-sm text-slate-600 sm:mt-6 sm:text-base md:px-10 lg:px-24">
            The tech world is evolving fast. But the venture investing? Not so much. Same people, similar background, with artificial barriers to enter the investment world.
            New technologies require diverse insights; new founders need a new wave of investors to understand them, and new markets need innovative ways of financing.
            Everyone should have access to the necessary knowledge and by providing accessible education real-world education from industry professionals we aim for the needed diversity and impact.
            Our goal is to create a more transparent industry, welcoming individuals from outside the traditional bubble.
          </p>
        </section>

        <PastSpeakersSection />

        <section className="px-0 sm:px-4">
          <h3 className="mb-6 text-xl font-semibold uppercase tracking-[0.15em] text-slate-900 sm:text-2xl sm:tracking-[0.2em]">
            Watch clips from our previous speakers
          </h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {instagramPosts.map((permalink) => (
              <InstagramEmbed key={permalink} permalink={permalink} />
            ))}
          </div>
        </section>

        <section id="signup" aria-labelledby="signup-title" className="scroll-mt-28 space-y-6 sm:space-y-8">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
              Secure a spot
            </p>
            <h2 id="signup-title" className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Tell us about you to join the next cohort
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 sm:mx-0 sm:text-base">
              Share your name, company, and best email so we can review your profile and give you priority access when the new cohort opens.
            </p>
          </div>
          <a
            href="https://tally.so/r/gDMyyK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#ff5c35] px-8 py-3 text-base font-semibold text-white transition hover:brightness-110 sm:w-auto"
          >
            Apply now
          </a>
        </section>
      </main>
    </div>
  );
}
