import { IconBriefcase } from '@/components/icons';
import { ArrowRight } from 'lucide-react';
import { Button, SectionLabel } from '@/components/PageUI';

const ENGAGEMENTS = [
  { title: 'Indépendance', text: 'Nous intervenons dans le cadre de la mission confiée par notre client.' },
  { title: 'Méthode', text: 'Chaque position repose sur des faits, des pièces et une évaluation explicable.' },
  { title: 'Clarté', text: 'Nous expliquons ce qui est établi, ce qui doit être vérifié et ce qui dépend du contrat.' },
  { title: 'Réactivité', text: 'Nous identifions rapidement les urgences et les échéances.' },
  { title: 'Mesure', text: 'Nous défendons le dossier sans promesse irréaliste ni confrontation de principe.' },
];

const PERIMETRE = [
  'Zones géographiques réellement couvertes — à préciser avant publication',
  'Types de dossiers acceptés — à préciser avant publication',
  'Modalités d\u2019intervention à distance ou sur site — à préciser avant publication',
];

export default function CabinetPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="sky">Le cabinet</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: 'var(--font-display)' }}>
                L&apos;expertise au service d&apos;une décision plus claire
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Elvarra accompagne les assurés et les acteurs de l&apos;immobilier confrontés à un sinistre. Notre rôle est de rendre les enjeux lisibles, de structurer les preuves et de défendre le dossier avec méthode.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Contacter le cabinet
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#3D6BAD]/10 text-[#3D6BAD]">
                <IconBriefcase className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* CONVICTION */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-8 md:p-12">
            <h2 className="max-w-[560px] text-[24px] leading-tight text-white lg:text-[28px]" style={{ fontFamily: 'var(--font-display)' }}>
              Notre conviction
            </h2>
            <p className="mt-5 max-w-[680px] text-[15px] leading-relaxed text-white/80">
              Après un sinistre, l&apos;assuré ne devrait pas avoir à comprendre seul un processus technique, contractuel et financier.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#AEC9E8]">
              Il doit pouvoir s&apos;appuyer sur un interlocuteur qui maîtrise le dossier et explique chaque étape.
            </p>
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">Nos engagements</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: 'var(--font-display)' }}>
            Ce qui guide notre intervention
          </h2>

          <div className="mt-10 rounded-3xl bg-white p-8 md:p-12">
            <ul className="flex flex-col gap-5 text-left">
              {ENGAGEMENTS.map((e) => (
                <li key={e.title} className="flex items-start gap-4 border-b border-[#F1F1EC] pb-5 last:border-none last:pb-0">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9A44E]" />
                  <div>
                    <p className="text-[16px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>{e.title}</p>
                    <p className="mt-1 text-[14px] leading-relaxed text-[#4A5568]">{e.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-2xl border border-dashed border-[#DCE1DD] bg-white p-6 md:p-8 text-left">
            <p className="text-[15px] font-medium text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
              L&apos;équipe
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">
              Bloc à compléter avant publication : nom, fonction, portrait professionnel, parcours factuel, années d&apos;expérience vérifiables, qualifications et domaines d&apos;intervention. Toute affirmation devra être justifiée.
            </p>
          </div>
        </section>

        {/* PERIMETRE */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Périmètre d&apos;intervention</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: 'var(--font-display)' }}>
            Où et pour quels dossiers
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {PERIMETRE.map((p) => (
              <div key={p} className="rounded-xl border border-dashed border-[#DCE1DD] bg-white p-4 text-left text-[14px] italic text-[#4A5568]">
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#3D6BAD] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
              Une question sur notre compétence ou notre manière d&apos;intervenir ?
            </h2>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#3D6BAD]">
              <span className="flex items-center gap-2 text-[#3D6BAD]">
                Contacter le cabinet
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}