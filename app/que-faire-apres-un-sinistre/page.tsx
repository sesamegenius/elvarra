import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button, SectionLabel } from '@/components/PageUI';

const REFLEXES = [
  { title: 'Protéger les personnes', text: "En présence d'un danger, contactez les secours et suivez leurs consignes. Ne prenez aucun risque pour photographier, déplacer des biens ou accéder aux lieux." },
  { title: "Limiter l'aggravation", text: "Lorsque cela peut être fait sans danger, prenez les mesures conservatoires raisonnables et documentez la situation avant et après l'intervention." },
  { title: 'Déclarer le sinistre', text: "Prévenez l'assureur dans les conditions et délais applicables. Conservez une preuve de la déclaration et notez le numéro de dossier." },
  { title: 'Photographier et filmer', text: 'Réalisez des vues générales puis détaillées. Continuez à documenter l’évolution lorsque les dommages apparaissent progressivement.' },
  { title: 'Conserver les preuves', text: "Rassemblez factures, relevés, photographies antérieures, contrats, inventaires et devis. Ne jetez rien tant que c'est utile, sauf impératif de sécurité." },
  { title: 'Distinguer urgence et travaux définitifs', text: "Les mesures conservatoires ne sont pas les travaux définitifs. Vérifiez que les dommages ont pu être constatés avant toute réparation irréversible." },
  { title: 'Tenir une chronologie', text: 'Notez les dates, appels, visites, décisions, dépenses et documents envoyés.' },
  { title: 'Ne pas limiter le dossier à un devis', text: "Le dossier d'indemnisation peut nécessiter une analyse plus large que les travaux proposés par une entreprise." },
  { title: "Préparer l'expertise", text: 'Classez les documents, établissez une liste des dommages et préparez vos questions.' },
  { title: 'Demander conseil suffisamment tôt', text: "Plus les preuves sont conservées et les étapes préparées, plus le dossier est lisible." },
];

export default function QueFaireApresUnSinistrePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.5fr] gap-10 items-center">
            <div>
              <SectionLabel tone="amber">Premiers réflexes</SectionLabel>
              <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: 'var(--font-display)' }}>
                Vous venez de subir un sinistre : les premiers réflexes
              </h1>
              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-[#4A5568]">
                Cette page fournit des repères généraux. Les mesures à prendre dépendent du danger, du type de sinistre, du contrat et des instructions des autorités ou professionnels compétents.
              </p>
              <Button href="/contact/" variant="primary" className="mt-8">
                <span className="flex items-center gap-2">
                  J&apos;ai subi un sinistre — parler à ELVARRA
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-40 w-40 items-center justify-center rounded-[2rem] bg-[#D9A44E]/10 text-[#D9A44E]">
                <AlertTriangle className="h-16 w-16" />
              </div>
            </div>
          </div>
        </section>

        {/* 10 REFLEXES */}
        <section className="px-6 pb-16 md:px-14">
          <div className="flex flex-col gap-3 rounded-3xl bg-white p-8 md:p-12">
            {REFLEXES.map((r, i) => (
              <div key={r.title} className="flex items-start gap-4 border-b border-[#F1F1EC] pb-4 text-left last:border-none last:pb-0">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] text-white"
                  style={{ backgroundColor: '#14213D', fontFamily: 'var(--font-display)' }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                    {r.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#4A5568]">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CHECKLIST */}
        <section className="px-6 pb-16 md:px-14">
          <div className="rounded-2xl border border-dashed border-[#DCE1DD] bg-white p-6 md:p-8 text-left">
            <p className="text-[15px] font-medium text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
              Checklist : les 10 réflexes après un sinistre
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#4A5568]">
              Version PDF téléchargeable à venir. Un formulaire dédié précisera un consentement distinct pour toute prospection, et ne collectera que les données nécessaires.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: 'var(--font-display)' }}>
              J&apos;ai subi un sinistre
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/80">
              Parlez-nous de votre situation, nous vous indiquerons les prochaines étapes.
            </p>
            <Button href="/contact/" variant="primary" className="mt-8 bg-white text-[#14213D]">
              <span className="flex items-center gap-2 text-[#14213D]">
                Parler à ELVARRA
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}