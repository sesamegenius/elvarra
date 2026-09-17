import { Button, SectionLabel } from "@/components/PageUI";
import { Droplets } from "lucide-react";
import { ArrowRight } from "lucide-react";

const A_FAIRE = [
  "Coupez l'arrivée d'eau si cela est possible et utile, sans vous mettre en danger.",
  "Protégez les biens et limitez l'aggravation.",
  "Prévenez les parties concernées et l'assureur.",
  "Établissez le constat amiable lorsque la situation le requiert.",
  "Photographiez les zones touchées et leur évolution.",
  "Conservez les biens et matériaux endommagés lorsque possible.",
  "Gardez les factures et justificatifs de dépenses.",
  "Évitez les travaux définitifs avant que les dommages aient pu être constatés, sauf urgence.",
];

export default function DegatDesEauxPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Sinistre dégât des eaux</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
                Dégât des eaux : ne laissez pas les dommages visibles résumer toute la situation
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Une trace au plafond peut révéler des conséquences plus larges : revêtements, isolation, mobilier, équipements, humidité persistante ou impossibilité d&apos;utiliser une pièce. ELVARRA vous aide à documenter le sinistre et à structurer le dossier.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Faire le point sur mon dégât des eaux
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#3D6BAD]/10 text-[#3D6BAD]">
                <Droplets className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* QUE FAIRE */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">À faire dès maintenant</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Que faire ?
          </h2>

          <div className="mt-10 flex flex-col gap-3 rounded-3xl bg-white p-8 md:p-12">
            {A_FAIRE.map((r, i) => (
              <div key={r} className="flex items-start gap-4 border-b border-[#F1F1EC] pb-4 text-left last:border-none last:pb-0">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                  style={{ backgroundColor: "#3D6BAD", fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[#3A4657]">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POINTS DE VIGILANCE */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-8 md:p-12">
            <h2 className="max-w-[560px] text-[24px] leading-tight text-white lg:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              Les points de vigilance
            </h2>
            <p className="mt-5 max-w-[680px] text-[15px] leading-relaxed text-white/80">
              La recherche de fuite, la réparation de la cause et la remise en état des conséquences sont des sujets distincts. Les responsabilités, la propriété des éléments endommagés et les conventions entre assureurs peuvent également influer sur le traitement.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#AEC9E8]">
              ELVARRA clarifie les faits et les documents sans présumer de la prise en charge.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#3D6BAD] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Vous craignez que certains dommages aient été oubliés ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85">
              Expliquez-nous ce qui s&apos;est passé et l&apos;état d&apos;avancement du dossier.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#3D6BAD] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#3D6BAD]">
                Parler à ELVARRA
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}