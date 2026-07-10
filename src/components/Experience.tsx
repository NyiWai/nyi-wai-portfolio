import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const focus = [
  {
    title: "Full-Stack Development",
    detail:
      "Building complete web applications — API design, data modeling, and the interfaces on top of them.",
  },
  {
    title: "Mobile Applications",
    detail:
      "Shipping cross-platform mobile apps that stay close to native performance and feel.",
  },
  {
    title: "System Architecture",
    detail:
      "Planning the systems underneath a product so they scale without a rewrite.",
  },
];

const stack = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "PHP"] },
  { group: "Frameworks", items: ["React", "Next.js", "Node.js", "Django", "React Native", "Laravel"] },
  { group: "Data", items: ["PostgreSQL", "MySQL"] },
  { group: "Infra", items: ["Docker", "AWS"] },
];

type Status = "launching" | "live" | "shipped";

interface Project {
  id: string;
  name: string;
  // A short glyph/emoji (e.g. "◆"), an image filename from /public (e.g. "focusflow-logo.png"),
  // or omit entirely to fall back to the project name's first letter.
  logo?: string;
  category: string;
  year: string;
  status: Status;
  role: string;
  description: string;
  stack: string[];
  link?: string;
}

const IMAGE_LOGO_PATTERN = /\.(png|jpe?g|svg|webp|gif)$/i;

function isImageLogo(logo?: string) {
  return !!logo && IMAGE_LOGO_PATTERN.test(logo);
}

function logoSrc(logo: string) {
  return logo.startsWith("/") ? logo : `/${logo}`;
}

// Swap these out for your real projects — name, logo, category, year, status,
// a one-line description, and the stack you used.
const projects: Project[] = [
  {
    id: "01",
    name: "FocusFlow",
    logo: "FocusFlow_Logo.png",
    category: "SaaS Platform",
    year: "2026",
    status: "launching",
    role: "Full-Stack Development",
    description:
      "An all-in-one productivity app to help you focus, manage tasks, track habits, organize to-do lists, and plan every day with clarity.",
    stack: ["React Native", "TypeScript", "PostgreSQL"],
  },
  {
    id: "02",
    name: "NeTeN",
    logo: "NeTeN.png",
    category: "SaaS Platform",
    year: "2025",
    status: "shipped",
    role: "Mobile Development",
    description:
      "NeTeN is an NFC networking app that lets professionals exchange contact info instantly and share only the social media accounts they choose — no more wasted business cards or oversharing.",
    stack: ["React Native", "Typescript"],
  },
  {
    id: "03",
    name: "PU Myanmar Community Support",
    logo: "PUMMCommunitySupport.png",
    category: "Community Support",
    year: "2025",
    status: "launching",
    role: "Full-Stack Development",
    description:
      "A community platform designed to help Myanmar students at President University connect, access essential resources, stay updated with campus information, and support one another throughout their academic journey.",
    stack: ["React", "Django", "TailwindCSS", "PostgreSQL", "Docker"],
    link: "#",
  },
];

const statusStyles: Record<Status, string> = {
  launching: "border-accent-2/50 text-accent-2",
  live: "border-accent/50 text-accent",
  shipped: "border-divider text-muted",
};

const statusLabel: Record<Status, string> = {
  launching: "Launching soon",
  live: "Live",
  shipped: "Shipped",
};

const statusDot: Record<Status, string> = {
  launching: "bg-accent-2 animate-pulse",
  live: "bg-accent",
  shipped: "bg-muted",
};

function ProjectLogo({ project }: { project: Project }) {
  if (project.logo && isImageLogo(project.logo)) {
    return (
      <img
        src={logoSrc(project.logo)}
        alt={`${project.name} logo`}
        className="h-full w-full object-cover"
      />
    );
  }
  return <>{project.logo ?? project.name.charAt(0)}</>;
}

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="experience" className="border-t border-divider/60 bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-accent">02 · ENGINEERING</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-heading md:text-4xl">
          &lt;/&gt; Experience &amp; stack
        </h2>

        <div className="mt-14 grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            {focus.map((item) => (
              <div key={item.title} className="border-l border-divider pl-6">
                <h3 className="font-display text-lg font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-sm font-body text-sm leading-relaxed text-body">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {stack.map((group) => (
              <div key={group.group}>
                <p className="font-mono text-xs tracking-[0.15em] text-muted">
                  {group.group.toUpperCase()}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <span
                      key={tool}
                      className="glow-border rounded-md border border-divider bg-surface px-3 py-1.5 font-mono text-xs text-heading transition-colors hover:text-accent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected work — numbered, expandable project list */}
        <div className="mt-24">
          <p className="font-mono text-xs tracking-[0.2em] text-accent">SELECTED WORK</p>
          <h3 className="mt-4 font-display text-2xl font-semibold text-heading md:text-3xl">
            Projects
          </h3>

          <div className="mt-10 border-t border-divider/60">
            {projects.map((project) => {
              const isOpen = openId === project.id;
              return (
                <div key={project.id} className="border-b border-divider/60">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                    className="glow-border flex w-full items-center gap-4 border border-transparent py-6 text-left transition-colors sm:gap-6"
                  >
                    <span className="w-6 shrink-0 font-mono text-xs text-muted">
                      {project.id}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-divider bg-surface font-display text-sm text-heading">
                      <ProjectLogo project={project} />
                    </span>

                    <span className="flex-1 min-w-0">
                      <span className="flex flex-wrap items-center gap-3">
                        <span className="font-display text-xl font-medium text-heading sm:text-2xl">
                          {project.name}
                        </span>
                        {project.status === "launching" && (
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${statusStyles[project.status]}`}
                          >
                            <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                            {statusLabel[project.status]}
                          </span>
                        )}
                      </span>
                    </span>

                    <span className="hidden shrink-0 text-right font-mono text-xs text-muted sm:block">
                      <span className="uppercase tracking-wide">{project.category}</span>
                      <span className="ml-3 text-accent">{project.year}</span>
                    </span>

                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-muted transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-4 pb-6 pl-10 sm:pl-16">
                        <span
                          className={`inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide ${statusStyles[project.status]}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`} />
                          {project.role} · {statusLabel[project.status]}
                        </span>

                        <p className="max-w-lg font-body text-sm leading-relaxed text-body">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tool) => (
                            <span
                              key={tool}
                              className="glow-border rounded-md border border-divider bg-surface px-3 py-1.5 font-mono text-xs text-heading transition-colors hover:text-accent"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {project.link && (
                          <a
                            href={project.link}
                            className="group inline-flex w-fit items-center gap-1 font-body text-sm text-heading transition-colors hover:text-accent"
                          >
                            View more
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}