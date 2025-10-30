import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { CoachPitch } from "@/components/CoachPitch";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function CoachesPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />

      <section className="bg-neutral-950 py-20 md:py-28 border-b border-neutral-800/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            For Club Directors • ADs • Head Coaches
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.05]">
            Culture, standards, leadership — installed.
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            We give you a full development engine: youth performance training,
            sport IQ curriculum, leadership pathway, and communication
            standards. You keep your brand. We help you build something that
            lasts longer than one roster.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <CoachPitch />
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <FAQSection />
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
