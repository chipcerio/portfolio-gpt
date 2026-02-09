const experience = [
  {
    role: "Software Engineer",
    company: "Self-employed",
    period: "Apr 2024 - Present",
    points: [
      "Building a cross-platform marketplace platform for jobs, rentals, and materials.",
      "Designed modular React Native + Expo architecture with reusable UI primitives.",
      "Implemented GraphQL/REST integrations and React Query data flows.",
    ],
  },
  {
    role: "React Native Developer",
    company: "OAKTree Innovations",
    period: "Oct 2024 - Mar 2025",
    points: [
      "Delivered React-based web/mobile features and responsive UI components.",
      "Improved frontend performance with memoization and code-splitting.",
      "Collaborated in Agile sprints, reviews, and UX refinement.",
    ],
  },
  {
    role: "React Developer",
    company: "OnCloud",
    period: "Jul 2024 - Oct 2024",
    points: [
      "Built and maintained React + TypeScript web features from design specs.",
      "Created reusable components to speed delivery and improve UI consistency.",
      "Partnered with QA/design for pixel-perfect execution and stable releases.",
    ],
  },
  {
    role: "Android / React Native Developer",
    company: "Appetiser",
    period: "May 2019 - Jun 2024",
    points: [
      "Led delivery for cross-platform apps and mentored junior developers.",
      "Wrote epics, stories, and PRs to keep Agile cycles structured and clear.",
      "Improved feature parity and consistency across iOS and Android builds.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Cirqled",
    period: "Sep 2018 - Apr 2019",
    points: [
      "Delivered Expo apps for iOS and Android with responsive chat/group UX.",
      "Contributed React web frontend work alongside the web team.",
    ],
  },
  {
    role: "Android / React Native Developer",
    company: "Symph",
    period: "Jan 2015 - Sep 2018",
    points: [
      "Built Android and React Native products for startup and enterprise clients.",
      "Designed scalable app architectures and API integrations.",
      "Contributed to hackathons and mentored junior engineers.",
    ],
  },
];

const skills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "Expo",
  "Context API",
  "Redux",
  "React Query",
  "GraphQL",
  "REST APIs",
  "Material UI",
  "shadcn/ui",
  "Figma handoff",
  "Agile/Scrum",
  "Sentry",
  "AWS Amplify",
];

const projects = [
  {
    name: "Fraim",
    detail:
      "Maintained a React Native product delivering personalized daily team updates with real-time API-backed flows.",
  },
  {
    name: "Exclusive Punt",
    detail:
      "Built a cross-platform React Native app for live racing tips/data with TypeScript and hook-driven state logic.",
  },
  {
    name: "Asia Car Service",
    detail:
      "Ongoing marketplace app focused on modular architecture, secure data handling, and scalable frontend systems.",
  },
];

export default function Home() {
  return (
    <div className="grain min-h-screen bg-[linear-gradient(140deg,#f4f2ec_0%,#d9e4de_45%,#f7f3ea_100%)]">
      <main className="mx-auto w-full max-w-6xl px-5 py-8 md:px-10 md:py-12">
        <section className="fade-up rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_18px_60px_-35px_rgba(0,0,0,.4)] md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--brand)]">React / React Native Portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Alistair Cerio
            <span className="block text-[var(--brand-strong)]">Building scalable web and mobile products.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base text-[var(--muted)] md:text-lg">
            Frontend and mobile engineer with 9+ years of production experience shipping React, Next.js, and React Native applications with clean architecture, reusable components, and strong UX fidelity.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a
              href="mailto:alistair.cerio@gmail.com"
              className="rounded-full bg-[var(--brand)] px-5 py-2.5 font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            >
              alistair.cerio@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/chipcerio"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 font-semibold transition hover:border-[var(--brand)]"
            >
              LinkedIn /in/chipcerio
            </a>
            <a
              href="/AlistairCerio_React_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 font-semibold transition hover:border-[var(--accent)]"
            >
              View Resume
            </a>
          </div>
        </section>

        <section className="fade-up delay-1 mt-8 grid gap-6 md:grid-cols-[1.1fr_1fr]">
          <article className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-2xl font-bold">Core Skills</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <div className="mt-5 space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="rounded-2xl border border-[var(--line)] bg-white p-4">
                  <p className="font-semibold">{project.name}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{project.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="fade-up delay-2 mt-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
          <h2 className="text-2xl font-bold">Experience Timeline</h2>
          <div className="mt-6 grid gap-4">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand)]">{item.period}</p>
                </div>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">{item.company}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up delay-3 mt-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 text-center md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--brand)]">Open to opportunities</p>
          <h2 className="mt-3 text-3xl font-bold">Let&apos;s build your next product.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--muted)]">
            I work across frontend and mobile stacks to ship polished user experiences with maintainable code and fast iteration.
          </p>
        </section>
      </main>
    </div>
  );
}
