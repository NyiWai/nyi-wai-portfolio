const services = [
  {
    title: "Full-Stack Development",
    detail: "End-to-end web apps — from the database to the interface.",
  },
  {
    title: "Mobile Applications",
    detail: "Cross-platform apps that feel native on iOS and Android.",
  },
  {
    title: "System Architecture",
    detail: "Backend systems designed to stay reliable as they grow.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-divider/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-accent">01 · ABOUT ME</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-heading md:text-4xl">
              A little about me.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl font-body text-base leading-relaxed text-body md:text-lg">
              I&apos;m a software engineer and entrepreneur who likes building
              things all the way through — architecture, backend, interface.
              I work across web and mobile, and I care as much about how a
              system holds up under real use as how it looks on day one.
              Alongside client work, I&apos;m building my own products, turning
              ideas I can&apos;t let go of into shipped software.
            </p>

            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-body md:text-lg">
              Here&apos;s what I can help you with:
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glow-border rounded-2xl border border-divider bg-surface p-5"
                >
                  <span
                    className="block h-1.5 w-5 rounded-full bg-accent/70"
                    aria-hidden="true"
                  />
                  <dt className="mt-3 font-display text-sm font-semibold text-heading">
                    {service.title}
                  </dt>
                  <dd className="mt-2 font-body text-sm leading-relaxed text-body">
                    {service.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
