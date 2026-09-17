import { ArrowRight } from 'lucide-react';
import {
  IconFlame,
  IconDroplet,
  IconOther,
  IconBriefcase,
  IconBuilding,
  IconSearchDoc,
} from '@/components/icons';
import { Button, SectionLabel } from '@/components/PageUI';

export const metadata = {
  title: 'Conseils après sinistre | ELVARRA',
  description:
    'Guides pratiques pour comprendre l’expertise, préparer votre dossier et adopter les bons réflexes après un sinistre.',
};

const ARTICLES = [
  {
    title: 'Que faire dans les 24 heures suivant un incendie ?',
    href: '/conseils/24-heures-apres-un-incendie/',
    icon: IconFlame,
    bar: '#C65D3B',
  },
  {
    title: 'Comment préparer une expertise après un dégât des eaux ?',
    href: '/conseils/preparer-une-expertise-degat-des-eaux/',
    icon: IconDroplet,
    bar: '#5B90D6',
  },
  {
    title: 'Expert d’assuré et expert mandaté par l’assurance : quelles différences ?',
    href: '/conseils/expert-assure-et-expert-mandate-differences/',
    icon: IconSearchDoc,
    bar: '#1F6F63',
  },
  {
    title: 'Quels documents conserver après un sinistre ?',
    href: '/conseils/documents-a-conserver-apres-un-sinistre/',
    icon: IconSearchDoc,
    bar: '#1F6F63',
  },
  {
    title: 'Pourquoi un devis ne suffit-il pas toujours à évaluer un sinistre ?',
    href: '/conseils/pourquoi-un-devis-ne-suffit-pas-toujours/',
    icon: IconOther,
    bar: '#5B6B82',
  },
  {
    title: 'Peut-on faire des travaux avant l’expertise ?',
    href: '/conseils/peut-on-faire-des-travaux-avant-l-expertise/',
    icon: IconOther,
    bar: '#5B6B82',
  },
  {
    title: 'Comment constituer un inventaire des biens endommagés ?',
    href: '/conseils/constituer-un-inventaire-des-biens-endommages/',
    icon: IconSearchDoc,
    bar: '#1F6F63',
  },
  {
    title: 'Que faire lorsqu’une proposition d’indemnisation semble incomplète ?',
    href: '/conseils/proposition-d-indemnisation-incomplete/',
    icon: IconOther,
    bar: '#5B6B82',
  },
  {
    title: 'Comment documenter un sinistre professionnel ?',
    href: '/conseils/documenter-un-sinistre-professionnel/',
    icon: IconBriefcase,
    bar: '#3D6BAD',
  },
  {
    title: 'Gestion locative : pourquoi suivre un sinistre jusqu’à la remise en état ?',
    href: '/conseils/gestion-locative-suivre-un-sinistre/',
    icon: IconBuilding,
    bar: '#3D6BAD',
  },
];

export default function ConseilsPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-10 pt-16 md:px-14 md:pb-12 md:pt-20">
          <div className="max-w-[640px] mx-auto md:mx-0">
            <SectionLabel tone="sky">Guides ELVARRA</SectionLabel>
            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[44px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Comprendre avant de décider
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Retrouvez les guides ELVARRA pour préparer les étapes importantes d’un dossier de
              sinistre.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[#5B6B82]">
              Ces contenus donnent des repères généraux. Ils ne remplacent pas l’examen d’un
              contrat ou d’une situation particulière.
            </p>
          </div>
        </section>

        {/* LISTE DES ARTICLES */}
        <section className="px-6 pb-8 md:px-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {ARTICLES.map((article) => (
              <a
                key={article.href}
                href={article.href}
                className="group flex flex-col rounded-2xl bg-white p-6 text-left transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)]"
              >
                <span className="h-1 w-10 rounded-full" style={{ backgroundColor: article.bar }} />
                <article.icon className="mt-5 h-6 w-6 text-[#14213D]" />
                <div className="mt-4 flex items-start gap-2">
                  <p
                    className="text-[16px] leading-snug text-[#14213D]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {article.title}
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-[#5B90D6]">
                  Lire le guide
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
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
                Poser une question à ELVARRA
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}