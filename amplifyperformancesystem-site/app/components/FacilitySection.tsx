import React from "react";

export function FacilitySection() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            The Flagship Facility
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            The first Amplify flagship facility is being built to house
            competitive club programs, a Redline-style youth performance center,
            classroom space for sport IQ / film, and a leadership & mentorship
            hub for the next wave of coaches.
          </p>
          <ul className="text-neutral-400 text-[13px] leading-relaxed list-disc list-inside">
            <li>4 regulation courts for club, training, and tournaments</li>
            <li>
              8,000 sq ft performance center: strength, speed, return-to-play
            </li>
            <li>
              Film / classroom space for Sport IQ and leadership sessions
            </li>
            <li>
              Parent / athlete commons designed to feel like belonging, not
              bleachers
            </li>
          </ul>
          <p className="text-[12px] text-neutral-500 leading-relaxed pt-4">
            We’re not just renting space in a gym. We’re building a home base
            for the next generation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-red-600/40 via-orange-500/30 to-yellow-400/10 blur-3xl opacity-40" />
          <div className="relative rounded-3xl border border-neutral-700/60 bg-neutral-900/40 shadow-[0_40px_120px_rgba(255,80,0,0.4)] p-6 flex flex-col gap-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
              Coming Soon
            </div>
            <div className="text-lg font-extrabold text-white leading-tight">
              Tampa Bay / St. Pete
            </div>
            <p className="text-[13px] text-neutral-400 leading-relaxed">
              We are actively forming founding teams, partner clubs, and pilot
              school relationships for launch. This is the ground floor.
            </p>

            <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/50 p-4 flex flex-col gap-2 text-[11px] text-neutral-300 leading-relaxed">
              <div className="font-bold text-white text-sm">
                Looking for:
              </div>
              <ul className="list-disc list-inside">
                <li>Elite club directors & head coaches</li>
                <li>School ADs / Principals who want culture change</li>
                <li>Strength & performance coaches for youth athletes</li>
                <li>Local partners who believe in access-for-all</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
