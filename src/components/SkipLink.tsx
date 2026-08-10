export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-white text-black font-mono text-xs font-bold rounded shadow-lg outline-none focus:ring-2 focus:ring-white"
    >
      Skip to main content
    </a>
  );
}
