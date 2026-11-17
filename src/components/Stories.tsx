import { Reveal } from "./Reveal";

const img = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200`;

const featured = {
  src: img(8204363),
  tag: "Case 001 — Logistics",
  title: "Northwind cut dispatch time from 9 days to 36 hours.",
};

const subs = [
  { src: img(7693729), tag: "Case 002 — Fintech", title: "Helix shipped 4× more, with the same team." },
  { src: img(39205077), tag: "Case 003 — Retail", title: "Vantage unified 14 regions on one weekly rhythm." },
  { src: img(6285113), tag: "Case 004 — Energy", title: "Orbital halved its approval chain overnight." },
  { src: img(9301835), tag: "Case 005 — SaaS", title: "Kinetic doubled pipeline velocity in a quarter." },
];

function Meta({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="bento-meta absolute inset-0 flex flex-col justify-end p-8 text-white">
      <span className="font-mono font-bold uppercase tracking-[0.1em] text-[11px] text-accent">
        {tag}
      </span>
      <p className="font-display font-bold text-xl md:text-3xl tracking-[-0.03em] leading-tight mt-2 max-w-xl">
        {title}
      </p>
    </div>
  );
}

export function Stories() {
  return (
    <section id="stories" className="bg-white py-32 md:py-40 px-6 border-t border-line">
      <div className="max-w-[1248px] mx-auto">
        <Reveal>
          <p className="kicker mb-6">02 / Stories</p>
          <h2
            className="headline leading-[0.95] max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Momentum, in motion.
          </h2>
        </Reveal>

        <Reveal className="mt-16">
          <article className="bento relative aspect-video rounded-[32px] overflow-hidden bg-ink border border-line">
            <img
              src={featured.src}
              alt={featured.title}
              loading="lazy"
              className="bento-img absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 p-8 flex gap-[6px] z-10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <Meta tag={featured.tag} title={featured.title} />
          </article>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {subs.map((s, i) => (
            <Reveal key={s.tag} delay={(i % 2) * 100}>
              <article className="bento relative aspect-[4/3] rounded-[32px] overflow-hidden bg-ink border border-line">
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  className="bento-img absolute inset-0 w-full h-full object-cover"
                />
                <Meta tag={s.tag} title={s.title} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
