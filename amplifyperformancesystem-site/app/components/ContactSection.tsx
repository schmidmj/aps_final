import React from "react";

export function ContactSection() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-neutral-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-400">
          Launch Partners • Founding Coaches • Pilot Schools
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-2xl">
          Want the Amplify Performance System in your program?
        </h2>

        <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl">
          We're signing first-wave partners now. If you're a club director,
          varsity coach, AD, strength coach, or parent who wants this where you
          are — this is your moment to raise your hand.
        </p>

        <div className="w-full max-w-xl text-left bg-neutral-900/60 border border-neutral-700/60 rounded-2xl p-6 shadow-[0_40px_120px_rgba(255,80,0,0.4)]">
          <ContactForm />
        </div>

        <div className="text-[10px] uppercase tracking-wide text-neutral-500 font-medium flex flex-col gap-1">
          <p>
            Amplify Performance System • "Amplify Potential. Amplify Life."
          </p>
          <p>Built for youth. Built for impact. Built to last.</p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <form className="grid gap-4 text-sm text-neutral-200">
      <div className="grid md:grid-cols-2 gap-4">
        <LabeledInput label="Name" placeholder="Your name" />
        <LabeledInput
          label="Email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] uppercase tracking-wide text-neutral-400 font-semibold">
          I'm reaching out as a...
        </label>
        <select className="w-full rounded-xl bg-neutral-800/60 border border-neutral-600/60 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-red-500/60">
          <option>Parent</option>
          <option>Club Director / Coach</option>
          <option>School AD / School Coach</option>
          <option>Strength & Performance Coach</option>
          <option>Potential Partner / Investor</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[11px] uppercase tracking-wide text-neutral-400 font-semibold">
          How can we work together?
        </label>
        <textarea
          className="w-full min-h-[90px] rounded-xl bg-neutral-800/60 border border-neutral-600/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-red-500/60"
          placeholder="Tell us about your program, team, or city."
        />
      </div>

      <button className="rounded-2xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-neutral-950 shadow-[0_24px_80px_rgba(255,80,0,0.7)] hover:shadow-[0_32px_100px_rgba(255,80,0,0.9)] transition text-center">
        Start the Conversation
      </button>
    </form>
  );
}

function LabeledInput({
  label,
  placeholder,
  type = "text"
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-wide text-neutral-400 font-semibold">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-xl bg-neutral-800/60 border border-neutral-600/60 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-red-500/60"
        placeholder={placeholder}
      />
    </div>
  );
}
