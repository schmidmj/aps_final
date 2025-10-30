import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { ParentJourney } from "@/components/SystemAndParentJourney"; // ParentJourney is defined there
import { CreedSection } from "@/components/CreedSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function AthletesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />

      <section className="bg-neutral-950 py-20 md:py-28 border-b border-neutral-800/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            For Athletes & Parents
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.05]">
            Your kid doesn’t just train here. They change here.
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Speed. Power. Confidence. Game IQ. Voice. We build athletes who don’t
            go quiet, don’t get rattled, and don’t disappear when the moment gets big.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-800/60">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ParentJourney />
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <CreedSection />
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
