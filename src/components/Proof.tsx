import { Reveal } from "./Reveal";

const stats = [
  { v: "3.4×", l: "Faster release cycles" },
  { v: "212", l: "Teams re-wired" },
  { v: "$1.8B", l: "Revenue influenced" },
  { v: "-41%", l: "Cost to operate" },
  { v: "98%", l: "Client retention" },
];

export function Proof() {
  return (
    <section id="proof" className="bg-white py-32 md:py-40 px-6">
      <div className="max-w-[1248px] mx-auto">
        <Reveal>
          <p className="kicker mb-6">01 / Proof</p>
          <h2
            className="headline leading-[0.95] max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Numbers that keep moving.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 grid-cols-2 lg:grid-cols-5">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className={i === 4 ? "col-span-2 lg:col-span-1" : ""}>
              <div className="glass-card tilt rounded-[32px] p-8 h-full min-h-[200px] flex flex-col justify-between">
                <div className="font-display font-extrabold text-4xl tracking-[-0.04em] text-brand">
                  {s.v}
                </div>
                <div className="font-mono font-bold text-[10px] uppercase tracking-[0.1em] text-ink/70 mt-10">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
