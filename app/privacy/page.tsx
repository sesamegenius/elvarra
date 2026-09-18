import { SectionLabel } from '@/components/PageUI';

function ToComplete({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[#FBF1DF] px-1.5 py-0.5 text-[#9A6A1F]">{children}</span>
  );
}

const FINALITES = [
  'répondre aux demandes et prendre des mesures précontractuelles',
  'gérer la relation et exécuter une mission ou une convention',
  'assurer la sécurité du site et prévenir les abus sur la base de l’intérêt légitime',
  'respecter les obligations légales',
  'adresser des communications commerciales lorsque la réglementation le permet ou avec le consentement requis',
  'mesurer l’audience et les conversions selon les choix de consentement applicables',
];

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-8 pt-16 md:px-14 md:pb-10 md:pt-20">
          <div className="max-w-[640px]">
            <SectionLabel tone="sky">Vos données</SectionLabel>
            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[42px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Politique de confidentialité
            </h1>
            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Elvarra accorde une attention particulière à la protection des données
              personnelles. Cette page explique quelles données sont traitées lorsque vous
              utilisez le site, pourquoi elles le sont, pendant combien de temps et quels sont vos
              droits.
            </p>
          </div>
        </section>

        {/* NOTE INTERNE */}
        <section className="px-6 pb-6 md:px-14">
          <div className="rounded-2xl border border-[#F0DFB8] bg-[#FBF6EA] p-5 text-[13px] leading-relaxed text-[#8A6A2E]">
            Modèle à compléter et à faire valider avant publication : les durées de conservation
            et les éventuels transferts hors UE doivent être repris du registre des traitements.
          </div>
        </section>

        {/* CONTENU */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="mx-auto max-w-[720px] text-[15px] leading-relaxed text-[#3A4657]">
              <h2 className="text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Responsable du traitement
              </h2>
              <p className="mt-3">
                Elvarra, 47 rue Marcel Dassault, 92100 Boulogne-Billancourt —
                hello@elvarra.fr.
              </p>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Données collectées
              </h2>
              <p className="mt-3">
                Selon votre utilisation du site : identité, coordonnées, qualité de particulier ou
                professionnel, informations relatives au bien et au sinistre, contenu de la
                demande, pièces volontairement transmises, données techniques de connexion et
                préférences de consentement.
              </p>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Finalités et bases juridiques
              </h2>
              <ul className="mt-3 flex flex-col gap-2">
                {FINALITES.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5B90D6]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Destinataires
              </h2>
              <p className="mt-3">
                Les données sont accessibles aux personnes habilitées d’Elvarra et à ses
                prestataires agissant selon ses instructions : hébergement, maintenance,
                messagerie, CRM, mesure d’audience ou sécurité. Elles peuvent être transmises à
                d’autres destinataires lorsque la loi l’impose ou lorsque la mission et
                l’autorisation de la personne concernée le permettent.
              </p>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Durées de conservation
              </h2>
              <p className="mt-3">
                Les durées exactes sont fixées dans le registre des traitements. Les demandes sans
                suite, dossiers clients, pièces comptables, données de prospection et journaux
                techniques ont des durées distinctes adaptées à leur finalité et aux obligations
                applicables.
              </p>

              <h2
  className="mt-10 text-[19px] text-[#14213D]"
  style={{ fontFamily: 'var(--font-display)' }}
>
  Transferts hors Espace économique européen
</h2>
<p className="mt-3">
  Dans le cadre de l’hébergement et du fonctionnement du site, certaines données
  peuvent être transférées ou accessibles depuis des pays situés en dehors de
  l’Espace économique européen. Le site est notamment hébergé par Vercel Inc.,
  dont certaines opérations de traitement peuvent être réalisées aux États-Unis.
  Ces transferts sont encadrés par les garanties prévues par le RGPD, notamment
  les clauses contractuelles types adoptées par la Commission européenne.
</p>


              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Vos droits
              </h2>
              <p className="mt-3">
                Vous pouvez, selon les conditions applicables, demander l’accès, la rectification,
                l’effacement, la limitation ou la portabilité de vos données, vous opposer à
                certains traitements et retirer votre consentement à tout moment. Vous pouvez
                exercer vos droits à hello@elvarra.fr, en précisant votre demande et les éléments
                permettant de vous identifier. Vous pouvez également introduire une réclamation
                auprès de l’autorité de contrôle compétente.
              </p>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Cookies
              </h2>
              <p className="mt-3">
                Consultez la{' '}
                <a href="/cookies/" className="text-[#5B90D6] underline">
                  politique relative aux cookies
                </a>{' '}
                et utilisez le module de gestion des préférences pour modifier vos choix.
              </p>

              <h2 className="mt-10 text-[19px] text-[#14213D]" style={{ fontFamily: 'var(--font-display)' }}>
                Mise à jour
              </h2>
              <p className="mt-3">
                Dernière mise à jour : 16/09/2026. Cette politique peut être
                modifiée pour tenir compte des évolutions du site et des traitements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}