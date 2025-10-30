import React from "react";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/60 py-12 text-[11px] text-neutral-500 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col leading-tight text-center md:text-left">
          <span className="text-neutral-400 font-semibold">
            Amplify Performance System
          </span>
          <span className="text-neutral-600">
            © {new Date().getFullYear()} Amplify Athletics. All rights
            reserved.
          </span>
        </div>
        <div className="flex flex-col gap-1 text-neutral-600 text-center md:text-right">
          <span>Performance • Sport IQ • Mindset • Legacy</span>
          <span className="text-neutral-700">
            Amplify Potential. Amplify Life.
          </span>
        </div>
      </div>
    </footer>
  );
}
