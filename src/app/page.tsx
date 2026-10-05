import Image from "next/image";
import { ChatDemo } from "@/components/ChatDemo";
import { Reveal } from "@/components/Reveal";
import { RotatingWords } from "@/components/RotatingWords";
import { SpendwiseVisual } from "@/components/SpendwiseVisual";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Logo } from "@/components/Logo";
import {
  brandName,
  faqs,
  included,
  pillars,
  process,
  projects,
  proofPoints,
  services,
  site,
  techStack,
  type Project,
} from "@/content/site";

const btnPrimary =
  "shine inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:shadow-violet-500/50";
const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10";

function ContactButtons() {
  const { email, calendly, whatsapp, linkedin, github } = site.contact;
  const links = [
    calendly && { label: "Book a free call", href: calendly, external: true },
    whatsapp && { label: "WhatsApp us", href: whatsapp, external: true },
    email && { label: "Email us", href: `mailto:${email}`, external: false },
    linkedin && { label: "LinkedIn", href: linkedin, external: true },
    github && { label: "GitHub", href: github, external: true },
  ].filter(Boolean) as { label: string; href: string; external: boolean }[];

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {links.map((l, i) => (
        <a
          key={l.label}
          href={l.href}
          {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className={i === 0 ? btnPrimary : btnSecondary}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-widest text-violet-300 uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-slate-400">{text}</p>}
    </Reveal>
  );
}

function BrowserFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-slate-800/80 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      </div>
      <Image src={src} alt={alt} width={1280} height={800} className="h-auto w-full" />
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "spendwise") return <SpendwiseVisual />;
  const [main, second] = project.images ?? [];
  return (
    <div className="relative pb-10 sm:pr-10">
      {main && <BrowserFrame src={main.src} alt={main.alt} className="transition duration-500 group-hover:-translate-y-1" />}
      {second && (
        <BrowserFrame
          src={second.src}
          alt={second.alt}
          className="absolute right-0 bottom-0 hidden w-3/5 transition duration-500 group-hover:-translate-y-2 sm:block"
        />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[1100px]">
        <div className="grid-bg absolute inset-0" />
        <div className="blob top-[-10%] left-[10%] h-[460px] w-[460px] bg-violet-600" />
        <div className="blob top-[10%] right-[5%] h-[380px] w-[380px] bg-cyan-500" style={{ animationDelay: "-6s" }} />
        <div className="blob top-[45%] left-[35%] h-[320px] w-[320px] bg-indigo-600" style={{ animationDelay: "-12s" }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05070f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" aria-label={`${brandName} home`}>
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            {["Services", "Work", "Why us", "Process", "FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <a href="#contact" className="shine rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-20 sm:px-6 md:pt-24 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
                {site.tagline} · Taking new projects
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-7xl">
                {site.headline.before} <span className="gradient-text">{site.headline.highlight}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
                We build <RotatingWords words={site.headlineWords} />
              </p>
              <p className="mt-3 max-w-xl text-lg text-slate-400">{site.subheadline}</p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href="#contact" className={btnPrimary}>
                  Get a free quote →
                </a>
                <a href="#work" className={btnSecondary}>
                  See live projects
                </a>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {["Fixed quotes", "Weekly updates", "Direct with the engineer"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-violet-300">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={300} className="flex justify-center lg:justify-end">
            <ChatDemo />
          </Reveal>
        </section>

        {/* Proof points */}
        <section aria-label="At a glance" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {proofPoints.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-center backdrop-blur">
                  <dt className="sr-only">{p.label}</dt>
                  <dd className="gradient-text text-3xl font-bold sm:text-4xl">{p.value}</dd>
                  <dd className="mt-1 text-xs text-slate-400 sm:text-sm">{p.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Tech marquee */}
        <section aria-label="Technologies" className="marquee overflow-hidden border-y border-white/5 py-6">
          <div className="marquee-track flex w-max gap-10">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="text-lg font-semibold whitespace-nowrap text-slate-500" aria-hidden={i >= techStack.length}>
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Services"
              title="Built to save time and win customers"
              text="AI that works for your business around the clock, and the websites and apps it lives in."
            />
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-2xl transition duration-300 group-hover:scale-110 group-hover:bg-violet-500/20">
                      {s.icon}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
                    <p className="mt-5 text-sm font-medium text-violet-300">→ {s.outcome}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Work"
              title="Proof, not promises"
              text="Live products you can open and test right now. No mockups, no stock screenshots."
            />
            <div className="mt-16 space-y-10">
              {projects.map((p, i) => (
                <Reveal key={p.name}>
                  <article className="group grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 sm:p-10 lg:grid-cols-2">
                    <div className={i % 2 ? "lg:order-2" : ""}>
                      <p className="text-sm font-medium text-violet-300">{p.tagline}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{p.name}</h3>
                      <p className="mt-4 text-slate-400">
                        <span className="font-semibold text-slate-200">The problem: </span>
                        {p.problem}
                      </p>
                      <p className="mt-3 text-slate-400">
                        <span className="font-semibold text-slate-200">What we built: </span>
                        {p.solution}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-sm text-slate-300">
                            <span className="mt-0.5 text-emerald-400" aria-hidden>
                              ✓
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {p.stack.map((t) => (
                          <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap items-center gap-4">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                            {l.label} ↗
                          </a>
                        ))}
                        {p.note && <span className="text-xs text-slate-500">{p.note}</span>}
                      </div>
                    </div>
                    <div className={i % 2 ? "lg:order-1" : ""}>
                      <ProjectVisual project={p} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why-us" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow={`Why ${brandName}`}
              title="Agency quality. Freelancer focus."
              text={site.intro}
            />
            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <SpotlightCard className="h-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
                    <div className="text-3xl" aria-hidden>
                      {p.icon}
                    </div>
                    <h3 className="mt-4 font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Process" title="From first call to launch, without the chaos" />
            <ol className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div
                aria-hidden
                className="absolute top-7 right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 lg:block"
              />
              {process.map((s, i) => (
                <Reveal key={s.step} delay={i * 120}>
                  <li className="relative text-center">
                    <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-violet-400/30 bg-[#0b0f1d] text-lg font-bold text-violet-300 shadow-lg shadow-violet-900/30">
                      {s.step}
                    </span>
                    <h3 className="mt-5 font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{s.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Reveal>
              <div className="grid gap-10 rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-indigo-600/10 to-cyan-500/10 p-8 sm:p-12 lg:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">One fixed quote. Zero surprises.</h2>
                  <p className="mt-4 text-slate-300">
                    Every business is different, so we don&apos;t sell one-size-fits-all packages. Tell us what you need, and
                    after a short free call you get a clear scope, timeline and fixed price, in rupees or dollars.
                  </p>
                  <a href="#contact" className={`${btnPrimary} mt-8`}>
                    Get your free quote →
                  </a>
                </div>
                <ul className="grid gap-3 self-center sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-white/5 p-4 text-sm text-slate-200">
                      <span className="text-violet-300" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading eyebrow="FAQ" title="Questions clients ask before we start" />
            <div className="mt-14 space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition open:border-violet-400/30 open:bg-white/[0.05]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                      {f.q}
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/5 text-slate-300 transition duration-300 group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 px-4 py-28 sm:px-6">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/30 via-indigo-700/20 to-cyan-500/20 px-6 py-16 text-center sm:px-12">
              <div aria-hidden className="blob -top-20 -left-20 h-72 w-72 bg-violet-500" />
              <div aria-hidden className="blob -right-20 -bottom-20 h-72 w-72 bg-cyan-500" style={{ animationDelay: "-9s" }} />
              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Let&apos;s make your business run <span className="gradient-text">smarter.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
                  Tell us about your business and what you want to build or automate. {site.responseTime}
                </p>
                <div className="mt-10">
                  <ContactButtons />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              {site.tagline}. AI chatbots, automation, websites and apps for businesses in India and worldwide.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {["Services", "Work", "Why us", "Process", "FAQ"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {site.contact.email && (
                <li>
                  <a href={`mailto:${site.contact.email}`} className="break-all transition hover:text-white">
                    {site.contact.email}
                  </a>
                </li>
              )}
              {site.contact.whatsapp && (
                <li>
                  <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    WhatsApp
                  </a>
                </li>
              )}
              {site.contact.linkedin && (
                <li>
                  <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    LinkedIn
                  </a>
                </li>
              )}
              {site.contact.github && (
                <li>
                  <a href={site.contact.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    GitHub
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:px-6">
            <p>
              © {new Date().getFullYear()} {brandName}
            </p>
            <p>Made with care in India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
