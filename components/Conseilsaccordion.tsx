'use client';

import { useId, useState } from 'react';
import type { ComponentType } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  IconFlame,
  IconDroplet,
  IconOther,
  IconBriefcase,
  IconBuilding,
  IconSearchDoc,
} from '@/components/icons';

type Article = {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  bar: string;
  intro: string;
  points: string[];
};

const ARTICLES: Article[] = [
  {
    id: '24-heures-apres-un-incendie',
    title: 'Que faire dans les 24 heures suivant un incendie ?',
    icon: IconFlame,
    bar: '#C65D3B',
    intro:
      'Les premières heures servent à protéger les personnes, limiter l’aggravation des dégâts et conserver des preuves.',
    points: [
      'Ne retournez pas dans les lieux tant que les pompiers ou les autorités ne l’ont pas autorisé, même pour récupérer des affaires.',
      'Prévenez votre assureur. Le délai de déclaration est généralement de 5 jours ouvrés, mais vérifiez-le dans votre contrat.',
      'Une fois l’accès autorisé, photographiez et filmez les dégâts pièce par pièce avant tout déblayage, sans rien jeter.',
      'Prenez les mesures d’urgence raisonnables (couper l’électricité et le gaz, protéger les ouvertures) et gardez les factures.',
      'Demandez une copie du rapport d’intervention des pompiers : il pourra servir lors de l’expertise.',
    ],
  },
  {
    id: 'preparer-une-expertise-degat-des-eaux',
    title: 'Comment préparer une expertise après un dégât des eaux ?',
    icon: IconDroplet,
    bar: '#5B90D6',
    intro:
      'Une bonne préparation permet de présenter l’ensemble des dommages, y compris ceux qui ne se voient pas au premier regard.',
    points: [
      'Coupez l’arrivée d’eau si c’est possible et limitez l’aggravation des dégâts, sans démonter ni jeter ce qui est abîmé.',
      'Photographiez et filmez les dégâts avant tout séchage ou réparation, en notant la date.',
      'Si un voisin ou un tiers est concerné, remplissez ensemble un constat amiable dégât des eaux et transmettez-le à votre assureur.',
      'Dressez la liste des dommages pièce par pièce : murs, sols, plafonds, mobilier, mais aussi traces d’humidité ou odeurs.',
      'Rassemblez votre contrat, vos factures et vos devis, et soyez présent le jour de l’expertise.',
    ],
  },
  {
    id: 'expert-assure-et-expert-mandate-differences',
    title: 'Expert d’assuré et expert mandaté par l’assurance : quelles différences ?',
    icon: IconSearchDoc,
    bar: '#1F6F63',
    intro: 'Les deux interviennent sur le même dossier, mais pas pour le compte de la même personne.',
    points: [
      'L’expert mandaté par l’assurance est choisi et rémunéré par l’assureur. Il évalue les dommages et vérifie l’application des garanties du contrat.',
      'L’expert d’assuré est choisi par vous. Il analyse le sinistre de votre point de vue, chiffre les dommages et défend votre dossier.',
      'Lorsque les deux experts se rencontrent, on parle d’expertise contradictoire : leurs évaluations sont discutées point par point.',
      'Certains contrats prévoient une clause de tierce expertise en cas de désaccord, ou une prise en charge des honoraires. Vérifiez votre contrat.',
    ],
  },
  {
    id: 'documents-a-conserver-apres-un-sinistre',
    title: 'Quels documents conserver après un sinistre ?',
    icon: IconSearchDoc,
    bar: '#1F6F63',
    intro:
      'Un dossier complet facilite l’expertise et protège vos droits, y compris plusieurs mois après le sinistre.',
    points: [
      'Votre contrat d’assurance, avec les conditions particulières et générales.',
      'La déclaration de sinistre, son accusé de réception et tous les échanges avec l’assureur et l’expert (courriers, e-mails, comptes rendus).',
      'Les photos et vidéos des dégâts, avec leur date.',
      'Les factures d’achat, garanties et preuves de propriété des biens endommagés.',
      'Les rapports et constats : pompiers, police, constat amiable.',
      'Les factures des frais liés au sinistre : mesures d’urgence, hébergement, réparations.',
      'Pour les courriers importants, privilégiez la lettre recommandée et gardez-en une copie.',
    ],
  },
  {
    id: 'pourquoi-un-devis-ne-suffit-pas-toujours',
    title: 'Pourquoi un devis ne suffit-il pas toujours à évaluer un sinistre ?',
    icon: IconOther,
    bar: '#5B6B82',
    intro:
      'Un devis indique ce qu’une entreprise facturerait pour des travaux. Il ne dit ni pourquoi le dommage est survenu, ni ce que le contrat prend en charge.',
    points: [
      'Il peut ignorer des dommages cachés : humidité dans les cloisons, installation électrique, structure.',
      'L’indemnisation dépend des garanties du contrat : franchise, plafonds, vétusté, valeur à neuf ou valeur d’usage.',
      'Certains préjudices ne figurent jamais sur un devis de travaux : frais de relogement, perte de loyers, perte d’exploitation.',
      'L’expertise établit les causes, l’étendue des dommages et leur chiffrage. Elle sert de base commune à la discussion avec l’assureur.',
    ],
  },
  {
    id: 'peut-on-faire-des-travaux-avant-l-expertise',
    title: 'Peut-on faire des travaux avant l’expertise ?',
    icon: IconOther,
    bar: '#5B6B82',
    intro:
      'En règle générale, mieux vaut attendre l’expertise pour les réparations définitives : une fois les dégâts effacés, ils sont difficiles à prouver.',
    points: [
      'Les mesures d’urgence sont en revanche autorisées, et même attendues : bâcher, pomper l’eau, couper les fluides, sécuriser les lieux.',
      'Photographiez avant d’intervenir, gardez les éléments remplacés et conservez toutes les factures.',
      'Avant des travaux plus importants, demandez l’accord écrit de l’assureur ou de l’expert.',
      'Si l’expertise tarde trop, relancez votre assureur par écrit et demandez l’autorisation de commencer les travaux.',
    ],
  },
  {
    id: 'constituer-un-inventaire-des-biens-endommages',
    title: 'Comment constituer un inventaire des biens endommagés ?',
    icon: IconSearchDoc,
    bar: '#1F6F63',
    intro:
      'Un inventaire précis évite d’oublier des biens et donne à l’expert de quoi évaluer chaque poste.',
    points: [
      'Procédez pièce par pièce et décrivez chaque bien : désignation, marque et modèle, date d’achat approximative, prix, état.',
      'Joignez tout justificatif : facture, relevé bancaire, garantie, numéro de série.',
      'À défaut de facture, des photos où le bien apparaît (photos de famille, annonces) peuvent aider à prouver son existence.',
      'Photographiez les biens endommagés et ne les jetez pas avant l’accord de l’assureur ou de l’expert.',
      'Indiquez pour chacun s’il est détruit ou réparable. Un simple tableur suffit.',
    ],
  },
  {
    id: 'proposition-d-indemnisation-incomplete',
    title: 'Que faire lorsqu’une proposition d’indemnisation semble incomplète ?',
    icon: IconOther,
    bar: '#5B6B82',
    intro:
      'Une première proposition n’est pas toujours définitive. Avant de l’accepter, vérifiez ce qu’elle contient réellement.',
    points: [
      'Demandez par écrit le détail du calcul : postes retenus, vétusté appliquée, franchise, plafonds.',
      'Comparez avec le rapport d’expertise, vos devis, votre inventaire et votre contrat.',
      'Lisez attentivement avant de signer un accord ou une quittance : elle peut valoir acceptation de l’indemnité proposée.',
      'Contestez par lettre recommandée, en argumentant poste par poste avec vos justificatifs.',
      'Vous pouvez vous faire assister par un expert d’assuré, saisir le service réclamations de l’assureur, puis le Médiateur de l’assurance.',
      'Surveillez les délais : les actions contre un assureur se prescrivent en général par deux ans, à vérifier selon votre situation.',
    ],
  },
  {
    id: 'documenter-un-sinistre-professionnel',
    title: 'Comment documenter un sinistre professionnel ?',
    icon: IconBriefcase,
    bar: '#3D6BAD',
    intro:
      'Pour une entreprise, le sinistre touche à la fois les locaux, le matériel, les stocks et l’activité. Chaque volet doit être documenté.',
    points: [
      'Photographiez et filmez les locaux, machines et stocks avant toute remise en état.',
      'Appuyez-vous sur les états de stock, factures fournisseurs et bons de livraison pour justifier les marchandises perdues.',
      'Notez les dates d’arrêt total ou partiel de l’activité et leurs conséquences : commandes perdues, salaires maintenus.',
      'Rassemblez bilans, chiffres d’affaires antérieurs et marges pour chiffrer une éventuelle perte d’exploitation.',
      'Gardez toutes les dépenses causées par le sinistre : location de matériel, locaux provisoires, heures supplémentaires.',
      'Tenez un journal daté de vos échanges avec l’assureur et l’expert.',
    ],
  },
  {
    id: 'gestion-locative-suivre-un-sinistre',
    title: 'Gestion locative : pourquoi suivre un sinistre jusqu’à la remise en état ?',
    icon: IconBuilding,
    bar: '#3D6BAD',
    intro:
      'L’indemnisation n’est qu’une étape. Le sinistre n’est réellement clos que lorsque le bien est remis en état et de nouveau habitable ou louable.',
    points: [
      'Le suivi permet de vérifier que les travaux réalisés correspondent à ce qui a été évalué et indemnisé.',
      'Selon les cas, plusieurs assureurs interviennent (propriétaire, locataire, copropriété) : il faut coordonner les échanges et les recours.',
      'Suivre les délais limite la durée de vacance du logement et la perte de loyers, selon vos garanties.',
      'Des réparations mal faites peuvent provoquer un nouveau sinistre. Une réception documentée (photos, procès-verbal) protège le propriétaire.',
    ],
  },
];

function ArticleCard({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const buttonId = `${uid}-button`;
  const panelId = `${uid}-panel`;
  const Icon = article.icon;

  return (
    <div className="rounded-2xl bg-white text-left transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)]">
      <h2>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full flex-col rounded-2xl p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B90D6]"
        >
          <span className="h-1 w-10 rounded-full" style={{ backgroundColor: article.bar }} />
          <Icon className="mt-5 h-6 w-6 text-[#14213D]" />
          <span className="mt-4 flex items-start justify-between gap-3">
            <span
              className="text-[16px] font-normal leading-snug text-[#14213D]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {article.title}
            </span>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF0F8] text-[#5B90D6]">
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </span>
          </span>
        </button>
      </h2>

      {/* Le panneau se déplie en animant la hauteur de 0fr à 1fr */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-6 border-t border-[#E5E9ED] pb-6 pt-4 text-[15px] leading-relaxed text-[#4A5568]">
            <p>{article.intro}</p>
            <ul className="mt-3 space-y-2.5">
              {article.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: article.bar }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConseilsAccordion() {
  return (
    // items-start : une card dépliée n'étire pas sa voisine de la même ligne
    <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
      {ARTICLES.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}