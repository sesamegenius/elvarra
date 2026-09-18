import { ArrowRight } from 'lucide-react';
import { Button, SectionLabel } from '@/components/PageUI';
import ConseilsAccordion from '@/components/Conseilsaccordion';

export default function ConseilsPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-10 pt-16 md:px-14 md:pb-12 md:pt-20">
          <div className="max-w-[640px] mx-auto md:mx-0">
            <SectionLabel tone="sky">Guides Elvarra</SectionLabel>
            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[44px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Comprendre avant de décider
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Retrouvez les guides Elvarra pour préparer les étapes importantes d’un dossier de
              sinistre.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5B6B82]">
              Ces contenus donnent des repères généraux. Ils ne remplacent pas l’examen d’un
              contrat ou d’une situation particulière.
            </p>
          </div>
        </section>

        {/* LISTE DES ARTICLES (cards dépliantes) */}
        <section className="px-6 pb-8 md:px-14">
          <ConseilsAccordion />
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 pt-8 md:px-14">
          <div className="rounded-3xl p-10 text-center md:p-16 bg-[#14213D]">
            <h2
              className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vous recherchez une réponse liée à votre propre dossier ?
            </h2>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#14213D]">
              <span className="flex items-center gap-2 text-[#14213D]">
                Poser une question à Elvarra
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}