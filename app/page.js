import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Reveal from '../components/Reveal';
import {
  brand,
  problem,
  solution,
  why,
  how,
  gallery,
  testimonials,
  about,
  partner,
} from '../lib/data';

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />

      {/* ───────────────────────── The Problem ───────────────────────── */}
      <section className="border-t border-line py-28 sm:py-40">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="kicker">{problem.kicker}</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <div className="space-y-6 text-2xl font-light leading-snug tracking-tight text-graphite sm:text-3xl lg:text-[2.4rem]">
                {problem.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-12 font-display text-3xl font-semibold tracking-tightest text-ink sm:text-5xl">
                {problem.punch}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────────────────────── The Solution ───────────────────────── */}
      <section id="solution" className="bg-ink py-28 text-shell sm:py-40">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="kicker !text-silver">{solution.kicker}</p>
            <h2 className="mt-6 font-display text-6xl font-semibold tracking-tightest sm:text-7xl lg:text-8xl">
              {solution.headline}
            </h2>
            <ul className="mt-12 space-y-px">
              {solution.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-baseline gap-4 border-b border-white/10 py-4 text-lg text-shell/85"
                >
                  <span className="text-xs text-silver">—</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-10 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widelabel text-silver">
              {solution.badge}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-graphite">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={solution.image}
                alt="FLOIL foil and packaging"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Why It Matters ───────────────────────── */}
      <section className="py-28 sm:py-40">
        <div className="container-x">
          <Reveal>
            <p className="kicker">{why.kicker}</p>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {why.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="bg-shell">
                <div className="flex h-full flex-col justify-between gap-12 p-8 sm:p-9">
                  <span className="font-display text-sm text-steel">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── How It Works ───────────────────────── */}
      <section id="how" className="border-y border-line bg-white py-28 sm:py-40">
        <div className="container-x">
          <Reveal>
            <p className="kicker">{how.kicker}</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tightest sm:text-6xl">
              Three steps. That’s it.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {how.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="border-t border-ink pt-6">
                  <span className="font-display text-sm tracking-widelabel text-steel">
                    {s.n}
                  </span>
                  <h3 className="mt-8 font-display text-5xl font-semibold tracking-tightest sm:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Gallery ───────────────────────── */}
      <section id="gallery" className="py-28 sm:py-40">
        <div className="container-x">
          <Reveal>
            <p className="kicker">{gallery.kicker}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            {gallery.items.map((item, i) => {
              // editorial, asymmetric museum grid
              const spans = [
                'lg:col-span-7 aspect-[16/10]',
                'lg:col-span-5 aspect-[16/10]',
                'lg:col-span-5 aspect-[16/10]',
                'lg:col-span-7 aspect-[16/10]',
              ];
              return (
                <Reveal key={item.caption} delay={(i % 2) * 0.08} className={spans[i % spans.length]}>
                  <figure className="group relative h-full w-full overflow-hidden rounded-2xl bg-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                    <figcaption className="absolute bottom-4 left-4 rounded-full bg-shell/85 px-3 py-1 text-xs tracking-tight text-ink backdrop-blur">
                      {item.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <p className="mt-6 text-xs text-steel">
              Lifestyle, macro, and hands-in-use photography to follow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <section className="border-t border-line py-28 sm:py-40">
        <div className="container-x">
          {testimonials.items.map((t) => (
            <Reveal key={t.who}>
              <blockquote className="mx-auto max-w-4xl text-center">
                <p className="font-display text-4xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                  “{t.quote}”
                </p>
                <footer className="mt-8 text-sm uppercase tracking-widelabel text-steel">
                  {t.who}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ───────────────────────── About ───────────────────────── */}
      <section id="about" className="bg-ink py-28 text-shell sm:py-40">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <p className="kicker !text-silver">{about.kicker}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-9">
            <p className="text-2xl font-light leading-snug tracking-tight text-shell/90 sm:text-3xl lg:text-[2.2rem]">
              {about.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Become a Partner ───────────────────────── */}
      <section id="partner" className="py-28 sm:py-44">
        <div className="container-x text-center">
          <Reveal>
            <p className="kicker">{partner.kicker}</p>
            <h2 className="mx-auto mt-8 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tightest sm:text-7xl lg:text-8xl">
              {partner.headline}
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              {partner.body}
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              <a href={partner.cta.href} className="btn-solid !px-10 !py-4 text-base">
                {partner.cta.label}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Footer ───────────────────────── */}
      <footer className="border-t border-line py-14">
        <div className="container-x flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tightest">FLOIL</p>
            <p className="mt-2 text-xs text-steel">{brand.tagline}</p>
          </div>
          <div className="flex flex-col gap-6 sm:items-end">
            <div className="flex gap-6 text-sm">
              <a href={brand.instagram} className="text-steel transition-colors hover:text-ink">
                Instagram
              </a>
              <a href={brand.linkedin} className="text-steel transition-colors hover:text-ink">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] uppercase tracking-widelabel text-silver">
              <span>Patent Pending</span>
              <span>FLOIL™</span>
              <span>© {new Date().getFullYear()} FLOIL</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
