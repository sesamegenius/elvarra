import { SectionLabel } from '@/components/PageUI';

export default function PolitiqueCookiesPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-8 pt-16 md:px-14 md:pb-10 md:pt-20">
          <div className="max-w-[640px]">
            <SectionLabel tone="amber">Préférences</SectionLabel>

            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[42px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cookies et traceurs
            </h1>

            <p className="mt-5 text-[16px] leading-relaxed text-[#4A5568]">
              Le site Elvarra est un site vitrine. Il n’utilise pas de cookies ou
              de traceurs à des fins publicitaires, de profilage ou de mesure
              d’audience.
            </p>
          </div>
        </section>

        {/* CONTENU */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="mx-auto max-w-[720px] text-[15px] leading-relaxed text-[#3A4657]">
              
              <h2
                className="text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Cookies utilisés
              </h2>

              <p className="mt-3">
                Le site n’utilise pas de cookies publicitaires, de cookies de
                suivi ou de cookies destinés à établir des statistiques de
                fréquentation.
              </p>

              <p className="mt-3">
                Certaines fonctionnalités techniques peuvent, le cas échéant,
                nécessiter l’utilisation de mécanismes techniques strictement
                nécessaires au fonctionnement du site. Ces mécanismes ne sont
                pas utilisés pour suivre votre navigation à des fins
                publicitaires ou commerciales.
              </p>

              <h2
                className="mt-10 text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Formulaire de contact
              </h2>

              <p className="mt-3">
                Le formulaire de contact permet de transmettre les informations
                que vous choisissez de renseigner afin qu’Elvarra puisse
                répondre à votre demande. Les données transmises par le
                formulaire ne sont pas utilisées pour déposer des cookies ou
                des traceurs publicitaires.
              </p>

              <h2
                className="mt-10 text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Gestion des cookies
              </h2>

              <p className="mt-3">
                Aucun cookie non nécessaire n’étant utilisé sur le site, aucun
                bandeau de consentement dédié aux cookies publicitaires ou de
                mesure d’audience n’est nécessaire.
              </p>

              <p className="mt-3">
                Vous pouvez également configurer votre navigateur afin de
                contrôler ou bloquer les cookies et autres traceurs. Le
                fonctionnement de certaines fonctionnalités du site pourrait
                toutefois être affecté.
              </p>

              <h2
                className="mt-10 text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Mise à jour
              </h2>

              <p className="mt-3">
                Dernière mise à jour : 17 septembre 2026. Cette politique peut
                être modifiée en cas d’évolution des fonctionnalités du site ou
                des technologies utilisées.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
