import React from "react";

export function SiteNav() {
  return (
    <header className="w-full border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="flex items-center gap-2 font-bold text-lg leading-none">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 shadow-[0_8px_32px_rgba(255,80,0,0.6)] flex items-center justify-center font-black text-[10px] tracking-tight uppercase">
            APS
          </div>
          <div className="flex flex-col leading-[1.1]">
            <span className="text-neutral-100 text-sm md:text-base font-semibold">
              Amplify Performance System
            </span>
            <span className="text-[10px] text-neutral-400 md:text-[11px] font-medium uppercase tracking-wide">
              Amplify Potential. Amplify Life.
            </span>
          </div>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a className="hover:text-white transition" href="/athletes">
            Athletes
          </a>
          <a className="hover:text-white transition" href="/coaches">
            Coaches
          </a>
          <a className="hover:text-white transition" href="/facility">
            Facility
          </a>
          <a className="hover:text-white transition" href="/our-story">
            Our Story
          </a>
          <a className="hover:text-white transition" href="/contact">
            Connect
          </a>
        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl border border-red-600/60 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-neutral-950 shadow-[0_20px_60px_rgba(255,80,0,0.5)] hover:shadow-[0_24px_80px_rgba(255,80,0,0.7)] transition"
        >
          Get Involved
        </a>
      </div>
    </header>
  );
}
