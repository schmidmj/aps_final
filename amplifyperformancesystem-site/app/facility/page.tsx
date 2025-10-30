import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { FacilitySection } from "@/components/FacilitySection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function FacilityPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />

      <section className="bg-neutral-950 py-20 md:py-28 border-b border-neutral-800/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            Flagship Facility
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.05]">
            Home base for the next generation.
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Four courts. 8,000 sq ft performance center. Film room. Leadership
            lab. Parent / athlete commons that feels like belonging, not
            bleachers.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-800/60">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <FacilitySection />
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
