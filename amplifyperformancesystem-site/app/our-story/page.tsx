import React from "react";
import { SiteNav } from "./SiteNav";

export function OurStoryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />

      {/* HERO: It Started with a Dad, Two Daughters, and a Vision */}
      <section className="relative overflow-hidden bg-neutral-950 border-b border-neutral-800/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,80,0,0.2)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 relative z-10 text-center flex flex-col gap-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">Our Story</div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.05] text-white">
            It started with a dad, two daughters, and a vision.
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every system starts with a problem. Ours started with silence. I watched too many kids go quiet when it mattered — not because they didn’t care, but because nobody had taught them how to lead, communicate, and believe in themselves.
          </p>
        </div>
      </section>

      {/* WHAT I SAW IN YOUTH SPORTS */}
      <section className="bg-neutral-950 border-b border-neutral-800/60 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">What I saw in youth sports</h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Skills and drills were everywhere. But character, confidence, and communication — the parts that actually decide who leads — were left to chance. Kids learned how to hit, lift, and run, but not how to think, talk, or take ownership. Coaches were burning out, parents were confused, and athletes were losing joy in the game they once loved.
          </p>
        </div>
      </section>

      {/* THE MOMENT IT CLICKED */}
      <section className="bg-neutral-950 border-b border-neutral-800/60 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">The moment it clicked</h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Watching my daughters, Kaela and Eliana, go through their own journeys in sports changed me. I realized talent wasn’t the missing piece — development was. Confidence, voice, leadership, and IQ could all be trained if someone was intentional enough to do it.
          </p>
          <blockquote className="text-neutral-400 italic border-l-4 border-red-500 pl-4 text-[15px] leading-relaxed">
            “It wasn’t about more reps — it was about the reps that teach them who they are.”
          </blockquote>
        </div>
      </section>

      {/* THE BUILD */}
      <section className="bg-neutral-950 border-b border-neutral-800/60 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">The build</h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            I started with Redline Athletics — a national leader in youth performance — to build the foundation of physical development: speed, strength, and movement safety. But something was missing: the system that connected performance to sport IQ, mindset, and leadership. That became the Amplify Performance System.
          </p>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            APS integrates <span className="text-white font-semibold">Performance</span> (physical), <span className="text-white font-semibold">The Sport</span> (IQ and decision-making), <span className="text-white font-semibold">Mindset</span> (confidence and composure), and <span className="text-white font-semibold">Legacy</span> (leadership and community impact). It’s not a facility — it’s a framework that helps kids become complete athletes and even better people.
          </p>
          <p className="text-neutral-400 text-[13px] italic leading-relaxed">
            We don’t replace clubs or coaches — we elevate them. APS installs communication standards, leadership systems, and cultural DNA so teams thrive on and off the court.
          </p>
        </div>
      </section>

      {/* THE VISION */}
      <section className="bg-neutral-950 border-b border-neutral-800/60 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">The vision</h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            The Amplify Performance System is just the start. The long-term mission is to build the <span className="text-white font-semibold">Amplify Academy</span> — a full pipeline of education, leadership, and opportunity for athletes, coaches, and communities.
          </p>
          <ul className="list-disc list-inside text-[13px] text-neutral-400 leading-relaxed">
            <li><span className="text-white font-semibold">Amplify University</span> — training and certifying coaches in communication, IQ, and culture leadership.</li>
            <li><span className="text-white font-semibold">Amplify 360 Council</span> — athlete leadership programs, mentorship, and life skills beyond sport.</li>
            <li><span className="text-white font-semibold">Amplify Access Fund</span> — scholarships and funding so every kid, regardless of background, can train, lead, and belong.</li>
          </ul>
          <p className="text-neutral-400 text-[13px] italic leading-relaxed pt-2">
            This isn’t just about creating athletes — it’s about creating impact. The court is just the classroom.
          </p>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-4">
          <blockquote className="text-neutral-200 italic text-lg md:text-xl font-medium leading-relaxed">
            “If all we do is win games, we failed. I want to build people that other people can count on.”
          </blockquote>
          <div className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
            — Matt Schmid, Founder
          </div>
          <p className="text-neutral-400 text-[12px] pt-4">
            Amplify Potential. Amplify Life.
          </p>
        </div>
      </section>
    </main>
  );
}
