export default function Footer() {
  return (
    <footer className="border-t border-divider/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:px-10 md:text-left">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Nyi Wai, Founder & Software Engineer
        </p>
        <a href="#top" className="font-mono text-xs text-muted transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
