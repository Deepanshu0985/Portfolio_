import { faqs, included, process, projects, services, site } from "@/content/site";

function ContactButtons({ center = false }: { center?: boolean }) {
  const { email, calendly, linkedin, github } = site.contact;
  const primary =
    "rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400";
  const secondary =
    "rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5";
  return (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      {calendly && (
        <a href={calendly} target="_blank" rel="noopener noreferrer" className={primary}>
          Book a free call
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className={calendly ? secondary : primary}>
          Email me
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className={secondary}>
          LinkedIn
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className={secondary}>
          GitHub
        </a>
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-wide text-violet-400 uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-slate-400">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl"
      />

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#070a13]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-semibold text-white">
            {site.name}
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Start a project
          </a>
        </div>
      </header>

      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 md:pt-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Taking on new projects
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {site.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            {site.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400"
            >
              See live projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Get a fixed quote
            </a>
          </div>
          <dl className="mt-16 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              ["Fixed prices", "Clear scope and quote before any work starts"],
              ["Weekly updates", "You always know where your project stands"],
              ["You own the code", "Full source code and accounts in your name"],
            ].map(([title, text]) => (
              <div key={title} className="border-l border-white/10 pl-4">
                <dt className="font-semibold text-white">{title}</dt>
                <dd className="mt-1 text-sm text-slate-400">{text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Services"
              title="What I build"
              text="AI is the fastest way to save a small business hours every week. I also build the websites and apps it lives in."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40 hover:bg-white/[0.05]"
                >
                  <div className="text-3xl" aria-hidden>
                    {s.icon}
                  </div>
                  <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.description}</p>
                  <p className="mt-4 text-sm text-slate-500">
                    From <span className="font-semibold text-violet-300">{s.from}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Work"
              title="Live projects you can try"
              text="Real, working software, not mockups. Click through and test them yourself."
            />
            <div className="mt-12 space-y-6">
              {projects.map((p) => (
                <article
                  key={p.name}
                  className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 sm:p-10 lg:grid-cols-5"
                >
                  <div className="lg:col-span-2">
                    <p className="text-sm font-medium text-violet-300">{p.tagline}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{p.name}</h3>
                    <dl className="mt-6 space-y-4 text-sm">
                      <div>
                        <dt className="font-semibold text-slate-200">The problem</dt>
                        <dd className="mt-1 text-slate-400">{p.problem}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-200">What I built</dt>
                        <dd className="mt-1 text-slate-400">{p.solution}</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                        >
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                    {p.note && <p className="mt-3 text-xs text-slate-500">{p.note}</p>}
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-sm font-semibold text-slate-200">Highlights</p>
                    <ul className="mt-3 space-y-2.5">
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
                        <li
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Process" title="How we'll work together" />
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((s) => (
                <li key={s.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-300">
                    {s.step}
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Pricing"
                title="Fixed prices, no surprises"
                text="Every project gets a written scope and fixed quote after a short call. These are typical starting prices."
              />
              <ul className="mt-8 divide-y divide-white/5 rounded-2xl border border-white/10 bg-white/[0.03]">
                {services.map((s) => (
                  <li key={s.title} className="flex items-center justify-between px-5 py-3.5 text-sm">
                    <span className="text-slate-300">{s.title}</span>
                    <span className="font-semibold text-white">from {s.from}</span>
                  </li>
                ))}
                <li className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <span className="text-slate-300">Monthly maintenance & AI tuning</span>
                  <span className="font-semibold text-white">from $149/mo</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-violet-400/20 bg-violet-500/[0.07] p-8 sm:p-10">
              <h3 className="text-xl font-bold text-white">Included in every project</h3>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-violet-300" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading eyebrow="FAQ" title="Common questions" />
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
                    {f.q}
                    <span className="text-slate-500 transition group-open:rotate-45" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-white/5 py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Have a project in mind?</h2>
            <p className="mx-auto mt-5 max-w-xl text-slate-400">
              Tell me what you want to build or automate. You&apos;ll get a clear plan and a fixed quote. {site.responseTime}
            </p>
            <div className="mt-10">
              <ContactButtons center />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>{site.role}</p>
        </div>
      </footer>
    </div>
  );
}
