import {
  IconFlame,
  IconDroplet,
  IconStorm,
  IconOther,
  IconHouse,
  IconBuilding,
  IconBriefcase,
  IconSearchDoc,
  SkylineDecoration,
} from '@/components/icons';
import { ArrowRight } from 'lucide-react';
import { Button, SectionLabel, DossierVisual, Accordion } from '@/components/PageUI';

const ROLES = [
  {
    title: "L'assureur",
    text: 'Instruit le dossier et applique les garanties prévues au contrat.',
  },
  {
    title: "L'expert mandaté par l'assureur",
    text: 'Accomplit la mission confiée par la compagnie.',
  },
  {
    title: 'Les entreprises de travaux',
    text: 'Chiffrent ou réalisent les travaux de remise en état.',
  },
  {
    title: "ELVARRA, l'expert d'assuré",
    text: 'Intervient à vos côtés pour analyser, documenter, évaluer et défendre votre préjudice.',
    highlight: true,
  },
];

const MISSIONS = [
  'Analyser votre situation et les étapes déjà accomplies',
  'Examiner les éléments utiles du contrat',
  'Constater et documenter les dommages',
  'Organiser les justificatifs',
  'Évaluer les préjudices entrant dans la mission',
  "Vous assister lors des échanges et opérations d'expertise",
  'Défendre techniquement votre dossier jusqu’aux étapes prévues dans la mission',
];

const METHOD_STEPS = [
  { title: 'Comprendre', text: "Nous reprenons les faits, le contrat et l'état d'avancement du dossier." },
  { title: 'Documenter', text: 'Nous réunissons les preuves et identifions les dommages.' },
  { title: 'Évaluer', text: 'Nous chiffrons les postes relevant de notre mission.' },
  { title: 'Préparer', text: 'Nous structurons un dossier clair et argumenté.' },
  { title: 'Accompagner', text: 'Nous intervenons à vos côtés dans les échanges techniques.' },
  { title: 'Suivre', text: "Nous assurons le suivi prévu jusqu'à la clôture de notre mission." },
];

const AUDIENCES = [
  {
    icon: IconHouse,
    title: 'Particuliers',
    text: 'Votre logement et vos biens ont été touchés ? ELVARRA vous aide à comprendre les démarches et à présenter un dossier documenté.',
    cta: 'Accompagnement des particuliers',
    href: '/particuliers/',
  },
  {
    icon: IconBuilding,
    title: 'Professionnels et entreprises',
    text: 'Vos locaux ou votre activité sont affectés ? Nous intégrons les enjeux techniques et économiques relevant de votre contrat et de notre mission.',
    cta: 'Accompagnement des professionnels',
    href: '/professionnels/',
  },
  {
    icon: IconBriefcase,
    title: 'Gestionnaires immobiliers',
    text: "Vous gérez un parc de logements ou d'actifs ? ELVARRA Gestion structure le suivi des sinistres, de leur signalement à leur clôture documentée.",
    cta: 'Découvrir ELVARRA Gestion',
    href: '/gestion-immobiliere/',
  },
];

const CLAIMS = [
  {
    icon: IconFlame,
    title: 'Incendie',
    text: 'Protéger les preuves, inventorier les dommages et préparer une évaluation complète.',
    href: '/sinistres/incendie/',
    bar: '#C65D3B',
  },
  {
    icon: IconDroplet,
    title: 'Dégât des eaux',
    text: 'Identifier les conséquences, documenter les éléments touchés et suivre le dossier.',
    href: '/sinistres/degat-des-eaux/',
    bar: '#5B90D6',
  },
  {
    icon: IconStorm,
    title: 'Événement climatique',
    text: 'Rassembler les preuves, mesures conservatoires et éléments techniques utiles.',
    href: '/sinistres/evenements-climatiques/',
    bar: '#5B6B82',
  },
  {
    icon: IconOther,
    title: 'Autre situation',
    text: "Présentez-nous votre dossier afin de vérifier s'il entre dans notre champ d'intervention.",
    href: '/contact/',
    bar: '#1F6F63',
  },
];

const WHY_POINTS = [
  'Un interlocuteur dédié pour rendre le dossier lisible',
  'Une approche méthodique fondée sur les faits et les pièces',
  'Une lecture technique du dommage et de ses conséquences',
  "Une intervention indépendante aux côtés de l'assuré",
  'Un discours clair à chaque étape',
];

const FAQS = [
  {
    q: 'Quand contacter ELVARRA ?',
    a: "Le plus tôt possible, idéalement avant une étape importante de l'expertise ou avant d'accepter une proposition. Un dossier déjà engagé peut néanmoins être étudié.",
  },
  {
    q: "Puis-je appeler après le passage de l'expert ?",
    a: "Oui. ELVARRA examinera l'état du dossier, les documents disponibles et les possibilités d'intervention.",
  },
  {
    q: 'ELVARRA intervient-il pour les entreprises ?',
    a: 'Oui, selon la nature du sinistre, les garanties et le périmètre de mission convenu.',
  },
  {
    q: "Combien coûte l'intervention ?",
    a: 'Les modalités sont expliquées avant tout engagement et formalisées dans la lettre de mission. Elles dépendent notamment de la nature et de la complexité du dossier.',
  },
];

export default function Home() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      {/* Conteneur unique : toutes les sections y sont imbriquées, fond gris clair qui
          se fond avec le blanc de la page et des cartes internes */}
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-14 md:pb-20 md:pt-20">
          <SkylineDecoration className="pointer-events-none absolute -right-6 bottom-0 h-24 w-auto text-[#14213D]/[0.04] md:h-32" />
          <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h1
                className="text-[36px] leading-[1.12] text-[#14213D] sm:text-[44px] lg:text-[50px]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Vous avez subi un sinistre. Qui défend vos intérêts ?
              </h1>
              <p className="mt-6 max-w-[540px] text-[17px] leading-relaxed text-[#4A5568]">
                ELVARRA est votre expert d&apos;assuré. Nous vous accompagnons dans l&apos;analyse de votre
                situation, l&apos;évaluation de vos dommages et la défense de votre dossier
                d&apos;indemnisation après un sinistre habitation ou professionnel.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button href="/contact/" variant="primary"><span className="flex items-center gap-2">
    Parler à un expert
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span></Button>
                <Button href="/expert-assure/" variant="secondary"><span className="flex items-center gap-2">
    Comprendre le rôle d&apos;un expert d&apos;assuré
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span></Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="rounded-full border border-[#DCE1DD] bg-white px-3.5 py-1.5 text-[13px] text-[#5B6B82]">Particuliers</span>
                <span className="rounded-full border border-[#C7D9EE] bg-white px-3.5 py-1.5 text-[13px] text-[#3D6BAD]">Professionnels</span>
                <span className="rounded-full border border-[#BFE0D6] bg-white px-3.5 py-1.5 text-[13px] text-[#1F6F63]">Habitation</span>
                <span className="rounded-full border border-[#DCE1DD] bg-white px-3.5 py-1.5 text-[13px] text-[#5B6B82]">Locaux professionnels</span>
              </div>
            </div>
            <DossierVisual />
          </div>
        </section>

        {/* SINISTRE RECENT */}
        <section className="px-6 pb-16 md:px-14">
          <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[640px]">
              <p className="text-[16px] font-medium text-[#14213D]">Vous venez de subir un sinistre ?</p>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5568]">
                Les premières décisions comptent. Sécurisez les personnes, limitez l'aggravation des
                dommages sans vous exposer, déclarez le sinistre et conservez autant de preuves que
                possible. Avant de faire disparaître des éléments endommagés ou d'engager des travaux
                définitifs, vérifiez les mesures à prendre dans votre situation.
              </p>
            </div>
            <Button href="/que-faire-apres-un-sinistre/" variant="secondary" className="shrink-0">
            <span className="flex items-center gap-2">
    Voir les premiers réflexes
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
            </Button>
          </div>
        </section>

        {/* QUI DEFEND QUI */}
        <section className="px-6 pb-20 md:px-14">
          <div className="max-w-[680px]">
            <SectionLabel tone="teal">Une distinction essentielle</SectionLabel>
            <h2 className="text-[28px] leading-tight text-[#14213D] lg:text-[34px]" style={{ fontFamily: 'var(--font-display)' }}>
              L'expert mandaté par l'assurance n'est pas votre propre expert
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Après un sinistre, plusieurs professionnels peuvent intervenir. L'assureur instruit le
              dossier et applique les garanties du contrat. L'expert qu'il mandate accomplit la mission
              confiée par la compagnie. L'entreprise chiffre ou réalise les travaux. L'expert d'assuré,
              lui, intervient aux côtés de l'assuré pour analyser, documenter, évaluer et défendre son
              préjudice.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4A5568]">
              Il ne s'agit pas d'entrer dans une logique de confrontation systématique, mais de
              permettre à l'assuré d'être lui aussi conseillé et représenté techniquement.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {ROLES.map((role) => {
    const isElvarra = role.title === "ELVARRA, l'expert d'assuré";

    return (
      <div
        key={role.title}
        className={`relative overflow-hidden rounded-2xl p-6 ${
          isElvarra
            ? 'bg-gradient-to-br from-blue-500 via-blue-500 to-[#6B8FD6] text-white'
            : role.highlight
              ? 'bg-[#1F6F63] text-white'
              : 'bg-white'
        }`}
      >
        <p
          className={`relative z-10 text-[16px] ${
            isElvarra || role.highlight
              ? 'text-white'
              : 'text-[#14213D]'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {role.title}
        </p>

        <p
          className={`relative z-10 mt-3 text-[14px] leading-relaxed ${
            isElvarra
              ? 'text-white/80'
              : role.highlight
                ? 'text-white/85'
                : 'text-[#4A5568]'
          }`}
        >
          {role.text}
        </p>

        {isElvarra && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44"
          >
            {/* Grand cercle */}
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10" />

            {/* Cercle intermédiaire */}
            <div className="absolute bottom-7 right-7 h-28 w-28 rounded-full bg-[#A8C7FF]/20" />

            {/* Petit cercle */}
            <div className="absolute bottom-14 right-14 h-16 w-16 rounded-full bg-[#DCE9FF]/30" />
          </div>
        )}
      </div>
    );
  })}
</div>

          <Button href="/expert-assure/" variant="ghost" className="mt-8">
          <span className="flex items-center gap-2">
    Qui défend qui après un sinistre ?
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
          </Button>
        </section>

        {/* A QUOI SERT */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
              <div>
                <SectionLabel tone="sky">À quoi sert un expert d'assuré ?</SectionLabel>
                <h2 className="text-[28px] leading-tight text-[#14213D] lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
                  Un sinistre ne se résume pas toujours à un devis
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568] max-w-[480px]">
                  Il faut parfois identifier l'ensemble des dommages, rechercher les justificatifs,
                  comprendre les garanties, évaluer des postes différents et préparer les opérations
                  d'expertise. ELVARRA peut intervenir pour :
                </p>
              </div>
              <ul className="flex flex-col gap-3">
  {MISSIONS.map((m, i) => {
    const isDark = i % 2 === 1;

    return (
      <li
        key={m}
        className={`text-[15px] ${
          isDark
            ? 'rounded-lg bg-[#14213D] p-2 text-white'
            : 'text-[#3A4657] px-2'
        }`}
      >
        {m}
      </li>
    );
  })}
</ul>
            </div>
          </div>
        </section>

        {/* METHODE */}
        <section className="px-6 pb-20 md:px-14">
          <div className="max-w-[680px]">
            <SectionLabel tone="teal">La méthode ELVARRA</SectionLabel>
            <h2 className="text-[28px] leading-tight text-[#14213D] lg:text-[34px]" style={{ fontFamily: 'var(--font-display)' }}>
              Une méthode en six étapes, du premier échange à la clôture
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl bg-white p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-3">
            {METHOD_STEPS.map((step, i) => (
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

          <Button href="/notre-methode/" variant="ghost" className="mt-8">
          <span className="flex items-center gap-2">
    Découvrir notre méthode
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
          </Button>
        </section>

        {/* AUDIENCES */}
        <section className="px-6 pb-20 md:px-14">
          <SectionLabel tone="sky">Un accompagnement adapté à votre situation</SectionLabel>
          <h2 className="max-w-[600px] text-[28px] leading-tight text-[#14213D] lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
            Que vous soyez particulier, entreprise ou gestionnaire de biens
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
  {AUDIENCES.map((aud) => {
    const isBuilding = aud.icon === IconBuilding;

    return (
      <div
        key={aud.title}
        className={`relative flex flex-col overflow-hidden rounded-2xl p-7 ${
          isBuilding
            ? 'bg-gradient-to-br from-blue-500 via-blue-500 to-[#6B8FD6] text-white'
            : 'bg-white text-black'
        }`}
      >
        <span
          className={`relative hidden xl:flex z-10 flex h-11 w-11 items-center justify-center rounded-xl ${
            isBuilding
              ? 'bg-white/15 text-white'
              : 'bg-[#EAF0F8] text-[#3D6BAD]'
          }`}
        >
          <aud.icon className="h-5 w-5" />
        </span>

        <p
          className={`relative z-10 mt-5 text-[19px] ${
            isBuilding ? 'text-white' : 'text-[#14213D]'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {aud.title}
        </p>

        <p
          className={`relative z-10 mt-3 flex-1 text-[15px] leading-relaxed ${
            isBuilding ? 'text-white/80' : 'text-[#4A5568]'
          }`}
        >
          {aud.text}
        </p>

        <Button
          href={aud.href}
          variant="ghost"
          className={`relative z-10 mt-6 self-start ${
            isBuilding
              ? 'text-white hover:bg-white/10 hover:text-white'
              : ''
          }`}
        >
          <span className="flex items-center gap-2">
          {aud.cta}
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
        </Button>

        {isBuilding && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44"
          >
            {/* Grand cercle */}
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/10" />

            {/* Cercle intermédiaire */}
            <div className="absolute bottom-7 right-7 h-28 w-28 rounded-full bg-[#A8C7FF]/20" />

            {/* Petit cercle */}
            <div className="absolute bottom-14 right-14 h-16 w-16 rounded-full bg-[#DCE9FF]/30" />
          </div>
        )}
      </div>
    );
  })}
</div>
        </section>

        {/* SINISTRES */}
        <section className="px-6 pb-20 md:px-14">
          <SectionLabel tone="teal">Principaux sinistres accompagnés</SectionLabel>
          <h2 className="max-w-[600px] text-[28px] leading-tight text-[#14213D] lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
            Chaque type de sinistre a ses urgences propres
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
  {CLAIMS.map((claim) => (
    <a
      key={claim.title}
      href={claim.href}
      className="group flex flex-col rounded-2xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)]"
    >
      <span
        className="h-1 w-10 rounded-full"
        style={{ backgroundColor: claim.bar }}
      />

      <claim.icon className="mt-5 h-7 w-7 text-[#14213D]" />

      <div className="mt-4 flex items-center gap-2">
        <p
          className="text-[17px] text-[#14213D]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {claim.title}
        </p>

        <ArrowRight
          className="h-4 w-4 text-[#5B90D6] transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>

      <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">
        {claim.text}
      </p>
    </a>
  ))}
</div>
        </section>

        {/* POURQUOI ELVARRA — inversion sombre, fondue en haut et en bas (pas de séparateur net) */}
        <section
          className="px-6 py-28 md:px-14 md:py-32 bg-gradient-to-b from-[#14213D] via-[#14213D] to-[#14213D] rounded-xl"
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionLabel tone="amber">Pourquoi ELVARRA ?</SectionLabel>
              <h2 className="text-[28px] leading-tight text-white lg:text-[34px]" style={{ fontFamily: 'var(--font-display)' }}>
                Un dossier documenté, une méthode claire, un interlocuteur identifié
              </h2>
              <p className="mt-6 max-w-[420px] text-[14px] leading-relaxed text-[#A9B4C4]">
                Les preuves factuelles de l'expertise du cabinet — profils, qualifications,
                expérience, chiffres ou cas clients — seront ajoutées après validation et
                justification.
              </p>
              <span className="mt-8 hidden xl:flex flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#D9A44E]">
                <IconSearchDoc className="h-7 w-7" />
              </span>
            </div>
            <ul className="flex flex-col gap-5">
              {WHY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-4 border-b border-white/10 pb-5 text-[16px] text-white last:border-none last:pb-0">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#D9A44E]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:px-14">
          <div className="grid grid-cols-1 gap-12 rounded-3xl bg-white p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel tone="teal">Questions fréquentes</SectionLabel>
              <h2 className="text-[28px] leading-tight text-[#14213D] lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
                Vos premières questions
              </h2>
              <Button href="/faq/" variant="ghost" className="mt-6">
              <span className="flex items-center gap-2">
    Voir toute la FAQ
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
              </Button>
            </div>
            <div>
              {FAQS.map((f, i) => (
                <Accordion key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl p-10 text-center md:p-16 bg-[#14213D]">
            <h2 className="mx-auto max-w-[620px] text-[28px] leading-tight text-white lg:text-[36px]" style={{ fontFamily: 'var(--font-display)' }}>
              Un sinistre ? Ne restez pas seul face à votre dossier.
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-white">
              Expliquez-nous votre situation. Nous vous indiquerons si et comment ELVARRA peut
              intervenir.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#14213D]">
            <span className="flex items-center gap-2 text-[#14213D]">
    Parler à un expert ELVARRA
    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
  </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}