export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* ============ HERO ============ */}
      <section className="relative border-b border-[var(--color-border)]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-mono text-[var(--color-text-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            NoZak Labs · Cairo
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6">
            Operational systems,
            <br />
            <span className="text-[var(--color-accent)]">engineered.</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-[var(--color-text-muted)] leading-relaxed mb-10">
            Cairo-based engineering for small operations. Replaced a
            six-person, two-month estimation process at a major Egyptian
            publishing group in three days. That&apos;s the bar.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-black transition hover:bg-[var(--color-accent-dim)]"
            >
              Start a project
              <span aria-hidden>{"\u2192"}</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border-strong)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-bg-elevated)]"
            >
              See the work
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHAT I DO ============ */}
      <section id="capabilities" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
              01 / Capabilities
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium tracking-tight">
              Four tracks, done end-to-end.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {[
              {
                num: "01",
                title: "Automation Engineering",
                body: "Replace manual ops work with production-grade tools. Spreadsheet sprawl, multi-person estimation processes, repetitive workflows engineered into a single system anyone on the team can run.",
              },
              {
                num: "02",
                title: "AI Integration",
                body: "Production AI systems on top of the work you already have. LLM-backed agents, RAG over internal docs, scoring and triage pipelines. Built with hard spend caps and measurable output.",
              },
              {
                num: "03",
                title: "Systems Architecture",
                body: "Technical advisory for early-stage products. Stack selection, data flow design, integration architecture. Bring me in before you commit to the wrong foundation.",
              },
              {
                num: "04",
                title: "Pega Case Lifecycle",
                body: "Certified Pega Business Architect with production deployments in banking and government. Connect REST/SOAP integrations, SLA routing, data pages, decision tables, flow rules, and activities. Available for enterprise case management builds or ongoing production support.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-[var(--color-bg)] p-8 transition hover:bg-[var(--color-bg-elevated)]"
              >
                <p className="font-mono text-xs text-[var(--color-accent)] mb-4">
                  {item.num}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section id="work" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
              02 / Selected work
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium tracking-tight">
              What shipped looks like.
            </h2>
          </div>

          <div className="border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Domain
                </p>
                <p className="text-sm">Operations · Publishing</p>
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Timeline
                </p>
                <p className="text-sm">3 days to first version</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Stack
                </p>
                <p className="text-sm font-mono">
                  Python · Pandas · Streamlit
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-4">
                Cost Estimation Dashboard
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Replaced a six-person, two-month manual estimation process at a
                major Egyptian publishing group with a single tool driven by
                anyone on the team. Solo build, three days to first working
                version, plus two days of team training.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    People replaced
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    {"6 \u2192 1"}
                  </p>
                </div>
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    Cycle time
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    {"2 mo \u2192 minutes"}
                  </p>
                </div>
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    Build time
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    3 days
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs text-[var(--color-text-dim)] font-mono">
                Client name withheld under NDA. Additional case studies on request.
              </p>
            </div>
          </div>

          {/* ---- Case 02: AI Agent Radar ---- */}
          <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[var(--color-border)]">
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Domain
                </p>
                <p className="text-sm">Developer Tooling · AI</p>
              </div>
              <div className="p-6 border-r border-[var(--color-border)]">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Cadence
                </p>
                <p className="text-sm">Ongoing · 2× / week</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-[var(--color-text-dim)] mb-2">
                  Stack
                </p>
                <p className="text-sm font-mono">
                  Python · Haiku 4.5 · GitHub Actions · Notion
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-medium mb-4">
                AI Agent Radar
              </h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Autonomous intelligence layer that monitors seven tech sources twice
                weekly — Hacker News, Product Hunt, GitHub Trending, TLDR AI,
                Ben&apos;s Bites, Reddit, and the Pega Community. Claude Haiku scores
                each item against active project context and delivers a ranked digest
                to Notion and GitHub. No manual filtering — just signal.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    Sources monitored
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    7
                  </p>
                </div>
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    Items scored / run
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    45+
                  </p>
                </div>
                <div className="bg-[var(--color-bg)] p-5">
                  <p className="font-mono text-xs text-[var(--color-text-dim)] mb-1">
                    API cost
                  </p>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[var(--color-accent)]">
                    ~$1 / mo
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs text-[var(--color-text-dim)] font-mono">
                Open source ·{" "}
                <a
                  href="https://github.com/nozaklabs/ai-radar-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] underline underline-offset-4"
                >
                  github.com/nozaklabs/ai-radar-agent
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-3">
              03 / Contact
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Start a project.
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              Tell me what you&apos;re trying to ship and what&apos;s in the way.
              I reply within 48 hours on weekdays.
            </p>
          </div>

          <form
            action="https://formspree.io/f/mlgvwzow"
            method="POST"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              >
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                <option value="">Select one</option>
                <option value="under-2k">Under $2k</option>
                <option value="2k-10k">$2k\u2013$10k</option>
                <option value="10k-25k">$10k\u2013$25k</option>
                <option value="25k-plus">$25k+</option>
                <option value="exploratory">Not sure yet \u2014 exploratory</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="scope"
                className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              >
                What kind of work?
              </label>
              <select
                id="scope"
                name="scope"
                required
                className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                <option value="">Select one</option>
                <option value="automation">Automation engineering build</option>
                <option value="ai">AI integration / agent build</option>
                <option value="architecture">Systems architecture / advisory</option>
                <option value="pega">Pega case lifecycle work</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              >
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                <option value="">Select one</option>
                <option value="this-month">This month</option>
                <option value="1-2-months">Next 1\u20132 months</option>
                <option value="this-quarter">This quarter</option>
                <option value="no-timeline">No timeline yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-widest text-[var(--color-text-dim)] mb-2"
              >
                What are you trying to ship, and what&apos;s in the way?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Brief on the system, the bottleneck, and what success looks like."
                className="w-full rounded-md border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-accent)] focus:outline-none resize-none"
              />
            </div>

            {/* Honeypot \u2014 bots fill this, humans never see it. Formspree discards submissions where _gotcha is populated. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-black transition hover:bg-[var(--color-accent-dim)]"
            >
              Send brief
              <span aria-hidden>{"\u2192"}</span>
            </button>
          </form>

          <p className="mt-8 text-xs text-[var(--color-text-dim)] font-mono">
            I reply within 48 hours on weekdays. Sunday\u2013Thursday work week, Cairo time.
          </p>
          <p className="mt-3 text-xs text-[var(--color-text-dim)] font-mono">
            Or email directly:{" "}
            <a
              href="mailto:noha@nozaklabs.com"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] underline underline-offset-4"
            >
              noha@nozaklabs.com
            </a>
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer>
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-[var(--color-text-dim)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            NoZak Labs · Cairo · MMXXVI
          </div>
          <div className="flex gap-6 font-mono text-xs text-[var(--color-text-dim)]">
            <a
              href="https://github.com/nozaklabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text-muted)] transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/noha-zakaria-eid"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text-muted)] transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}