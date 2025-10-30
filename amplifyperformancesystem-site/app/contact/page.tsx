import React from "react";
import { SiteNav } from "@/components/SiteNav";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased flex flex-col">
      <SiteNav />

      <section className="bg-neutral-950 py-20 md:py-28 border-b border-neutral-800/60">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">
            Connect
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-[1.05]">
            This is where it starts.
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Parents. Coaches. Club directors. ADs. Performance coaches. If
            you’re serious about raising the standard for how young athletes are
            developed — reach out. We’re listening.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ContactSection />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
