import { Button, SectionLabel } from "@/components/PageUI";
import { ArrowRight } from "lucide-react";

const FROM = [0x5b, 0x90, 0xd6];
const TO = [0x1f, 0x6f, 0x63];
 
const mix = (t: number) =>
  `rgb(${FROM.map((c, k) => Math.round(c + (TO[k] - c) * t)).join(',')})`;


const MOMENTS = [
  {
    title: "Le sinistre vient de se produire",
    text: "Nous vous aidons à identifier les premiers réflexes et les éléments à préserver.",
  },
  {
    title: "L'expertise est programmée",
    text: "Nous préparons avec vous les pièces et les points à présenter.",
  },
  {
    title: "L'expertise a eu lieu",
    text: "Nous étudions le dossier dans son état actuel.",
  },
  {
    title: "Une proposition a été reçue",
    text: "Nous pouvons analyser les éléments disponibles avant que vous preniez une décision.",
  },
  {
    title: "Un désaccord existe",
    text: "Nous évaluons les voies techniques envisageables dans le cadre du contrat et de la situation.",
  },
];

const POSTES = [
  "Le bâtiment",
  "Les embellissements",
  "Le mobilier et les biens",
  "Les frais et mesures justifiés",
  "L'impossibilité d'occuper les lieux",
  "Tout autre poste éligible",
];

const ACCOMPAGNEMENT = [
  "Analyse de la situation et du contrat transmis",
  "Visite et constat lorsque nécessaire",
  "Inventaire et documentation des dommages",
  "Recherche et organisation des justificatifs",
  "Chiffrage des postes retenus",
  "Préparation et participation aux opérations d'expertise selon la mission",
  "Échanges techniques et suivi du dossier",
];

const last = ACCOMPAGNEMENT.length - 1;


export default function ParticuliersPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Particuliers</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
                Après un sinistre dans votre logement, faites-vous accompagner par votre propre expert
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Incendie, dégât des eaux ou événement climatique : Elvarra vous aide à comprendre les démarches, rassembler les preuves, évaluer les dommages et défendre vos intérêts dans le cadre du dossier d&apos;indemnisation.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Faire analyser ma situation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
                <img src="/AccompagnementExpert.jpg" alt="Super Expert" className="rounded-xl"/>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 pb-14 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <h2 className="max-w-[640px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
              Vous n&apos;avez pas à tout maîtriser seul
            </h2>
            <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-[#4A5568]">
              Après un sinistre, il faut gérer l&apos;urgence, les démarches, les documents, les échanges avec l&apos;assurance et parfois un logement devenu difficilement habitable. Dans ce contexte, il est compliqué de savoir si tous les dommages ont été identifiés et correctement présentés.
            </p>
            <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
              Elvarra vous apporte une méthode et un interlocuteur.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Le bon moment pour appeler</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            À quels moments intervenir ?
          </h2>

          <div className="mt-10 relative pl-8 md:pl-10">
            <div aria-hidden="true" className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-[#BFE0D6]" />
            <div className="flex flex-col gap-8">
              {MOMENTS.map((m) => (
                <div key={m.title} className="relative">
                  <span className="absolute -left-8 md:-left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1F6F63] ring-4 ring-[#EEF4F1]" />
                  <p className="text-[17px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                    {m.title}
                  </p>
                  <p className="mt-1.5 max-w-[560px] text-[15px] leading-relaxed text-[#4A5568]">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERIMETRE */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionLabel tone="teal">Périmètre d&apos;examen</SectionLabel>
                <h2 className="text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
                  Ce que nous examinons
                </h2>
                <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-[#4A5568]">
                  Selon le dossier, plusieurs postes peuvent relever des garanties et de la mission confiée. La prise en compte de chacun dépend du contrat, des responsabilités, des justificatifs et des circonstances du sinistre.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 content-start">
                {POSTES.map((p) => (
                  <span key={p} className="rounded-full border border-[#BFE0D6] bg-[#EEF4F1] px-4 py-2 text-[14px] text-[#1F6F63] w-full sm:w-fit">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACCOMPAGNEMENT */}
        <section className="px-6 pb-16 md:px-14">
      <div className="grid gap-8 rounded-3xl bg-white p-6 text-left sm:p-8 lg:grid-cols-[5fr_7fr] lg:gap-14 lg:p-10">
        {/* TITRE */}
        <div>
          <SectionLabel tone="sky">Notre accompagnement</SectionLabel>
          <h2
            className="max-w-[440px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Un déroulé pensé pour ne rien laisser de côté
          </h2>
        </div>
 
        {/* FRISE */}
        <ol>
          {ACCOMPAGNEMENT.map((item, i) => (
            <li key={item} className="relative flex items-start gap-4 pb-5 last:pb-0">
              {/* Segment de fil : du centre de cette pastille au centre de la suivante */}
              {i < last && (
                <span
                  aria-hidden="true"
                  className="absolute left-[17px] top-[18px] h-full w-0.5"
                  style={{
                    background: `linear-gradient(to bottom, ${mix(i / last)}, ${mix(
                      (i + 1) / last
                    )})`,
                  }}
                />
              )}
 
              {/* Pastille numérotée : la dernière passe au vert */}
              <span
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[14px] text-white ring-4 ring-white ${
                  i === last ? 'bg-[#1F6F63]' : 'bg-[#14213D]'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {i + 1}
              </span>
 
              <p className="pt-1.5 text-[15px] leading-relaxed text-[#3A4657]">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

        {/* PROPRIETAIRE / LOCATAIRE */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#FEF1D0] p-8 md:p-12">
            <h2 className="max-w-[600px] text-[24px] leading-tight text-[#14213D] lg:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              Propriétaire, locataire ou bailleur ?
            </h2>
            <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-[#4A5568]">
              La qualité de l&apos;occupant et la propriété des éléments endommagés peuvent influer sur le traitement du dossier. Elvarra commence par clarifier votre situation, les contrats concernés et le rôle de chacun. Nous ne présumons pas de la prise en charge avant d&apos;avoir examiné les faits et les documents.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#1F6F63] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Vous avez un doute sur les prochaines étapes ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/85">
              Présentez-nous votre situation et les échéances connues.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#1F6F63] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#1F6F63]">
                Parler de mon sinistre
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}