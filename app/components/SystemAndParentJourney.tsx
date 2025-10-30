import React from "react";

export function SystemAndParentJourney() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* System intro */}
        <div className="max-w-2xl flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            The Amplify Performance System
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Four integrated dimensions. One mission: develop complete athletes
            who dominate their sport and their future.
          </p>
        </div>

        {/* Four dimensions */}
        <div className="grid md:grid-cols-4 gap-6 text-neutral-200 text-sm">
          {[
            {
              label: "Performance",
              headline: "Speed • Strength • Power",
              body:
                "Movement training built for youth bodies, not NFL linemen. Ground-up athleticism: jump mechanics, injury prevention, lateral change of direction, acceleration."
            },
            {
              label: "The Sport",
              headline: "Skill • IQ • Systems",
              body:
                "We teach eyes, reads, and decision-making, so athletes stop guessing and start understanding the game in real time."
            },
            {
              label: "Mindset",
              headline: "Confidence • Voice • Resilience",
              body:
                "We build vocal athletes who communicate, lead, self-correct, and refuse to disappear when the moment gets big."
            },
            {
              label: "Legacy",
              headline: "Character • Community • Impact",
              body:
                "Serving younger athletes. Giving back. Earning trust at home, at school, and on the court or field."
            }
          ].map((dim, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-700/60 bg-neutral-900/40 p-6 flex flex-col gap-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wide text-red-400">
                {dim.label}
              </div>
              <div className="text-base font-bold text-white leading-tight">
                {dim.headline}
              </div>
              <p className="text-[13px] text-neutral-400 leading-relaxed">
                {dim.body}
              </p>
            </div>
          ))}
        </div>

        {/* Parent Journey */}
        <ParentJourney />
      </div>
    </section>
  );
}

export function ParentJourney() {
  return (
    <div className="grid md:grid-cols-2 gap-10 pt-16">
      <div className="flex flex-col gap-4 max-w-lg">
        <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
          For Parents
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
          What your kid will actually get from APS
        </h3>
        <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
          This is the part that matters. Not the logo. Not the tournament
          schedule. Not the Instagram clip. Here's what changes in your
          athlete’s day-to-day life when they’re inside the Amplify Performance
          System:
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-700/60 bg-neutral-900/40 shadow-[0_24px_80px_rgba(255,80,0,0.3)] p-6 flex flex-col gap-5 text-sm text-neutral-200">
        <JourneyBlock
          label="Day 1"
          headline="They’re taught how to warm up and protect their body like it matters."
          body="No more random stretching. They learn movement prep, landing mechanics, and how to take care of knees / shoulders so they can keep playing."
        />
        <div className="border-t border-neutral-700/60 pt-5">
          <JourneyBlock
            label="Week 4"
            headline="They start talking on the court instead of going quiet."
            body="Your kid learns how to call the ball, direct teammates, fix problems in real time, and show presence. Confidence stops being a buzzword and becomes a habit."
          />
        </div>
        <div className="border-t border-neutral-700/60 pt-5">
          <JourneyBlock
            label="Month 3"
            headline="They understand the game, not just the drill."
            body="We train sport IQ: where to be, what to read, why plays work, and how to anticipate instead of react. That’s how average athletes become difference-makers."
          />
        </div>
        <div className="border-t border-neutral-700/60 pt-5">
          <JourneyBlock
            label="Long-term"
            headline="They carry themselves like someone people follow."
            body="We develop voice, composure, accountability, resilience, and pride in serving younger athletes. That’s bigger than sports. That’s life."
          />
        </div>
      </div>
    </div>
  );
}

function JourneyBlock({
  label,
  headline,
  body
}: {
  label: string;
  headline: string;
  body: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-wide text-red-400">
        {label}
      </div>
      <div className="text-white font-semibold leading-tight">{headline}</div>
      <p className="text-[13px] text-neutral-400 leading-relaxed pt-1">
        {body}
      </p>
    </div>
  );
}
