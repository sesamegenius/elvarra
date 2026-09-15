import { IconSearchDoc } from '@/components/icons';
import { ArrowRight } from 'lucide-react';
import { Button, SectionLabel } from '@/components/PageUI';

const ROLES = [
  { title: "L'assureur", text: 'Instruit le dossier et applique les garanties prévues au contrat.' },
  { title: "L'expert mandaté par l'assureur", text: 'Réalise la mission confiée par la compagnie.' },
  { title: 'L\u2019entreprise de travaux', text: 'Propose et réalise des prestations de remise en état.' },
  {
    title: "ELVARRA, l'expert d'assuré",
    text: "Intervient à vos côtés dans le cadre de sa propre mission, pour analyser, documenter, évaluer et défendre votre dossier.",
    highlight: true,
  },
];

const MISSION_STEPS = [
  { title: 'La lettre de mission', text: "Elle précise l'objet, le périmètre, les obligations de chacun, les modalités d'honoraires et les conditions de fin de mission." },
  { title: "L'analyse des pièces", text: 'ELVARRA examine les documents transmis et identifie les points à approfondir.' },
  { title: 'La documentation', text: 'Les dommages sont constatés et les évaluations prévues à la mission sont établies.' },
  { title: 'Les échanges', text: "Nous préparons les échanges et suivons le dossier selon les limites convenues." },
];

export default function ExpertAssurePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Comprendre le métier</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: 'var(--font-display)' }}>
                L&apos;expert d&apos;assuré : votre expert après un sinistre
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                L&apos;expert d&apos;assuré est choisi par l&apos;assuré pour l&apos;accompagner dans l&apos;analyse, la documentation, l&apos;évaluation et la défense de son préjudice.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Faire analyser ma situation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#3D6BAD]/10 text-[#3D6BAD]">
                <IconSearchDoc className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* QUI DEFEND QUI */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Des rôles distincts</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: 'var(--font-display)' }}>
            Qui défend qui ?
          </h2>
          <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[#4A5568]">
            Ces intervenants peuvent échanger et travailler sur le même dossier, mais leurs rôles ne sont pas interchangeables.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className={`relative overflow-hidden rounded-2xl p-6 ${
                  role.highlight
                    ? 'bg-gradient-to-br from-blue-500 via-blue-500 to-[#6B8FD6] text-white'
                    : 'bg-white'
                }`}
              >
                <p
                  className={`relative z-10 text-[16px] ${role.highlight ? 'text-white' : 'text-[#14213D]'}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {role.title}
                </p>
                <p className={`relative z-10 mt-3 text-[14px] leading-relaxed ${role.highlight ? 'text-white/80' : 'text-[#4A5568]'}`}>
                  {role.text}
                </p>
                {role.highlight && (
                  <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44">
                    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10" />
                    <div className="absolute bottom-7 right-7 h-28 w-28 rounded-full bg-[#A8C7FF]/20" />
                    <div className="absolute bottom-14 right-14 h-16 w-16 rounded-full bg-[#DCE9FF]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* QUAND FAIRE APPEL */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-8 md:p-12">
            <h2 className="max-w-[560px] text-[24px] leading-tight text-white lg:text-[28px]" style={{ fontFamily: 'var(--font-display)' }}>
              Quand faire appel à lui ?
            </h2>
            <p className="mt-5 max-w-[680px] text-[15px] leading-relaxed text-white/80">
              Idéalement tôt : lorsqu&apos;un sinistre important survient, avant une réunion d&apos;expertise, lorsqu&apos;il faut constituer un état des pertes ou avant d&apos;accepter une proposition.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#AEC9E8]">
              Une intervention plus tardive reste parfois possible, après examen du dossier.
            </p>
          </div>
        </section>

        {/* DEROULEMENT DE LA MISSION */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">La mission</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: 'var(--font-display)' }}>
            Comment se déroule la mission ?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl bg-white p-8 sm:grid-cols-2 md:p-12">
            {MISSION_STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col xl:flex-row gap-4">
                <span className="text-[22px] text-[#BFD3E8] shrink-0" style={{ fontFamily: 'var(--font-display)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[17px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                    {step.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HONORAIRES */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl border border-[#DCE1DD] bg-white p-8 md:p-12">
            <SectionLabel tone="sky">Transparence</SectionLabel>
            <h2 className="max-w-[560px] text-[24px] leading-tight text-[#14213D] lg:text-[28px]" style={{ fontFamily: 'var(--font-display)' }}>
              Les honoraires
            </h2>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#4A5568]">
              Les honoraires dépendent du dossier et de la mission. Ils sont expliqués avant tout engagement.
            </p>
            <p className="mt-3 max-w-[680px] text-[15px] leading-relaxed text-[#4A5568]">
              Certains contrats peuvent prévoir une garantie d&apos;honoraires d&apos;expert d&apos;assuré, avec des conditions, limites ou plafonds. Cette prise en charge n&apos;est jamais présumée : le contrat doit être vérifié.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#3D6BAD] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
              Vous voulez savoir si l&apos;expertise d&apos;assuré est pertinente pour votre dossier ?
            </h2>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#3D6BAD]">
              <span className="flex items-center gap-2 text-[#3D6BAD]">
                Faire analyser ma situation
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}