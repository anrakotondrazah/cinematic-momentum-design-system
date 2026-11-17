const brands = [
  "Northwind",
  "Helix Labs",
  "Vantage",
  "Orbital",
  "Kinetic",
  "Parallax",
  "Lumen & Co",
  "Strata",
  "Fathom",
  "Aperture",
];

export function Marquee() {
  const row = [...brands, ...brands];
  return (
    <section
      aria-label="Clients"
      className="bg-lav border-y border-line py-10 overflow-hidden"
    >
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-20 pr-20" aria-hidden={k === 1}>
            {row.slice(0, brands.length).map((b, i) => (
              <span
                key={`${k}-${i}`}
                className="font-display font-extrabold uppercase text-3xl tracking-[-0.03em] text-ink opacity-20 whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
