const highlights = [
  "9+ years building production web and mobile apps",
  "Strong React, React Native, and TypeScript delivery",
  "Clean architecture and reusable component systems",
  "Agile collaboration with design, QA, and product teams",
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Material UI", "shadcn/ui"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "Android", "iOS", "App performance tuning"],
  },
  {
    label: "Data & API",
    items: ["GraphQL", "REST APIs", "React Query", "Context API", "Redux"],
  },
  {
    label: "Tooling",
    items: ["GitHub", "Jira", "Sentry", "AWS Amplify", "VS Code"],
  },
];

const projects = [
  {
    name: "Asia Car Service",
    detail:
      "Cross-platform marketplace app for jobs, services, rentals, and materials with reusable architecture and secure data flows.",
  },
  {
    name: "Fraim",
    detail:
      "React Native app focused on personalized daily team updates with API integrations and scalable frontend patterns.",
  },
  {
    name: "Exclusive Punt",
    detail:
      "Cross-platform mobile app for live racing tips and data, built with TypeScript and maintainable state handling.",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Self-employed",
    period: "Apr 2024 - Present",
    points: [
      "Built cross-platform marketplace features using React Native, Expo, GraphQL, and REST APIs.",
      "Designed modular frontend architecture with reusable components and clear state boundaries.",
      "Implemented secure data handling and responsive UI for varied device sizes.",
    ],
  },
  {
    role: "React Native Developer",
    company: "OAKTree Innovations",
    period: "Oct 2024 - Mar 2025",
    points: [
      "Delivered React-based web and mobile features across iOS, Android, and web.",
      "Converted Figma mockups into maintainable, responsive UI components.",
      "Improved performance with memoization and code-splitting strategies.",
    ],
  },
  {
    role: "React Developer",
    company: "OnCloud",
    period: "Jul 2024 - Oct 2024",
    points: [
      "Built and maintained React + TypeScript web features aligned to design requirements.",
      "Created reusable component patterns to improve delivery speed and consistency.",
      "Worked with QA and design to ship reliable, polished releases.",
    ],
  },
  {
    role: "Android / React Native Developer",
    company: "Appetiser",
    period: "May 2019 - Jun 2024",
    points: [
      "Led cross-platform app delivery and mentored junior engineers.",
      "Maintained structured Agile cycles through epics, stories, and clean pull requests.",
      "Improved iOS/Android feature parity and overall UX consistency.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Cirqled",
    period: "Sep 2018 - Apr 2019",
    points: [
      "Built and shipped Expo apps for iOS and Android.",
      "Contributed to React web frontend development and collaborative delivery.",
    ],
  },
  {
    role: "Android / React Native Developer",
    company: "Symph",
    period: "Jan 2015 - Sep 2018",
    points: [
      "Delivered Android and React Native apps for startup and enterprise clients.",
      "Designed scalable application structures and API integration layers.",
      "Supported team growth through mentorship and technical collaboration.",
    ],
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-8 md:px-10 md:py-12">
      <header className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-10">
        <p className="text-sm font-medium text-[var(--brand)]">Alistair Cerio</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight md:text-5xl">
          React and React Native Engineer
        </h1>
        <p className="mt-4 max-w-3xl text-[var(--muted)] md:text-lg">
          I build reliable web and mobile products with clean code, practical architecture, and a strong focus on user experience.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:alistair.cerio@gmail.com"
            className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/chipcerio"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="/AlistairCerio_React_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold"
          >
            Resume
          </a>
        </div>
      </header>

      <section className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold">What You Can Expect</h2>
        <ul className="mt-4 grid gap-2 text-[var(--muted)] md:grid-cols-2">
          {highlights.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Core Skills</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.label} className="rounded-xl border border-[var(--line)] bg-white p-4">
              <h3 className="text-sm font-semibold text-[var(--brand)]">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-md border border-[var(--line)] px-2.5 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-xl border border-[var(--line)] bg-white p-4">
              <h3 className="font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-5 space-y-4">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="rounded-xl border border-[var(--line)] bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold md:text-lg">{item.role}</h3>
                <p className="font-mono text-xs text-[var(--muted)]">{item.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-[var(--brand)]">{item.company}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
