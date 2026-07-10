import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarfieldBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% -10%, var(--surface) 0%, var(--background) 45%, var(--background-edge) 100%)",
      }}
      aria-hidden="true"
    >
      {/* soft nebula blobs, two-tone like the rest of the site's accents */}
      <div
        className="absolute -left-1/4 top-0 h-[70vh] w-[70vh] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-dim), transparent)" }}
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-2-dim), transparent)" }}
      />

      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ alpha: true, antialias: true }}
        className="h-full w-full"
      >
        <Stars
          radius={60}
          depth={40}
          count={2200}
          factor={2}
          saturation={0}
          fade
          speed={0.4}
        />
      </Canvas>
    </div>
  );
}
