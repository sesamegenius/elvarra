import { Button, SectionLabel, Accordion } from "@/components/PageUI";
import {
  ArrowRight,
  Inbox,
  FolderOpen,
  FileSearch,
  Users,
  ShieldCheck,
  Hammer,
  CheckCircle2,
} from "lucide-react";

const BOUCLE = [
  "Signalement",
  "Qualification",
  "Documentation",
  "Suivi assurantiel",
  "Remise en état",
  "Contrôle documentaire",
  "Clôture",
];

const ETAPES_SERVICE = [
  {
    icon: Inbox,
    title: "Réception et qualification",
    text: "Centralisation des premières informations, identification des parties concernées, degré d'urgence et prochaines actions.",
  },
  {
    icon: FolderOpen,
    title: "Constitution du dossier",
    text: "Collecte des contrats, constats, photographies, états des lieux, devis, échanges et justificatifs utiles.",
  },
  {
    icon: FileSearch,
    title: "Documentation des dommages",
    text: "État descriptif, chronologie et conservation d'éléments permettant au gestionnaire et au bailleur de comprendre la situation.",
  },
  {
    icon: Users,
    title: "Suivi des intervenants",
    text: "Coordination et relances dans les limites du mandat confié, avec traçabilité des demandes et décisions.",
  },
  {
    icon: ShieldCheck,
    title: "Accompagnement assurantiel",
    text: "Analyse et défense des intérêts de la partie accompagnée lorsque cette mission relève du champ d'intervention d'ELVARRA et a été expressément confiée.",
  },
  {
    icon: Hammer,
    title: "Suivi de la remise en état",
    text: "Collecte des justificatifs, points d'avancement et vérification documentaire ou visuelle selon le dispositif convenu. Cette prestation ne vaut pas maîtrise d'œuvre, contrôle technique ni garantie de bonne exécution, sauf mission distincte expressément prévue.",
  },
  {
    icon: CheckCircle2,
    title: "Clôture documentée",
    text: "Synthèse du dossier, statut des actions, pièces disponibles et éléments restant éventuellement en suspens.",
  },
];

const AUDIENCES = [
  {
    title: "Pour le gestionnaire",
    points: [
      "Un point d'entrée identifié pour les sinistres",
      "Une méthode homogène à l'échelle du portefeuille",
      "Moins d'informations dispersées",
      "Une meilleure traçabilité des actions",
      "Un reporting exploitable",
      "Un service différenciant à présenter aux bailleurs",
    ],
  },
  {
    title: "Pour le bailleur",
    points: [
      "Une information plus rapide et plus lisible",
      "Un dossier documenté dès l'origine",
      "Un suivi qui ne s'arrête pas à la seule indemnisation",
      "Une meilleure visibilité sur l'état du bien",
      "La protection de ses intérêts dans le cadre de la mission convenue",
    ],
  },
  {
    title: "Pour le locataire de bonne foi",
    points: [
      "Un interlocuteur qui explique le processus",
      "Des demandes de pièces structurées",
      "Une meilleure coordination entre les parties",
      "Un suivi clair des prochaines étapes",
    ],
  },
];

const PROTOCOLE = [
  "Les situations transmises à ELVARRA",
  "Les critères d'urgence et d'escalade",
  "Les personnes autorisées à ouvrir ou valider un dossier",
  "Les documents à collecter",
  "Le rôle respectif du gestionnaire, du bailleur, du locataire et d'ELVARRA",
  "Les modalités de compte rendu",
  "Les limites de la mission et les règles relatives aux données",
];

const DEMARRAGE = [
  { title: "Échange de cadrage", text: "Nous découvrons votre portefeuille et votre processus actuel." },
  { title: "Cartographie", text: "Nous identifions les points de rupture, rôles et besoins de reporting." },
  { title: "Protocole", text: "Nous définissons un parcours d'intervention adapté." },
  { title: "Mise en œuvre", text: "Vos équipes disposent d'un circuit clair pour transmettre les sinistres." },
  { title: "Retour d'expérience", text: "Le dispositif est ajusté à partir des situations réellement rencontrées." },
];

const FAQS = [
  {
    q: "Le service remplace-t-il le gestionnaire ?",
    a: "Non. ELVARRA intervient comme partenaire spécialisé dans le périmètre convenu. Le gestionnaire conserve ses responsabilités, ses relations contractuelles et ses pouvoirs de décision.",
  },
  {
    q: "Pouvez-vous empêcher qu'une indemnité soit versée au locataire ?",
    a: "ELVARRA ne peut pas modifier unilatéralement les règles du contrat ou la qualité du bénéficiaire. Le service vise à organiser l'information et le suivi, et à protéger les intérêts de la partie accompagnée dans le cadre légal et contractuel applicable.",
  },
  {
    q: "Intervenez-vous sur tous les sinistres du portefeuille ?",
    a: "Le protocole peut prévoir des critères de transmission, de priorité ou d'escalade. Le périmètre est défini avec chaque partenaire.",
  },
  {
    q: "Pouvez-vous suivre les travaux ?",
    a: "ELVARRA peut suivre la remise en état sur un plan documentaire et organisationnel selon la mission. Une mission de maîtrise d'œuvre ou de contrôle technique, si elle est nécessaire et possible, doit être distinctement définie et confiée à un intervenant compétent et assuré.",
  },
  {
    q: "Comment nos équipes transmettent-elles un dossier ?",
    a: "Le circuit est défini lors du cadrage : formulaire dédié, email structuré, interface ou connexion avec les outils existants selon les solutions retenues.",
  },
  {
    q: "Le service est-il adapté à un réseau d'agences ?",
    a: "Oui, sous réserve de définir une gouvernance, des droits d'accès, un protocole commun et un reporting compatible avec l'organisation du réseau.",
  },
  {
    q: "Comment sont définies les modalités de collaboration ?",
    a: "Après l'étude du portefeuille et du périmètre attendu, ELVARRA propose un cadre d'intervention et une convention adaptés. Aucune modalité tarifaire n'est publiée sur le site.",
  },
];

export default function GestionImmobiliereePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="max-w-[720px] mx-auto md:mx-0">
            <SectionLabel tone="amber">ELVARRA Gestion</SectionLabel>
            <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
              Vos biens sont sous gestion. Leurs sinistres doivent l&apos;être aussi.
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-[#4A5568]">
              ELVARRA Gestion accompagne les administrateurs de biens, cabinets de gestion locative, bailleurs et responsables de patrimoine dans le suivi structuré des sinistres affectant leurs biens.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4A5568]">
              Du signalement à la clôture documentée, vous disposez d&apos;un interlocuteur identifié, d&apos;une méthode commune et d&apos;une vision claire de l&apos;avancement de chaque dossier.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href="/contact/" variant="primary">
                <span className="flex items-center gap-2">
                  Échanger sur votre portefeuille
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button href="#parcours" variant="secondary">
                <span className="flex items-center gap-2">
                  Découvrir le parcours d&apos;un sinistre
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 pb-14 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <h2 className="max-w-[640px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
              Un dossier indemnisé n&apos;est pas toujours un bien remis en état
            </h2>
            <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-[#4A5568]">
              Dans un portefeuille immobilier, le risque ne s&apos;arrête pas à la déclaration du sinistre. L&apos;information peut être dispersée, les responsabilités mal comprises, les justificatifs incomplets et la remise en état insuffisamment suivie. Le gestionnaire peut alors découvrir tardivement qu&apos;un dossier considéré comme terminé n&apos;a pas abouti à une situation correctement documentée.
            </p>
            <p className="mt-4 max-w-[680px] text-[16px] leading-relaxed text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
              ELVARRA Gestion vise à refermer cette boucle.
            </p>
          </div>
        </section>

        {/* BOUCLE FERMEE */}
        {/* BOUCLE FERMEE */}
<section id="parcours" className="px-6 pb-16 md:px-14">
  <SectionLabel tone="amber">Le parcours d&apos;un sinistre</SectionLabel>

  <h2
    className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]"
    style={{ fontFamily: "var(--font-display)" }}
  >
    La boucle fermée du sinistre
  </h2>

  {/* VERSION MOBILE */}
  <div className="mt-10 flex flex-col md:hidden">
    {BOUCLE.map((step, i) => (
      <div key={step} className="flex items-stretch">
        <div className="flex w-8 flex-col items-center">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E9D3A0] bg-white text-[12px] font-medium text-[#8A6A26]">
            {String(i + 1).padStart(2, "0")}
          </span>

          {i < BOUCLE.length - 1 && (
            <span className="my-1 h-full min-h-6 w-px bg-[#E9D3A0]" />
          )}
        </div>

        <div className="pb-5 pl-4">
          <div className="rounded-xl border border-[#E9D3A0] bg-white px-4 py-2.5 text-[14px] text-[#8A6A26]">
            {step}
          </div>
        </div>
      </div>
    ))}

    <div className="mt-1 flex items-center gap-3 pl-1">
      <span className="h-px w-7 bg-[#D9A44E]" />
      <span className="text-[12px] text-[#B08A45]">
        Retour au début du parcours
      </span>
    </div>
  </div>

  {/* VERSION CERCLE */}
  <div className="relative mx-auto mt-12 hidden h-[560px] w-full max-w-[760px] md:block">
    {/* Cercle principal */}
    <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E9D3A0] bg-white/40" />

    {/* Cercle intérieur */}
    <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#14213D] text-center shadow-[0_15px_45px_rgba(20,33,61,0.12)]">
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#BFE0D6]">
        ELVARRA
      </span>

      <span
        className="mt-2 max-w-[130px] text-[21px] leading-tight text-white"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Boucle fermée
      </span>

      <span className="mt-2 text-[12px] text-[#D7DFEA]">
        du sinistre
      </span>
    </div>

    {/* Éléments autour du cercle */}
    {BOUCLE.map((step, i) => {
      const angle = (360 / BOUCLE.length) * i - 90;
      const radius = 245;

      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;

      return (
        <div
          key={step}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
          }}
        >
          <div className="flex min-w-[130px] max-w-[155px] flex-col items-center">
            <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FEF1D0] text-[10px] text-[#8A6A26]">
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className="rounded-2xl border border-[#E9D3A0] bg-white px-4 py-2.5 text-center text-[13px] leading-snug text-[#8A6A26] shadow-[0_6px_20px_rgba(20,33,61,0.04)]">
              {step}
            </span>
          </div>
        </div>
      );
    })}

    {/* Flèches circulaires */}
    <div className="pointer-events-none absolute inset-0">
      {BOUCLE.map((_, i) => {
        const angle = (360 / BOUCLE.length) * i - 90;
        const radius = 205;

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={`arrow-${i}`}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle + 90}deg)`,
            }}
          >
            <ArrowRight className="h-5 w-5 text-[#D9A44E]" />
          </div>
        );
      })}
    </div>
  </div>

  <p className="mt-6 max-w-[640px] text-[14px] leading-relaxed text-[#4A5568]">
    Le périmètre exact est défini avec le partenaire en fonction de son
    organisation, de ses mandats et des situations couvertes.
  </p>
</section>

        {/* CE QUE LE SERVICE COMPREND */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Ce que le service peut comprendre</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            7 étapes, du signalement à la clôture
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {ETAPES_SERVICE.map((e, i) => (
    <div
      key={e.title}
      className={`rounded-2xl bg-white p-6 ${
        i === ETAPES_SERVICE.length - 1
          ? "lg:col-span-3 sm:col-span-2 lg:flex lg:flex-col lg:items-center lg:text-center"
          : ""
      }`}
    >
      <div className="flex items-center justify-center sm:justify-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEF1D0] text-[#8A6A26]">
          <e.icon className="h-5 w-5" />
        </span>

        <span
          className="text-[13px] text-[#D9A44E]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <p
        className="mt-4 text-[16px] text-[#14213D]"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {e.title}
      </p>

      <p
        className={`mt-2 text-[14px] leading-relaxed text-[#4A5568] ${
          i === ETAPES_SERVICE.length - 1
            ? "lg:max-w-[650px]"
            : ""
        }`}
      >
        {e.text}
      </p>
    </div>
  ))}
</div>
        </section>

        {/* AUDIENCES */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="teal">Un intérêt partagé</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Ce que la boucle fermée apporte à chacun
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {AUDIENCES.map((aud) => (
              <div key={aud.title} className="rounded-2xl bg-white p-7">
                <p className="text-[17px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                  {aud.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {aud.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-left text-[14px] leading-relaxed text-[#4A5568]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9A44E]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-[680px] text-[14px] leading-relaxed text-[#4A5568]">
            ELVARRA Gestion n&apos;est pas présenté comme un dispositif de surveillance du locataire. Il s&apos;agit d&apos;un processus de gestion transparent qui protège le bien et facilite le traitement du sinistre pour toutes les parties de bonne foi.
          </p>
        </section>

        {/* ADAPTE A VOTRE ORGANISATION */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionLabel tone="amber">Cadrage</SectionLabel>
                <h2 className="text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
                  Un service adapté à votre organisation
                </h2>
                <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-[#4A5568]">
                  Chaque portefeuille a ses propres mandats, outils, équipes et règles de validation. ELVARRA commence par étudier votre fonctionnement : volume de lots, typologie des actifs, circuit actuel de déclaration, rôles internes, prestataires, outils et reporting attendu.
                </p>
                <p className="mt-4 max-w-[480px] text-[14px] leading-relaxed text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                  Un protocole d&apos;intervention peut ensuite préciser :
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {PROTOCOLE.map((p, i) => (
                  <li
                    key={p}
                    className={`text-left text-[15px] ${
                      i % 2 === 1 ? "rounded-lg bg-[#14213D] p-3 text-white" : "px-3 text-[#3A4657]"
                    }`}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* NE PROMET PAS */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-3xl bg-[#FEF1D0] p-8 md:p-12">
            <h2 className="max-w-[600px] text-[24px] leading-tight text-[#14213D] lg:text-[28px]" style={{ fontFamily: "var(--font-display)" }}>
              Ce qu&apos;ELVARRA Gestion ne promet pas
            </h2>
            <p className="mt-5 max-w-[680px] text-[16px] leading-relaxed text-[#4A5568]">
              ELVARRA ne peut pas décider unilatéralement du bénéficiaire d&apos;une indemnité, modifier les obligations d&apos;un contrat d&apos;assurance ou garantir la réalisation de travaux par un tiers. L&apos;intervention repose sur les mandats, contrats, droits et responsabilités applicables à chaque situation.
            </p>
            <p className="mt-4 max-w-[680px] text-[15px] leading-relaxed text-[#8A6A26]" style={{ fontFamily: "var(--font-display)" }}>
              La valeur du service tient à la maîtrise de l&apos;information, à la méthode et à la continuité du suivi.
            </p>
          </div>
        </section>

        {/* COMMENT DEMARRER */}
        <section className="px-6 pb-16 md:px-14">
          <SectionLabel tone="sky">Mise en route</SectionLabel>
          <h2 className="max-w-[600px] text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
            Comment démarrer ?
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 rounded-3xl bg-white p-8 sm:grid-cols-2 md:p-12 lg:grid-cols-3">
            {DEMARRAGE.map((step, i) => (
              <div key={step.title} className="flex flex-col xl:flex-row gap-4">
                <span className="text-[22px] text-[#E9D3A0] shrink-0" style={{ fontFamily: "var(--font-display)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[17px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                    {step.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:px-14">
          <div className="grid grid-cols-1 gap-12 rounded-3xl bg-white p-8 md:p-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel tone="amber">Questions fréquentes</SectionLabel>
              <h2 className="text-[26px] leading-tight text-[#14213D] lg:text-[30px]" style={{ fontFamily: "var(--font-display)" }}>
                FAQ ELVARRA Gestion
              </h2>
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
          <div className="rounded-3xl bg-[#14213D] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[600px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Et si chaque sinistre de votre portefeuille suivait enfin un processus clair ?
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15px] leading-relaxed text-white/80">
              Présentez-nous votre organisation actuelle et les difficultés que vous rencontrez. Nous construirons avec vous un cadre de discussion adapté à votre portefeuille.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-[#D9A44E] text-[#14213D]">
              <span className="flex items-center gap-2 text-[#14213D]">
                Demander un échange ELVARRA Gestion
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}