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
    items: [
      "React Native",
      "Expo",
      "Android",
      "iOS",
      "App performance tuning",
    ],
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
    <main className="mx-auto w-full max-w-6xl px-5 pb-14 pt-7 md:px-10 md:pb-20 md:pt-12">
      <header
        className="panel reveal grid gap-6 overflow-hidden p-6 md:p-10 lg:grid-cols-[1.35fr_0.8fr] lg:gap-10"
        style={{ animationDelay: "20ms" }}
      >
        <div>
          <p className="kicker">Editorial Tech Portfolio</p>
          <h1 className="font-display mt-4 text-4xl leading-[0.95] text-[var(--ink)] md:text-6xl">
            Alistair Cerio
            <span className="mt-2 block text-2xl leading-tight text-[var(--brand-strong)] md:text-4xl">
              React and React Native Engineer
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-[1.02rem] text-[var(--muted)] md:text-lg">
            I build reliable web and mobile products with clean code, practical
            architecture, and a strong focus on user experience.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:alistair.cerio@gmail.com"
              className="rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/chipcerio"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              LinkedIn
            </a>
            <a
              href="/AlistairCerio_React_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-semibold transition hover:border-[var(--brand)] hover:text-[var(--brand-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              Resume
            </a>
          </div>
        </div>

        <aside className="panel-soft h-fit p-5 md:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
            Delivery Profile
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-[0.36rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg border border-[var(--line)] bg-white px-4 py-3">
            <p className="font-mono text-[0.69rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              Current Focus
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--ink)]">
              Product-grade web and mobile frontend systems
            </p>
          </div>
        </aside>
      </header>

      <section
        className="reveal mt-7"
        style={{ animationDelay: "110ms" }}
        aria-labelledby="skills-title"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Capabilities</p>
            <h2 id="skills-title" className="section-title mt-3">
              Core Skills
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-sm text-[var(--muted)] md:block">
            Reusable patterns built for maintainability, speed, and release
            confidence.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.label}
              className="panel-soft reveal p-5"
              style={{ animationDelay: `${140 + index * 40}ms` }}
            >
              <h3 className="font-display text-2xl leading-none text-[var(--ink)]">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--line)] bg-white px-3 py-1 text-sm text-[var(--muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="reveal mt-10"
        style={{ animationDelay: "170ms" }}
        aria-labelledby="projects-title"
      >
        <div className="mb-5">
          <p className="kicker">Builds</p>
          <h2 id="projects-title" className="section-title mt-3">
            Selected Projects
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="panel-soft reveal relative p-5 transition hover:-translate-y-0.5"
              style={{ animationDelay: `${200 + index * 45}ms` }}
            >
              <div className="absolute left-5 top-0 h-1.5 w-16 rounded-b-full bg-[var(--brand)]" />
              <h3 className="font-display mt-3 text-2xl leading-none text-[var(--ink)]">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="reveal mt-10"
        style={{ animationDelay: "230ms" }}
        aria-labelledby="experience-title"
      >
        <div className="mb-5">
          <p className="kicker">Journey</p>
          <h2 id="experience-title" className="section-title mt-3">
            Experience
          </h2>
        </div>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <article
              key={`${item.role}-${item.company}`}
              className="panel-soft reveal p-5 md:p-6"
              style={{ animationDelay: `${270 + index * 35}ms` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-3xl leading-[0.9] text-[var(--ink)] md:text-4xl">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--brand-strong)]">
                    {item.company}
                  </p>
                </div>
                <p className="rounded-full border border-[var(--line)] bg-white px-3 py-1 font-mono text-xs text-[var(--muted)]">
                  {item.period}
                </p>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-[var(--muted)]">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-[0.34rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
