import React from "react";

export function FounderMessage() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col gap-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            From the Founder
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
            Why we built Amplify
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Too many kids get labeled early. "Starter / bench." "Confident /
            quiet." "Raw talent / role player." We don't accept any of that. The
            Amplify Performance System was built to prove that you can develop
            confidence, leadership, game IQ, and physical ability in the same
            athlete — on purpose.
          </p>
          <p className="text-neutral-400 text-[13px] leading-relaxed">
            We believe in athletes who talk, who think, who compete, who care
            about younger teammates, and who know how to handle big moments
            without breaking. That doesn't just happen. You build it.
          </p>

          <p className="text-neutral-400 text-[13px] leading-relaxed italic pt-2">
            I built this because I wanted my own daughters — and every kid like
            them — to be developed, protected, and believed in the right way.
          </p>

          <div className="text-[11px] text-neutral-500 leading-relaxed italic">
            "If all we do is win games, we failed. I want to build people that
            other people can count on — in sports, in school, and 10 years from
            now when it actually matters."
          </div>
          <div className="text-[11px] font-semibold text-neutral-400 pt-2">
            — Matt Schmid, Amplify Performance System
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/40 shadow-[0_24px_80px_rgba(255,80,0,0.3)] p-6 flex flex-col gap-5 text-sm text-neutral-200">
          <div className="flex flex-col gap-2">
            <div className="text-[11px] font-bold uppercase tracking-wide text-red-400">
              What we stand on
            </div>
            <ul className="list-disc list-inside text-[13px] text-neutral-400 leading-relaxed">
              <li>
                Every athlete learns to communicate out loud. Silent gyms build
                fragile teams.
              </li>
              <li>
                We coach Sport IQ so players stop guessing and start
                anticipating.
              </li>
              <li>
                Strength and speed training is scaled for youth, not copied
                from adult pros.
              </li>
              <li>Leadership and character are trained, not hoped for.</li>
              <li>
                We build programs, not transactions. If you're here, you're
                ours.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/50 p-4 text-[12px] text-neutral-300 leading-relaxed">
            Parents: if you're tired of watching your kid disappear when it
            matters — this entire system was built for you.
          </div>
        </div>
      </div>
    </section>
  );
}
