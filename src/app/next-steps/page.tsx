"use client";

import { useState } from "react";
import Link from "next/link";

const timeline = [
  {
    step: "1",
    title: "Discovery Call",
    description:
      "30-minute call with your account team to understand your current TA landscape, pain points, and strategic priorities.",
    status: "next",
  },
  {
    step: "2",
    title: "Personalised Demo",
    description:
      "A tailored walkthrough of Beamery focused on the use cases that matter most to your team — sourcing, internal mobility, or workforce planning.",
    status: "upcoming",
  },
  {
    step: "3",
    title: "Business Case & ROI Model",
    description:
      "We'll build a custom ROI model based on your hiring volumes, attrition rates, and TA team size so you can present a clear business case internally.",
    status: "upcoming",
  },
  {
    step: "4",
    title: "Technical Review",
    description:
      "Deep dive into integrations, data migration, SSO, and security with your IT/engineering stakeholders.",
    status: "upcoming",
  },
  {
    step: "5",
    title: "Pilot Proposal",
    description:
      "A scoped pilot plan with success criteria, timeline, and a dedicated customer success manager.",
    status: "upcoming",
  },
];

const resources = [
  {
    title: "Beamery Product Overview",
    type: "PDF",
    description: "A two-page executive summary of the Beamery platform.",
  },
  {
    title: "Enterprise ROI Calculator",
    type: "Spreadsheet",
    description:
      "Customisable model showing projected savings and efficiency gains.",
  },
  {
    title: "Customer Case Studies",
    type: "PDF",
    description:
      "How VMware, Autodesk, and others transformed their talent strategy.",
  },
  {
    title: "Security & Compliance",
    type: "PDF",
    description:
      "SOC 2 Type II, GDPR, and enterprise security documentation.",
  },
];

export default function NextSteps() {
  const [submitted, setSubmitted] = useState(false);

  function handleBooking(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-beamery-blue/15 via-transparent to-beamery-purple/10" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-beamery-blue/10 rounded-full blur-[128px] -translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Next Steps
          </h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Here&apos;s what the journey looks like from here. We&apos;ve laid out a
            clear path to getting Beamery up and running for your team.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">Your evaluation roadmap</h2>
          <div className="space-y-4">
            {timeline.map((item) => (
              <div
                key={item.step}
                className={`flex gap-6 p-6 rounded-2xl border transition-all ${
                  item.status === "next"
                    ? "bg-beamery-purple/10 border-beamery-purple/30"
                    : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    item.status === "next"
                      ? "bg-gradient-to-br from-beamery-purple to-beamery-accent text-white"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.status === "next" && (
                      <span className="px-2 py-0.5 rounded-full bg-beamery-accent/20 text-beamery-accent text-xs font-medium">
                        Up next
                      </span>
                    )}
                  </div>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Meeting */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Book a discovery call</h2>
              <p className="text-white/50 mb-8">
                Pick a time that works for you and we&apos;ll set up a 30-minute
                call with your dedicated account team.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    Request received
                  </h3>
                  <p className="text-white/50">
                    We&apos;ll be in touch within 24 hours to confirm your meeting
                    slot.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-white/40 mb-1.5">
                        First name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-beamery-purple/50 focus:ring-1 focus:ring-beamery-purple/50 transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/40 mb-1.5">
                        Last name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-beamery-purple/50 focus:ring-1 focus:ring-beamery-purple/50 transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/40 mb-1.5">
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-beamery-purple/50 focus:ring-1 focus:ring-beamery-purple/50 transition-all"
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/40 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-beamery-purple/50 focus:ring-1 focus:ring-beamery-purple/50 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/40 mb-1.5">
                      What are you most interested in?
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-beamery-purple/50 focus:ring-1 focus:ring-beamery-purple/50 transition-all"
                    >
                      <option value="" className="bg-beamery-dark">Select...</option>
                      <option value="sourcing" className="bg-beamery-dark">Proactive sourcing & CRM</option>
                      <option value="mobility" className="bg-beamery-dark">Internal mobility</option>
                      <option value="planning" className="bg-beamery-dark">Workforce planning</option>
                      <option value="ai" className="bg-beamery-dark">AI-powered matching</option>
                      <option value="full" className="bg-beamery-dark">Full platform overview</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-beamery-purple to-beamery-accent text-white font-medium shadow-lg shadow-beamery-purple/25 hover:shadow-beamery-purple/40 transition-all hover:-translate-y-0.5"
                  >
                    Request a Meeting
                  </button>
                </form>
              )}
            </div>

            {/* Your Account Team */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Your account team</h2>
              <p className="text-white/50 mb-8">
                You&apos;ll be working with a dedicated team throughout the
                evaluation.
              </p>
              <div className="space-y-4">
                {[
                  {
                    name: "Jamie Lyons",
                    role: "Account Executive",
                    description:
                      "Your primary point of contact. Jamie will guide you through the evaluation and ensure Beamery maps to your priorities.",
                  },
                  {
                    name: "Solutions Consultant",
                    role: "Pre-Sales Engineering",
                    description:
                      "Will lead the technical demo and answer questions about integrations, data, and implementation.",
                  },
                  {
                    name: "Customer Success",
                    role: "CSM",
                    description:
                      "Assigned post-pilot to ensure a smooth rollout, training, and ongoing value realisation.",
                  },
                ].map((person) => (
                  <div
                    key={person.name}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-beamery-purple/30 to-beamery-blue/30 flex items-center justify-center text-white/60 font-bold text-sm">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium">{person.name}</div>
                      <div className="text-xs text-beamery-accent mb-1">
                        {person.role}
                      </div>
                      <p className="text-sm text-white/40">
                        {person.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2">Resources</h2>
          <p className="text-white/50 mb-8">
            Everything you need to evaluate Beamery and build your internal
            business case.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-beamery-purple/20 transition-all cursor-pointer"
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{resource.title}</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-white/40 uppercase">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm text-white/40">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-white/40 mb-4">
            Want to revisit the product details?
          </p>
          <Link
            href="/"
            className="inline-flex px-6 py-3 rounded-full border border-white/15 text-white/80 font-medium hover:bg-white/5 transition-all"
          >
            Back to Product Overview
          </Link>
        </div>
      </section>
    </main>
  );
}
