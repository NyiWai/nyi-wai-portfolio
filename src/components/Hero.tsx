import { lazy, Suspense } from "react";
import { Mail, Code2 } from "lucide-react";
import PortraitArch from "./PortraitArch";
import LinkedinIcon from "./LinkedinIcon";


const HoloCore = lazy(() => import("./HoloCore"));

const socials = [
  { href: "mailto:nyiwaiph29@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/NyiWai", label: "GitHub", icon: Code2 },
  { href: "https://www.linkedin.com/in/nyi-wai-phyo-0040a7309/", label: "LinkedIn", icon: LinkedinIcon},
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="grid-texture pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <Suspense fallback={null}>
        <HoloCore />
      </Suspense>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
        <div className="order-2 flex flex-col items-center gap-6 md:order-1 md:items-start animate-fade-up">
          <PortraitArch />
          <div className="flex justify-center gap-3 md:justify-start">
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

        <div className="order-1 md:order-2 animate-fade-up [animation-delay:120ms]">
          <p className="font-mono text-xs tracking-[0.2em] text-accent">
            &lt;/&gt; SOFTWARE ENGINEER &amp; ENTREPRENEUR
          </p>
          <h1 className="animate-flicker-in text-glow mt-4 font-display text-4xl font-semibold leading-[1.1] text-heading text-balance md:text-6xl">
            Hi, I&apos;m Nyi Wai.
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-body md:text-lg">
            I design and build software end-to-end — from system architecture
            to the interface people actually use. Currently splitting my time
            between client engineering work and my own products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-full bg-heading px-6 py-3 font-body text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-divider px-6 py-3 font-body text-sm font-medium text-heading transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
