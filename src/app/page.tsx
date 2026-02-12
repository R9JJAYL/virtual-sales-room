import Link from "next/link";

const stats = [
  { value: "30%", label: "Reduction in time-to-fill" },
  { value: "50%", label: "More qualified pipeline" },
  { value: "2.5x", label: "Increase in internal mobility" },
  { value: "40%", label: "Lower cost-per-hire" },
];

const features = [
  {
    title: "Talent CRM",
    description:
      "Build and nurture relationships with talent at scale. Centralise every candidate interaction in one intelligent platform that grows your pipeline before you even open a req.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-1.997m0 0A8.966 8.966 0 0112 15a8.966 8.966 0 00-5.213 1.672M12 9.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Matching",
    description:
      "Surface the best-fit candidates automatically using skills intelligence. Beamery's AI matches talent to roles based on capabilities, potential, and career trajectory — not just keywords.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Workforce Planning",
    description:
      "Align hiring with business strategy. Model future skills gaps, forecast attrition, and build proactive talent plans that keep you ahead of demand.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Internal Mobility",
    description:
      "Retain your best people by connecting them to opportunities within your organisation. Beamery makes internal career paths visible, actionable, and equitable.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 15m0 0L12 10.5m4.5 4.5V1.5" />
      </svg>
    ),
  },
];

const useCases = [
  {
    challenge: "Reactive hiring creates bottlenecks",
    solution: "Proactively build talent pools for critical roles so you're hiring from warm pipeline, not cold sourcing.",
  },
  {
    challenge: "No visibility into workforce skills gaps",
    solution: "Skills intelligence maps your current workforce against future needs, highlighting gaps before they become crises.",
  },
  {
    challenge: "High attrition in key roles",
    solution: "Internal mobility and career pathing gives employees a reason to stay, reducing regrettable attrition by up to 30%.",
  },
  {
    challenge: "Recruiter time wasted on unqualified candidates",
    solution: "AI-powered matching surfaces best-fit candidates first, cutting screening time and improving quality of hire.",
  },
];

export default function ProductOverview() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-beamery-purple/20 via-transparent to-beamery-blue/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-beamery-purple/10 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-beamery-purple/20 border border-beamery-purple/30 text-beamery-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-beamery-accent animate-pulse" />
              Virtual Sales Room
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Transform how you{" "}
              <span className="bg-gradient-to-r from-beamery-purple to-beamery-blue bg-clip-text text-transparent">
                attract, engage
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-beamery-blue to-beamery-accent bg-clip-text text-transparent">
                retain
              </span>{" "}
              talent
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
              Beamery is the Talent Lifecycle Management platform trusted by the
              world&apos;s largest enterprises to build a future-ready workforce. From
              proactive sourcing to internal mobility, we help you hire better,
              faster, and fairer.
            </p>
            <div className="flex gap-4">
              <Link
                href="/next-steps"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-beamery-purple to-beamery-accent text-white font-medium shadow-lg shadow-beamery-purple/25 hover:shadow-beamery-purple/40 transition-all hover:-translate-y-0.5"
              >
                View Next Steps
              </Link>
              <a
                href="#roi"
                className="px-6 py-3 rounded-full border border-white/15 text-white/80 font-medium hover:bg-white/5 transition-all"
              >
                See the ROI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section id="roi" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proven ROI at scale</h2>
            <p className="text-white/50 max-w-xl mx-auto">
              These numbers are based on outcomes from Beamery customers across
              enterprise organisations with 10,000+ employees.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/30 transition-all hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-beamery-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-4xl font-bold bg-gradient-to-r from-beamery-purple to-beamery-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              One platform, every stage of the talent lifecycle
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Beamery connects sourcing, hiring, and workforce planning into a
              single intelligent system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/30 transition-all hover:bg-white/[0.05]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-beamery-purple/20 to-beamery-blue/20 border border-beamery-purple/20 flex items-center justify-center text-beamery-accent mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Built for enterprise TA challenges
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Every feature is designed to solve the real problems your talent
              acquisition team faces today.
            </p>
          </div>
          <div className="space-y-4">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-beamery-purple/20 transition-all"
              >
                <div>
                  <div className="text-xs font-medium text-red-400/80 uppercase tracking-wider mb-2">
                    Challenge
                  </div>
                  <p className="text-white/80 font-medium">{uc.challenge}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-green-400/80 uppercase tracking-wider mb-2">
                    How Beamery solves it
                  </div>
                  <p className="text-white/60">{uc.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-white/30 mb-8">
            Trusted by world-class talent teams
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-white/20 text-2xl font-bold">
            {["VMware", "Autodesk", "Uber", "J&J", "KPMG", "Dropbox"].map(
              (name) => (
                <span
                  key={name}
                  className="hover:text-white/40 transition-colors"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-white/50 mb-8">
            Let&apos;s walk through how Beamery maps to your specific talent
            challenges. Book a personalised demo with your account team.
          </p>
          <Link
            href="/next-steps"
            className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-beamery-purple to-beamery-accent text-white font-medium text-lg shadow-lg shadow-beamery-purple/25 hover:shadow-beamery-purple/40 transition-all hover:-translate-y-0.5"
          >
            Book a Meeting
          </Link>
        </div>
      </section>
    </main>
  );
}
