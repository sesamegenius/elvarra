import { ArrowRight } from 'lucide-react';
import { Button, SectionLabel, Accordion } from '@/components/PageUI';

type FAQItem = { q: string; a: string };
type FAQCategory = { title: string; tone: 'teal' | 'sky' | 'amber'; items: FAQItem[] };

const CATEGORIES: FAQCategory[] = [
  {
    title: 'Comprendre le rôle d’Elvarra',
    tone: 'teal',
    items: [
      {
        q: 'Qu’est-ce qu’un expert d’assuré ?',
        a: 'Un expert d’assuré est choisi par l’assuré pour l’accompagner après un sinistre. Sa mission peut comprendre l’analyse du dossier, la documentation des dommages, leur évaluation, la préparation des opérations d’expertise et la défense technique des intérêts de l’assuré.',
      },
      {
        q: 'Quelle différence avec l’expert mandaté par mon assurance ?',
        a: 'L’expert mandaté par l’assureur accomplit la mission confiée par la compagnie. L’expert d’assuré est choisi par l’assuré et intervient dans le cadre d’une lettre de mission distincte. Les deux experts peuvent échanger sur le même dossier, mais ils n’ont pas le même donneur d’ordre.',
      },
      {
        q: 'Elvarra remplace-t-il mon assureur, mon courtier ou mon avocat ?',
        a: 'Non. Chaque intervenant a son rôle. Elvarra agit comme expert d’assuré dans le périmètre de sa mission. Une question juridique ou contentieuse peut nécessiter l’intervention d’un avocat ; la gestion du contrat reste du ressort de l’assureur et, le cas échéant, du courtier ou de l’agent.',
      },
      {
        q: 'Elvarra réalise-t-il les travaux ?',
        a: 'Non, sauf activité distincte expressément annoncée, contractualisée et assurée. Le rôle présenté sur ce site concerne l’expertise et l’accompagnement du dossier. Les travaux sont réalisés par des entreprises choisies selon les modalités applicables.',
      },
    ],
  },
  {
    title: 'Le bon moment',
    tone: 'sky',
    items: [
      {
        q: 'Quand faut-il contacter un expert d’assuré ?',
        a: 'Le plus tôt possible lorsque les dommages sont importants, le dossier complexe ou une expertise imminente. Une intervention précoce facilite la conservation des preuves et la préparation. Un dossier déjà engagé peut aussi être examiné.',
      },
      {
        q: 'Puis-je contacter Elvarra après le passage de l’expert ?',
        a: 'Oui. Elvarra étudiera les pièces disponibles, les constats déjà réalisés, les positions exprimées et les délais à respecter afin de déterminer si une intervention reste pertinente.',
      },
      {
        q: 'Puis-je vous contacter après avoir reçu une proposition ?',
        a: 'Oui, de préférence avant de l’accepter ou de signer un document engageant. Nous ne pouvons toutefois pas garantir qu’une intervention tardive permettra de rouvrir toutes les questions.',
      },
      {
        q: 'Une expertise est programmée très prochainement : pouvez-vous intervenir ?',
        a: 'Contactez-nous immédiatement en indiquant la date. La possibilité d’intervention dépendra du délai, du lieu, de la complexité et des pièces disponibles.',
      },
    ],
  },
  {
    title: 'Démarches et preuves',
    tone: 'teal',
    items: [
      {
        q: 'Que dois-je faire immédiatement après un incendie ?',
        a: 'Protégez d’abord les personnes et suivez les consignes des secours. Déclarez ensuite le sinistre, documentez les dommages sans prendre de risque, conservez les justificatifs et évitez de faire disparaître des éléments utiles sauf nécessité de sécurité ou de salubrité.',
      },
      {
        q: 'Puis-je commencer les travaux avant l’expertise ?',
        a: 'Les mesures d’urgence nécessaires pour éviter une aggravation peuvent être indispensables. Les travaux définitifs risquent en revanche de modifier les preuves. Informez l’assureur, documentez l’état avant intervention et demandez conseil lorsque la situation est incertaine.',
      },
      {
        q: 'Puis-je jeter les biens endommagés ?',
        a: 'Il est généralement prudent de les conserver jusqu’à ce qu’ils aient pu être documentés ou examinés. Si leur évacuation est nécessaire pour des raisons de sécurité ou de salubrité, photographiez-les, listez-les et conservez les justificatifs de l’évacuation.',
      },
      {
        q: 'Quels documents dois-je préparer ?',
        a: 'Contrat et conditions applicables, déclaration, courriers, rapports, photographies, factures, preuves d’achat, inventaires, états des lieux, devis, justificatifs de frais et chronologie des échanges. Elvarra vous indiquera les pièces pertinentes pour votre situation.',
      },
      {
        q: 'Un devis d’entreprise suffit-il ?',
        a: 'Pas toujours. Un devis décrit des travaux proposés, tandis que le dossier peut comporter plusieurs catégories de dommages et de conséquences. Leur prise en compte dépend des garanties, des faits et des justificatifs.',
      },
    ],
  },
  {
    title: 'Indemnisation et désaccord',
    tone: 'sky',
    items: [
      {
        q: 'Pouvez-vous garantir une meilleure indemnisation ?',
        a: 'Non. Elvarra garantit une méthode et l’exécution de la mission convenue, pas un résultat financier. L’indemnisation dépend notamment du contrat, des dommages établis, des responsabilités, des justificatifs et des échanges entre les parties.',
      },
      {
        q: 'Que faire si je ne suis pas d’accord avec l’évaluation ?',
        a: 'Demandez les éléments ayant conduit à l’évaluation, identifiez précisément les postes contestés et rassemblez vos justificatifs. Elvarra peut analyser le dossier et vous indiquer les démarches techniques envisageables. Les voies applicables dépendent du contrat et de l’état du dossier.',
      },
      {
        q: 'Accepter une proposition m’engage-t-il ?',
        a: 'La portée d’une acceptation dépend du document et du contexte. Avant de signer ou d’accepter, lisez les réserves, conditions et conséquences. En cas de doute important, demandez un avis adapté, notamment juridique si nécessaire.',
      },
    ],
  },
  {
    title: 'Honoraires',
    tone: 'amber',
    items: [
      {
        q: 'Comment sont calculés les honoraires d’Elvarra ?',
        a: 'Ils sont définis en fonction de la nature, des enjeux et de la complexité de la mission, puis expliqués avant engagement. La lettre de mission précise les modalités applicables.',
      },
      {
        q: 'Qui paie les honoraires de l’expert d’assuré ?',
        a: 'En principe, le client qui mandate l’expert est redevable des honoraires selon la lettre de mission. Une prise en charge contractuelle peut parfois exister, mais elle doit être vérifiée dans chaque contrat.',
      },
      {
        q: 'Mon assurance peut-elle prendre les honoraires en charge ?',
        a: 'Certains contrats prévoient une garantie ou un remboursement partiel, avec des plafonds et conditions. Transmettez le contrat afin que cette possibilité soit examinée. Ne considérez jamais cette prise en charge comme automatique.',
      },
    ],
  },
  {
    title: 'Entreprises et gestion immobilière',
    tone: 'teal',
    items: [
      {
        q: 'Elvarra intervient-il auprès des entreprises ?',
        a: 'Oui, pour des sinistres touchant les locaux, équipements, stocks ou l’activité, selon le champ de compétence, le contrat et la mission convenue.',
      },
      {
        q: 'Qu’est-ce qu’Elvarra Gestion ?',
        a: 'Elvarra Gestion est un service destiné aux acteurs de la gestion immobilière. Il vise à structurer le suivi des sinistres des biens sous gestion, du signalement à la clôture documentée, selon un protocole défini avec le partenaire.',
      },
      {
        q: 'Elvarra Gestion empêche-t-il le locataire de percevoir une indemnité ?',
        a: 'Non. Le service ne modifie pas les droits résultant des contrats ou des règles applicables. Il améliore la circulation de l’information, la documentation et le suivi de la remise en état dans le périmètre convenu.',
      },
      {
        q: 'Proposez-vous une formule standard pour les cabinets de gestion ?',
        a: 'Le service est présenté sans tarif ni modèle économique public. Elvarra étudie l’organisation, le portefeuille et les besoins du cabinet avant de proposer un cadre de collaboration adapté.',
      },
    ],
  },
  {
    title: 'Zone et prise de contact',
    tone: 'sky',
    items: [
      {
        q: 'Où Elvarra intervient-il ?',
        a: 'Certaines analyses peuvent commencer à distance, mais une visite sur site peut être nécessaire selon le dossier.',
      },
      {
        q: 'Quelles informations transmettre lors du premier contact ?',
        a: 'Votre qualité, le type et la date du sinistre, l’adresse du bien, l’état d’avancement, la date d’une expertise éventuelle, les principaux dommages et vos coordonnées.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-10 pt-16 md:px-14 md:pb-12 md:pt-20">
          <div className="max-w-[680px] mx-auto md:mx-0">
            <SectionLabel tone="teal">Questions fréquentes</SectionLabel>
            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[44px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vos questions sur l’accompagnement après sinistre
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Les réponses ci-dessous sont générales. Un contrat et une situation doivent être
              examinés avant de conclure sur une garantie, une responsabilité ou une
              indemnisation.
            </p>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="px-6 pb-8 md:px-14">
          <div className="flex flex-col gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.title} className="rounded-3xl bg-white p-8 md:p-12 text-left">
                <SectionLabel tone={category.tone}>{category.title}</SectionLabel>
                <h2
                  className="mt-1 text-[22px] leading-tight text-[#14213D] lg:text-[24px]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {category.title}
                </h2>
                <div className="mt-4">
                  {category.items.map((item, i) => (
                    <Accordion key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 pt-8 md:px-14">
          <div className="rounded-3xl p-10 text-center md:p-16 bg-[#14213D]">
            <h2
              className="mx-auto max-w-[620px] text-[28px] leading-tight text-white lg:text-[36px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Une question ne trouve pas de réponse ici ?
            </h2>
            <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-relaxed text-white">
              Expliquez-nous votre situation. Nous vous indiquerons si et comment Elvarra peut
              intervenir.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#14213D]">
              <span className="flex items-center gap-2 text-[#14213D]">
                Parler à un expert Elvarra
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}