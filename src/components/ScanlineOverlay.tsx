export default function ScanlineOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      <div className="scanline-texture absolute inset-0" />
      <div
        className="animate-scan-sweep absolute inset-x-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--accent-dim), transparent)",
        }}
      />
    </div>
  );
}
