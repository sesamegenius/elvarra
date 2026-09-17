import type { Metadata } from "next";
import { Button, SectionLabel } from "@/components/PageUI";
import { IconBuilding } from "@/components/icons";
import {
  ArrowRight,
  Building2,
  Cog,
  Boxes,
  Receipt,
  TrendingDown,
  CalendarClock,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expert d'assuré pour entreprises | ELVARRA",
  description:
    "ELVARRA accompagne les entreprises après un sinistre touchant leurs locaux, équipements, stocks ou activité.",
};

const ENJEUX = [
  { icon: Building2, title: "Bâtiments, aménagements et embellissements" },
  { icon: Cog, title: "Machines, équipements, mobilier et informatique" },
  { icon: Boxes, title: "Stocks, marchandises et matières" },
  { icon: Receipt, title: "Frais supplémentaires et mesures conservatoires" },
  { icon: TrendingDown, title: "Pertes d'exploitation et conséquences économiques" },
  { icon: CalendarClock, title: "Conditions et délais de reprise" },
];

const STAKEHOLDERS = [
  "Direction",
  "Finance",
  "Exploitation",
  "Équipes immobilières",
  "Courtier",
  "Assureur",
  "Experts",
  "Entreprises intervenantes",
];

const LIVRABLES = [
  "Note de situation",
  "Liste des pièces attendues",
  "État descriptif et photographique",
  "État des pertes et chiffrages",
  "Préparation des réunions d'expertise",
  "Relevé des décisions et actions",
  "Reporting d'avancement",
];

export default function ProfessionnelsPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="sky">Professionnels et entreprises</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
                Un sinistre professionnel ne touche pas seulement des murs
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Lorsqu&apos;un incendie, un dégât des eaux ou un événement climatique affecte vos locaux, ses conséquences peuvent concerner les équipements, les marchandises, l&apos;exploitation et la reprise d&apos;activité. ELVARRA structure et défend votre dossier dans le cadre de la mission confiée.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Échanger avec un expert
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="rounded-full border border-[#C7D9EE] bg-white px-3.5 py-1.5 text-[13px] text-[#3D6BAD]">Locaux</span>
                <span className="rounded-full border border-[#C7D9EE] bg-white px-3.5 py-1.5 text-[13px] text-[#3D6BAD]">Équipements</span>
                <span className="rounded-full border border-[#C7D9EE] bg-white px-3.5 py-1.5 text-[13px] text-[#3D6BAD]">Stocks</span>
                <span className="rounded-full border border-[#C7D9EE] bg-white px-3.5 py-1.5 text-[13px] text-[#3D6BAD]">Exploitation</span>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#3D6BAD]/10 text-[#3D6BAD]">
                <IconBuilding className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 pb-14 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
              <h2 className="text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
                Préserver l&apos;activité autant que le dossier
              </h2>
              <p className="text-[16px] leading-relaxed text-[#4A5568]">
                Les premières heures imposent souvent des arbitrages rapides : sécurisation, mesures conservatoires, relogement temporaire d&apos;une activité, protection des stocks, continuité commerciale. Ces décisions doivent être documentées afin de conserver une lecture claire des faits, des coûts et des conséquences.
              </p>
            </div>
          </div>
        </section>

        {/* ENJEUX */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Périmètre d&apos;analyse</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Les enjeux que nous pouvons analyser
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ENJEUX.map((e) => (
              <div key={e.title} className="rounded-2xl bg-white p-6">
                <span className="flex h-11 w-full sm:w-11 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#3D6BAD]">
                  <e.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[16px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                  {e.title}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[640px] text-[14px] leading-relaxed text-[#4A5568]">
            Chaque poste est étudié au regard du contrat, des pièces disponibles et du périmètre accepté.
          </p>
        </section>

        {/* DECIDEURS */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-8 md:p-12">
            <h2 className="max-w-[560px] text-[24px] leading-tight text-white lg:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              Une organisation adaptée aux décideurs
            </h2>
            <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-white/80">
              ELVARRA peut travailler avec la direction, la finance, l&apos;exploitation, les équipes immobilières, le courtier, l&apos;assureur, les experts et les entreprises intervenantes. L&apos;objectif est de disposer d&apos;un dossier centralisé, d&apos;échéances identifiées et d&apos;une information exploitable pour décider.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {STAKEHOLDERS.map((s) => (
                <span key={s} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13px] text-white w-full sm:w-fit">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* LIVRABLES */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">Ce que vous recevez</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Livrables possibles selon la mission
          </h2>

          <div className="mt-10 divide-y divide-[#DCE1DD] rounded-3xl bg-white px-8 md:px-12">
            {LIVRABLES.map((l) => (
              <div key={l} className="flex items-center gap-4 py-5 text-left">
                <FileText className="h-5 w-5 shrink-0 text-[#3D6BAD]" />
                <p className="text-[15px] text-[#3A4657]">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#3D6BAD] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Vos locaux ou votre activité sont touchés ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85">
              Contactez ELVARRA dès que possible afin d&apos;organiser les premières étapes.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#3D6BAD] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#3D6BAD]">
                Être accompagné après un sinistre professionnel
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}