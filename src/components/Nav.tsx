const links = [
  { label: "Proof", href: "#proof" },
  { label: "Stories", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-[12px] border-b border-line">
      <div className="h-[72px] px-8 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="font-display font-extrabold text-xl tracking-[-0.04em] text-ink">
            MOMENTUM
          </span>
          <span className="pulse-dot" aria-label="Live" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold font-display text-ink transition-colors duration-200 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="btn rounded-full bg-accent text-white uppercase text-xs font-bold tracking-widest px-6 py-3 hover:bg-[#d9531a]"
        >
          Start a brief
        </a>
      </div>
    </header>
  );
}
