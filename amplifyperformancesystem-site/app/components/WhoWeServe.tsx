import React from "react";

export function WhoWeServe() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1 flex flex-col gap-4 max-w-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            Who we build
          </h2>
          <p className="text-neutral-300 text-sm leading-relaxed">
            APS was created for the 10-18 year old athlete with big goals and
            real fire. But it also supports the coach who wants standards, and
            the parent who wants character.
          </p>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6 text-neutral-200 text-sm">
          <ValueCard
            tag="Athletes"
            title="Stronger. Smarter. More confident."
            bullets={[
              "Explosive speed, power, agility",
              "Sport IQ and situational reads",
              "Vocal leadership and communication",
              "Mindset, resilience, self-belief"
            ]}
          />

          <ValueCard
            tag="Coaches & Clubs"
            title="Culture that lasts longer than a season."
            bullets={[
              "Plug-in performance training without hiring new staff",
              "Structured practice plans & sport IQ curriculum",
              "Amplify 360 Coach DNA & standards of communication",
              "Leadership pathway for captains & future coaches"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  tag,
  title,
  bullets
}: {
  tag: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/40 p-6 flex flex-col gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
        {tag}
      </div>
      <div className="text-base font-bold text-white leading-tight">
        {title}
      </div>
      <ul className="text-neutral-400 text-[13px] leading-relaxed list-disc list-inside">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
