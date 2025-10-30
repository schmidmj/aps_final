import React from "react";

export function CoachPitch() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-4 max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            For Club Directors • ADs • Head Coaches
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Bring the Amplify Performance System to your program
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            We plug into your world without blowing it up. You keep your
            identity. We give you a full development engine: strength & speed,
            sport IQ curriculum, leadership pathway, communication standards,
            and culture guardrails.
          </p>
          <ul className="text-neutral-400 text-[13px] leading-relaxed list-disc list-inside">
            <li>Year-round performance training built for youth, not pros</li>
            <li>Practice plans that teach IQ, not just reps</li>
            <li>Team communication standards (no more silent drills)</li>
            <li>
              Leadership / mentorship ladder for captains and future coaches
            </li>
            <li>
              Credibility with families: we’re building people, not just chasing
              medals
            </li>
          </ul>
          <p className="text-[12px] text-neutral-500 leading-relaxed pt-4">
            Translation: you get better athletes, tighter culture, and happier
            parents — without hiring 5 new staff members.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-red-600/40 via-orange-500/30 to-yellow-400/10 blur-3xl opacity-40" />
          <div className="relative rounded-3xl border border-neutral-700/60 bg-neutral-900/40 shadow-[0_40px_120px_rgba(255,80,0,0.4)] p-6 flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
              Pilot Partnerships Now Forming
            </div>
            <div className="text-lg font-extrabold text-white leading-tight">
              Club • School • Flagship Facility
            </div>
            <p className="text-[13px] text-neutral-400 leading-relaxed">
              We are actively selecting first-wave partners in Tampa Bay /
              St. Pete to run APS inside their environment with our direct
              support.
            </p>
            <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/50 p-4 flex flex-col gap-2 text-[11px] text-neutral-300 leading-relaxed">
              <div className="font-bold text-white text-sm">
                Who should reach out:
              </div>
              <ul className="list-disc list-inside">
                <li>Varsity head coaches ready to set a standard</li>
                <li>Club directors who want more than skills clinics</li>
                <li>ADs who care about character, not just scoreboards</li>
                <li>
                  Performance coaches who actually love working with youth
                </li>
              </ul>
            </div>
            <a
              href="/contact"
              className="rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-neutral-950 text-center shadow-[0_24px_80px_rgba(255,80,0,0.7)] hover:shadow-[0_32px_100px_rgba(255,80,0,0.9)] transition"
            >
              Start A Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
