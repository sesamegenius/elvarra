import { ClipboardList, ArrowRight } from 'lucide-react';
import { Button, SectionLabel } from '@/components/PageUI';
import { Arrow } from '@radix-ui/react-tooltip';

const STEPS = [
  { title: 'Analyse', text: 'Nous reprenons la chronologie, les circonstances, les premières démarches et les échéances.' },
  { title: 'Cadrage de la mission', text: "Nous précisons l'objet de notre intervention, ce qui est inclus ou exclu, et les modalités d'honoraires." },
  { title: 'Constat et documentation', text: 'Nous identifions les dommages, organisons photographies, relevés et justificatifs.' },
  { title: 'Évaluation', text: 'Nous chiffrons les postes entrant dans la mission selon les données disponibles et les garanties à examiner.' },
  { title: 'Constitution du dossier', text: 'Chronologie, état descriptif, état des pertes, justificatifs et argumentation technique.' },
  { title: 'Expertise et échanges', text: 'Nous préparons les réunions et intervenons selon la mission lors des échanges avec les autres parties.' },
  { title: 'Suivi', text: 'Nous tenons le client informé et clôturons la mission avec une situation claire du dossier.' },
];

export default function NotreMethodePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="teal">Notre méthode</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: 'var(--font-display)' }}>
                Un dossier solide commence par une méthode claire
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Nous transformons une situation souvent confuse en un dossier structuré, documenté et compréhensible.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  Échanger avec ELVARRA
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#1F6F63]/10 text-[#1F6F63]">
                <ClipboardList className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* ETAPES */}
        <section className="px-6 pb-16 md:px-14">
  <div className="grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl bg-white p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-3">
    {STEPS.map((step, i) => (
      <div key={step.title} className="flex flex-col gap-4 xl:flex-row">
        <span
          className="shrink-0 text-[22px] text-[#BFE0D6]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {String(i + 1).padStart(2, '0')}
        </span>

        <div>
          <p
            className="text-[17px] text-[#14213D]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {step.title}
          </p>

          <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">
            {step.text}
          </p>
        </div>
      </div>
    ))}

    {/* CTA */}
    <a
      href="/contact"
      className="hidden items-center justify-center rounded-2xl bg-[#14213D] p-6 text-center text-white transition-colors hover:bg-[#1C2D50] sm:flex sm:col-span-1 lg:col-span-2"
    >
      <span
        className="text-[18px] h-fit flex items-center justify-center "
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Parlons de votre projet
        <ArrowRight />
      </span>
    </a>
  </div>
</section>



        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#1F6F63] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
              Vous souhaitez savoir comment cette méthode s&apos;applique à votre dossier ?
            </h2>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#1F6F63] hover:bg-gray-200">
              <span className="flex items-center gap-2 text-[#1F6F63]">
                Échanger avec ELVARRA
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}