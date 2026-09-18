import { Button, SectionLabel } from "@/components/PageUI";
import { IconFlame } from "@/components/icons";
import { ArrowRight } from "lucide-react";

const REFLEXES = [
  "Suivez les consignes des secours et n'entrez pas dans les lieux sans autorisation.",
  "Informez l'assureur selon les conditions de votre contrat.",
  "Prenez des photographies et vidéos uniquement si cela peut être fait sans danger.",
  "Conservez les documents, factures, inventaires et preuves d'achat disponibles.",
  "Ne jetez pas prématurément les biens endommagés, sauf nécessité de sécurité ou de salubrité dûment documentée.",
  "Distinguez les mesures urgentes des travaux définitifs.",
  "Notez les dépenses engagées et conservez les justificatifs.",
];

const INTERVENTION = [
  "Analyse du dossier",
  "Visite lorsque nécessaire",
  "Documentation photographique",
  "Inventaire",
  "Recherche des justificatifs",
  "Évaluation des postes retenus",
  "Préparation des réunions",
  "Échanges techniques",
  "Suivi selon la lettre de mission",
];

export default function IncendiePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Sinistre incendie</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
                Après un incendie, protégez les personnes, les preuves et votre dossier
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Un incendie peut affecter le bâtiment, les biens, les équipements et l&apos;usage des lieux. Elvarra vous aide à organiser un dossier complet avant les étapes déterminantes de l&apos;expertise.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Parler à un expert incendie
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
                <img src="/incendiemaison.jpeg" alt="Super Expert" className="rounded-xl"/>
            </div>
          </div>
        </section>

        {/* PREMIERS REFLEXES */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">À faire dès maintenant</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Les premiers réflexes
          </h2>

          <div className="mt-10 flex flex-col gap-3 rounded-3xl bg-white p-8 md:p-12">
            {REFLEXES.map((r, i) => (
              <div key={r} className="flex items-start gap-4 border-b border-[#F1F1EC] pb-4 text-left last:border-none last:pb-0">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                  style={{ backgroundColor: "#C65D3B", fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <p className="mt-0.5 text-[15px] leading-relaxed text-[#3A4657]">{r}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POURQUOI COMPLEXE */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-8 md:p-12">
            <h2 className="max-w-[560px] text-[24px] leading-tight text-white lg:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              Pourquoi l&apos;évaluation est complexe
            </h2>
            <p className="mt-5 max-w-[680px] text-[15px] leading-relaxed text-white/80">
              Les effets du feu, des fumées, de la chaleur, de l&apos;eau d&apos;extinction et des mesures de secours peuvent se cumuler. L&apos;évaluation peut concerner la structure, les finitions, le mobilier, les équipements, le nettoyage, la décontamination, la dépose, les frais et les conséquences d&apos;une impossibilité d&apos;occuper ou d&apos;exploiter les lieux.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#F0B199]">
              Tous les postes ne sont pas automatiquement garantis. Ils doivent être examinés au regard du contrat et des faits.
            </p>
          </div>
        </section>

        {/* COMMENT Elvarra INTERVIENT */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">Notre intervention</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Comment Elvarra intervient
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {INTERVENTION.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#E9C4B4] bg-[#FBEAE4] px-4 py-2 text-[14px] text-[#8A3E24] w-full sm:w-fit"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#C65D3B] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Une expertise est programmée ou votre dossier a déjà commencé ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85">
              Transmettez-nous la date, les premières pièces et les coordonnées utiles.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#C65D3B] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#C65D3B]">
                Faire analyser mon dossier incendie
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}