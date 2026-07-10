import { ArrowUpRight } from "lucide-react";

// const corners = [
//   "top-2 left-2",
//   "top-2 right-2 rotate-90",
//   "bottom-2 right-2 rotate-180",
//   "bottom-2 left-2 -rotate-90",
// ];

export default function PortraitArch() {
  return (
    <div className="relative mx-auto w-full max-w-sm px-8 pt-8 pb-2">
      {/* two-tone glow behind everything, for depth */}
      <div
        className="absolute inset-x-6 -top-4 -bottom-4 rounded-t-[999px] blur-2xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-dim), transparent)" }}
      />
      <div
        className="absolute -inset-x-2 top-1/3 h-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-2-dim), transparent)" }}
      />

      {/* slow-orbiting dashed ring */}
      <svg
        viewBox="0 0 400 460"
        className="pointer-events-none absolute -inset-x-4 -inset-y-6 h-[calc(100%+3rem)] w-[calc(100%+2rem)] animate-orbit"
        aria-hidden="true"
      >
        <ellipse
          cx="200"
          cy="230"
          rx="178"
          ry="196"
          fill="none"
          stroke="var(--accent-2)"
          strokeWidth="1.25"
          strokeDasharray="2 10"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>

      {/* loose hand-drawn ring wrapping the frame — sits behind the photo, pokes out past its edges */}
      {/* <svg
        viewBox="0 0 400 460"
        className="pointer-events-none absolute -inset-x-2 -inset-y-4 h-[calc(100%+2rem)] w-[calc(100%+1rem)]"
        aria-hidden="true"
      >
        <path
          d="M60 150 C 15 95, 55 30, 140 24 C 222 18, 305 42, 322 112 C 336 164, 306 198, 338 232 C 366 261, 348 302, 296 312 C 248 321, 232 362, 168 366 C 100 371, 38 338, 34 278 C 31 224, 72 202, 60 150 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg> */}

      {/* photo — a transparent-background PNG cutout floats directly over the page, no frame behind it */}
      <div className="relative aspect-[320/380] w-full overflow-hidden">
        {/* {corners.map((position) => (
          <svg
            key={position}
            viewBox="0 0 18 18"
            className={`pointer-events-none absolute z-10 h-5 w-5 ${position}`}
            aria-hidden="true"
          >
            <path
              d="M1 17 L1 1 L17 1"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ))} */}

        <img
          src="${import.meta.env.BASE_URL}nyi-wai.png"
          alt="Nyi Wai"
          width={320}
          height={380}
          className="h-full w-full object-contain opacity-85"
        />

        <div
          className="animate-scan-sweep pointer-events-none absolute inset-x-4 z-10 h-14"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--accent-dim), transparent)",
          }}
        />
      </div>

      {/* spinning "let's talk" badge, overlapping the frame's top-right corner */}
      <a
        href="#contact"
        aria-label="Get in touch"
        className="group absolute top-2 right-2 flex h-20 w-20 items-center justify-center rounded-full border border-divider bg-background/80 backdrop-blur-sm transition-colors hover:border-accent"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
          <defs>
            <path id="badgeCircle" d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
          </defs>
          <text fontSize="8.4" fill="var(--muted)" letterSpacing="1.5">
            <textPath href="#badgeCircle" startOffset="0%" className="font-mono uppercase">
              come on · let&apos;s talk ·
            </textPath>
          </text>
        </svg>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          className="relative text-heading transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </div>
  );
}
