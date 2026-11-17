import { ArrowIcon, Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const tiers = [
  {
    name: "Sprint",
    price: "$18k",
    note: "2-week diagnostic",
    features: ["Operating audit", "Bottleneck map", "30-day action plan"],
    featured: false,
  },
  {
    name: "Velocity",
    price: "$64k",
    note: "10-week embedded program",
    features: [
      "Everything in Sprint",
      "Weekly operating cadence",
      "Leadership coaching",
      "Dashboards & KPI system",
    ],
    featured: true,
  },
  {
    name: "Orbit",
    price: "$180k",
    note: "6-month transformation",
    features: ["Everything in Velocity", "Org redesign", "Dedicated partner", "Quarterly board review"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-lav py-32 md:py-40 px-6 border-y border-line">
      <div className="max-w-[1248px] mx-auto">
        <Reveal>
          <p className="kicker mb-6">03 / Pricing</p>
          <h2
            className="headline leading-[0.95] max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Pick your pace.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={cn(
                  "relative h-full rounded-[32px] bg-white p-10 flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]",
                  t.featured
                    ? "border-2 border-brand shadow-[0_10px_25px_rgba(89,43,155,0.12)] lg:scale-[1.03]"
                    : "border border-line opacity-60 hover:opacity-100"
                )}
              >
                {t.featured && (
                  <span className="absolute -top-3.5 left-10 bg-brand text-white font-mono font-bold uppercase text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full">
                    Most Relevant
                  </span>
                )}
                <p className="kicker">{t.name}</p>
                <p className="headline text-6xl mt-4">{t.price}</p>
                <p className="text-sm mt-1">{t.note}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-ink text-[15px]">
                      <span className="text-accent font-bold">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "btn mt-10 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-display font-bold",
                    t.featured
                      ? "bg-accent text-white hover:bg-[#d9531a]"
                      : "border-2 border-line text-ink hover:border-brand hover:text-brand"
                  )}
                >
                  Choose {t.name}
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-[32px] bg-white/60 border border-brand/10 p-10 md:p-14 grid gap-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="kicker mb-3">Sample Brief</p>
              <h3 className="headline text-3xl leading-tight">What a Velocity engagement looks like.</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                ["Week 1–2", "Map every handoff, meeting and approval across 3 core teams."],
                ["Week 3–7", "Install the weekly cadence, retire dead rituals, launch KPI board."],
                ["Week 8–10", "Hand over the playbook; leaders run the rhythm on their own."],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono font-bold text-xs uppercase tracking-[0.1em] text-accent mb-2">{k}</p>
                  <p className="text-sm">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
