import { ArrowIcon, Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-brand/[0.07] blur-3xl pointer-events-none"
      />
      <div className="relative max-w-[1248px] w-full flex flex-col items-center">
        <Reveal>
          <p className="kicker mb-8">● Operations studio — Est. 2014</p>
        </Reveal>
        <Reveal delay={100}>
          <h1
            className="headline leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
          >
            Move faster
            <br />
            than <span className="text-brand">the market.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 max-w-xl text-lg">
            We rebuild the operating rhythm of high-velocity businesses — so
            decisions ship in days, not quarters.
          </p>
        </Reveal>
        <Reveal delay={300} className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="btn group inline-flex items-center gap-3 rounded-full bg-accent text-white font-display font-bold px-9 py-5 text-lg hover:bg-[#d9531a]"
          >
            Book a strategy call
            <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#stories"
            className="btn rounded-full border-2 border-line text-ink font-display font-bold px-9 py-[18px] text-lg hover:border-brand hover:text-brand"
          >
            See the work
          </a>
        </Reveal>
      </div>
    </section>
  );
}
