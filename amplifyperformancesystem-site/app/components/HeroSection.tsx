import React from "react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,80,0,0.18)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left side text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-neutral-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 animate-pulse" />
            Next-Gen Athlete Development
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.05] text-white">
            Build the athlete. Build the mind. Build the human.
          </h1>

          <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl">
            The Amplify Performance System (APS) is a complete development model
            for youth athletes. We combine elite performance training, sport IQ,
            mindset, leadership, and character so athletes don’t just play the
            game — they learn how to own it, lead it, and carry it into life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/athletes"
              className="rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 px-5 py-3 text-sm font-bold uppercase tracking-wide text-neutral-950 shadow-[0_24px_80px_rgba(255,80,0,0.7)] text-center hover:shadow-[0_32px_100px_rgba(255,80,0,0.9)] transition"
            >
              For Athletes & Parents
            </a>
            <a
              href="/coaches"
              className="rounded-2xl border border-neutral-700/80 bg-neutral-900/50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-neutral-100 text-center hover:bg-neutral-800/60 transition"
            >
              For Coaches & Programs
            </a>
          </div>

          <div className="text-[11px] uppercase tracking-wide text-neutral-500 font-medium flex flex-col gap-1 pt-6">
            <p>Performance • Sport IQ • Mindset • Community Impact</p>
            <p>Because winning can’t just mean the scoreboard.</p>
          </div>
        </div>

        {/* Right side stats card */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-red-600/40 via-orange-500/30 to-yellow-400/10 blur-3xl opacity-40" />

          <div className="relative rounded-3xl bg-neutral-900/60 border border-neutral-700/60 shadow-[0_40px_120px_rgba(255,80,0,0.4)] p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4 text-center text-neutral-200 text-xs">
              <StatCard
                title="4-D"
                subtitle="Total Model"
                desc="Performance • The Sport • Mindset • Legacy"
              />
              <StatCard
                title="360°"
                subtitle="Athlete Support"
                desc="Strength, recovery, nutrition, confidence, leadership"
              />
              <StatCard
                title="IQ"
                subtitle="Sport Intelligence"
                desc="Teach reads, systems, strategy, situational awareness"
              />
              <StatCard
                title="Coach"
                subtitle="Culture DNA"
                desc="We mentor coaches to build people, not just teams"
              />
            </div>

            <div className="rounded-2xl bg-neutral-950/60 border border-red-500/40 p-4 flex flex-col gap-2 text-center shadow-[0_24px_80px_rgba(255,80,0,0.5)]">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-red-400">
                Now forming
              </p>
              <p className="text-sm font-bold text-white leading-snug">
                Partner Clubs • School Programs • Flagship Facility
              </p>
              <p className="text-[11px] text-neutral-400 leading-snug">
                Be first in your city.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  subtitle,
  desc
}: {
  title: string;
  subtitle: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl bg-neutral-800/60 border border-neutral-700/60 p-4 flex flex-col gap-2">
      <div className="text-lg font-extrabold text-white leading-none">
        {title}
      </div>
      <div className="font-semibold uppercase tracking-wide leading-tight">
        {subtitle}
      </div>
      <p className="text-[10px] text-neutral-400 leading-snug">{desc}</p>
    </div>
  );
}
