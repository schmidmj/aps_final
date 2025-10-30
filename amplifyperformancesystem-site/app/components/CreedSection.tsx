import React from "react";

export function CreedSection() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            The Amplify Creed
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            When you wear Amplify, this is who you are. The Creed is more than
            words — it’s how we train, how we talk, and how we treat people. It’s
            what separates athletes who just play from athletes who lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <CreedCard
            title="Code of the Amplify Athlete"
            bullets={[
              "I communicate out loud — with purpose, energy, and respect.",
              "I compete with fire but carry humility.",
              "I learn before I lead, and I lead by how I live.",
              "I chase mastery, not attention.",
              "I build others while I build myself."
            ]}
          />

          <CreedCard
            title="Standards We Live By"
            bullets={[
              "Every voice counts. Every rep matters.",
              "Be early, be vocal, be coachable.",
              "Never let effort or attitude be the reason you lose.",
              "Encourage louder than you complain.",
              "Leave people and places better than you found them."
            ]}
          />
        </div>

        <div className="rounded-xl border border-neutral-700/60 bg-neutral-800/50 p-6 text-center">
          <p className="text-sm text-neutral-300 font-medium italic">
            “Amplify Potential. Amplify Life.” isn’t a slogan — it’s a promise.
            We don’t lower standards for kids; we teach them how to rise to
            them.
          </p>
        </div>
      </div>
    </section>
  );
}

function CreedCard({
  title,
  bullets
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/40 p-6 shadow-[0_24px_80px_rgba(255,80,0,0.3)]">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <ul className="list-disc list-inside text-[13px] text-neutral-400 leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
