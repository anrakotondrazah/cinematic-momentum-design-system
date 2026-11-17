import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative bg-night text-white py-32 md:py-40 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-60 -right-40 w-[800px] h-[800px] rounded-full bg-brand/20 blur-[120px] pointer-events-none"
      />
      <div className="relative max-w-[1248px] mx-auto">
        <Reveal>
          <p className="kicker !text-white/60 mb-8">04 / Contact</p>
          <h2
            className="headline !text-white leading-[0.92]"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Ready to
            <br />
            accelerate?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-xl text-lg text-white/60">
            Send us a two-line brief. A partner replies within one business day
            with a first read on where your momentum is leaking.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <a
            href="mailto:hello@yourbrand.com"
            className="inline-block mt-12 font-display font-extrabold tracking-[-0.04em] text-accent text-3xl sm:text-5xl lg:text-6xl break-all transition-transform duration-200 hover:scale-[1.02] origin-left"
          >
            hello@yourbrand.com
          </a>
        </Reveal>

        <div className="mt-28 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 font-mono text-xs uppercase tracking-[0.1em] text-white/40">
          <span>© 2026 Your Brand</span>
          <span>New York · London · Singapore</span>
        </div>
      </div>
    </section>
  );
}
