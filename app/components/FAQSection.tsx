import React from "react";

export function FAQSection() {
  return (
    <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-10">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            FAQ
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Straight answers for parents, coaches, and directors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-sm text-neutral-200">
          <FAQCol
            items={[
              {
                q: "Is this only for elite athletes?",
                a:
                  "No. It’s for serious athletes. Serious doesn’t mean ‘already amazing,’ it means ‘willing to work, willing to listen, willing to lead.’ We build that."
              },
              {
                q: "Will my kid be safe training like this?",
                a:
                  "Yes. Our performance work is built for youth bodies — jump mechanics, landing, joint safety, controlled strength — not adult max-out culture."
              },
              {
                q:
                  "My kid struggles with confidence. Is this right for them?",
                a:
                  "100%. We explicitly train voice, presence, and controlled emotion. We don’t wait for confidence to ‘show up.’ We build it like speed or vertical."
              }
            ]}
          />

          <FAQCol
            items={[
              {
                q: "How is this different from private lessons?",
                a:
                  "Private lessons teach skills. APS builds the whole competitor: physical performance, sport IQ, real-game decision making, leadership, resilience, and communication."
              },
              {
                q: "Is this only volleyball?",
                a:
                  "Volleyball is our first flagship sport — but the model (speed, IQ, mindset, leadership, culture) is universal across team sports. We’re already structuring expansion."
              },
              {
                q: "Can my school / club bring APS in?",
                a:
                  "Yes. We partner with clubs, school programs, and ADs to install Amplify systems, standards, practice plans, and leadership tracks without you having to build it all alone."
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FAQCol({
  items
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((it, i) => (
        <div key={i}>
          <div className="text-white font-semibold leading-tight">{it.q}</div>
          <p className="text-[13px] text-neutral-400 leading-relaxed pt-1">
            {it.a}
          </p>
        </div>
      ))}
    </div>
  );
}
