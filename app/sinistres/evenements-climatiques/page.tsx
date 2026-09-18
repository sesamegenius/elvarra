import { Button, SectionLabel } from "@/components/PageUI";
import { CloudLightning } from "lucide-react";
import { ArrowRight } from "lucide-react";

const PREMIERES_ACTIONS = [
  "Priorité à la sécurité.",
  "Faites intervenir les services ou professionnels compétents lorsque nécessaire.",
  "Photographiez les dommages avant et après les mesures d'urgence.",
  "Conservez les factures.",
  "Notez la chronologie des événements.",
  "Rassemblez les éléments permettant de caractériser l'événement.",
];

const A_DISTINGUER = [
  "Cause de l'événement",
  "Dommages directs",
  "Aggravation éventuelle",
  "Mesures conservatoires",
  "Réparations provisoires",
  "Travaux définitifs",
  "Garanties et exclusions du contrat",
];

export default function EvenementsClimatiquesPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Sinistre événement climatique</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
                Après un événement climatique, documentez vite et réparez avec méthode
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Tempête, grêle, fortes pluies ou autre événement : les mesures conservatoires sont souvent urgentes, mais elles ne doivent pas faire disparaître les preuves utiles au dossier.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Présenter mon sinistre
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
                <img src="/tempete-en-mer.jpg" alt="Super Expert" className="rounded-xl"/>
            </div>
          </div>
        </section>

        {/* PREMIERES ACTIONS */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">À faire dès maintenant</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Premières actions
          </h2>

          <div className="mt-10 flex flex-col gap-3 rounded-3xl bg-white p-8 md:p-12">
            {PREMIERES_ACTIONS.map((r, i) => (
              <div key={r} className="flex items-start gap-4 border-b border-[#F1F1EC] pb-4 text-left last:border-none last:pb-0">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                  style={{ backgroundColor: "#5C6F8A", fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[#3A4657]">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CE QU'IL FAUT DISTINGUER */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">Cadrage du dossier</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Ce qu&apos;il faut distinguer
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {A_DISTINGUER.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#C9D2DE] bg-[#EEF1F5] px-4 py-2 text-[14px] text-[#3E4A5C] w-full sm:w-fit"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#5C6F8A] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Vous devez agir vite sans fragiliser votre dossier ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85">
              Contactez Elvarra pour examiner les prochaines étapes.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#5C6F8A] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#5C6F8A]">
                Être rappelé
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}