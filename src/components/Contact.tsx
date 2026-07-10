import { Mail, Code2, Camera, ArrowUpRight } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";


const socials = [
  { href: "mailto:nyiwaiph29@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/NyiWai", label: "GitHub", icon: Code2 },
  { href: "https://www.linkedin.com/in/nyi-wai-phyo-0040a7309/", label: "LinkedIn", icon: LinkedinIcon},
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-divider/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <p className="font-mono text-xs tracking-[0.2em] text-accent">03 · CONTACT ME</p>
        <h2 className="mt-4 font-display text-3xl font-semibold text-heading text-balance md:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-body text-base leading-relaxed text-body">
          I&apos;m open to freelance work, collaborations, and conversations
          about ideas worth building. Send a note — I read every one.
        </p>

        <a
          href="mailto:hello@nyiwai.dev"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-heading px-7 py-3.5 font-body text-sm font-medium text-background shadow-[0_0_0_0_var(--accent-dim)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_32px_4px_var(--accent-dim)]"
        >
          nyiwaiph29@gmail.com
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <div className="mt-10 flex justify-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-divider text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
