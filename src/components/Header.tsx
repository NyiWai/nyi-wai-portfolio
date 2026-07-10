const links = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact Me" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-divider/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-divider font-display text-sm font-semibold text-heading">
            N
          </span>
          <span className="font-display text-sm font-medium tracking-wide text-heading">
            Nyi&nbsp;Wai
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm text-body transition-colors hover:text-heading"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent shadow-[0_0_8px_var(--accent)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-accent/40 px-4 py-2 font-mono text-xs text-heading transition-colors hover:border-accent hover:bg-accent-dim md:inline-block"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
