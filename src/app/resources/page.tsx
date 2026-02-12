const caseStudies = [
  {
    company: "Salesforce",
    headline: "Salesforce embraces skills-based transformation with Beamery's AI platform",
    result: "3x AI feature adoption in 6 months",
    url: "https://beamery.com/resources/case-studies/salesforce-success-story",
  },
  {
    company: "VMware",
    headline: "How VMware innovated for stronger DE&I results — and saved $700k",
    result: "$700k saved through diverse talent sourcing",
    url: "https://beamery.com/resources/case-studies/vmware-case-study",
  },
  {
    company: "Verizon",
    headline: "Why Verizon chose Beamery to transform their talent pipeline",
    result: "Improved sourcing efficiency and candidate experience",
    url: "https://beamery.com/resources/employer-branding/case-study-why-verizon-chose-beamery",
  },
  {
    company: "AtkinsRéalis",
    headline: "How AtkinsRéalis uses a skills-based approach to secure talent",
    result: "25% faster time to performance milestones",
    url: "https://beamery.com/resources/recruitment-marketing-employer-branding/case-study-atkins-realis",
  },
  {
    company: "DraftKings",
    headline: "How DraftKings supercharged its recruitment campaign strategy",
    result: "Built a global talent community with targeted messaging",
    url: "https://beamery.com/resources/case-studies/creating-a-recruitment-campaign-strategy-that-delivers-powerful-results-at-draftkings",
  },
];

const whitepapers = [
  {
    title: "AI Buyer's Guide for HR",
    description: "A checklist for evaluating AI vendors in talent acquisition and workforce planning.",
    url: "https://beamery.com/resources/whitepapers/checklist-ai-buyers-guide-for-hr",
    type: "Guide",
  },
  {
    title: "5 Steps to Implementing Skills-Based Hiring",
    description: "A practical framework for moving from job-based to skills-based talent strategies.",
    url: "https://beamery.com/resources/whitepapers/checklist-for-skills-based-hiring",
    type: "Checklist",
  },
  {
    title: "RIP Workforce Planning: How Skills Intelligence & AI Are Changing the Game",
    description: "Why traditional workforce planning is broken and what's replacing it.",
    url: "https://beamery.com/resources/whitepapers/rip-workforce-planning",
    type: "Report",
  },
  {
    title: "The Talent Engagement Playbook",
    description: "Strategies for building and nurturing talent relationships at scale.",
    url: "https://beamery.com/resources/whitepapers/talent-engagement-playbook",
    type: "Playbook",
  },
];

const prospectFiles = [
  {
    title: "ROI Business Case Template",
    description: "Customisable business case with projected savings based on your hiring volumes, attrition rates, and TA team size.",
    type: "XLSX",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M12 12v-1.5c0 .621-.504 1.125-1.125 1.125M12 12c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
      </svg>
    ),
  },
  {
    title: "Beamery Platform Overview Deck",
    description: "Executive-ready slide deck covering platform capabilities, architecture, and customer outcomes.",
    type: "PDF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance Documentation",
    description: "SOC 2 Type II certification, GDPR compliance details, data processing agreements, and enterprise security architecture.",
    type: "PDF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Integration Architecture Guide",
    description: "Technical documentation covering Workday, SAP SuccessFactors, Oracle, and ATS integrations.",
    type: "PDF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: "Implementation Timeline & Milestones",
    description: "Typical 12-week implementation plan with phased rollout, training schedule, and go-live criteria.",
    type: "PDF",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Mutual Action Plan",
    description: "Shared evaluation tracker with milestones, owners, and target dates for both teams.",
    type: "DOCX",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];

export default function Resources() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-beamery-purple/15 via-transparent to-beamery-blue/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-beamery-accent/8 rounded-full blur-[128px] -translate-y-1/3 translate-x-1/4" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Files & Resources
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Everything you need to evaluate Beamery and build your internal business
            case — case studies, guides, and shared documents.
          </p>
        </div>
      </section>

      {/* Prospect Files */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Shared with you</h2>
            <span className="px-2 py-0.5 rounded-full bg-beamery-purple/20 text-beamery-accent text-xs font-medium">
              {prospectFiles.length} files
            </span>
          </div>
          <p className="text-white/40 mb-8">
            Documents prepared specifically for your evaluation.
          </p>
          <div className="space-y-3">
            {prospectFiles.map((file) => (
              <div
                key={file.title}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/30 hover:bg-white/[0.05] transition-all cursor-pointer"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-beamery-purple/20 to-beamery-blue/20 border border-beamery-purple/15 flex items-center justify-center text-beamery-accent group-hover:scale-110 transition-transform">
                  {file.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium truncate">{file.title}</span>
                    <span className="flex-shrink-0 px-1.5 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/40 uppercase tracking-wide">
                      {file.type}
                    </span>
                  </div>
                  <p className="text-sm text-white/40 truncate">
                    {file.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-beamery-accent group-hover:bg-beamery-purple/15 transition-all">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2">Customer case studies</h2>
          <p className="text-white/40 mb-8">
            See how enterprise organisations are using Beamery to transform their
            talent strategy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <a
                key={cs.company}
                href={cs.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/30 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {cs.company}
                  </span>
                  <svg
                    className="w-4 h-4 text-white/20 group-hover:text-beamery-accent transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
                <p className="text-sm text-white/60 mb-4 flex-1">
                  {cs.headline}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">
                    Key result
                  </div>
                  <div className="text-sm font-medium text-beamery-accent">
                    {cs.result}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers & Guides */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2">Guides & whitepapers</h2>
          <p className="text-white/40 mb-8">
            Deep dives into the trends and strategies shaping talent acquisition.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {whitepapers.map((wp) => (
              <a
                key={wp.title}
                href={wp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/20 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-beamery-purple/15 flex items-center justify-center text-beamery-accent group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{wp.title}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-white/40 uppercase">
                      {wp.type}
                    </span>
                  </div>
                  <p className="text-sm text-white/40">{wp.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
