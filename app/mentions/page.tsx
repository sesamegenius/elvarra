import { SectionLabel } from '@/components/PageUI';


// Les segments entre crochets restent à vérifier ou compléter avant mise en ligne.
function ToComplete({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-[#FBF1DF] px-1.5 py-0.5 text-[#9A6A1F]">{children}</span>
  );
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">
        {/* HERO */}
        <section className="px-6 pb-8 pt-16 md:px-14 md:pb-10 md:pt-20">
          <div className="max-w-[640px]">
            <SectionLabel tone="teal">Informations légales</SectionLabel>
            <h1
              className="text-[32px] leading-[1.15] text-[#14213D] sm:text-[38px] lg:text-[42px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Mentions légales
            </h1>
          </div>
        </section>

        {/* CONTENU */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-white p-8 md:p-12">
            <div className="mx-auto max-w-[720px] text-[15px] leading-relaxed text-[#3A4657]">
              <p>
                Le site elvarra.fr est édité par Elvarra, société par actions simplifiée au
                capital de 1 000 euros, dont le siège social est situé 47 rue Marcel Dassault,
                92100 Boulogne-Billancourt, immatriculée au Registre du commerce et des sociétés
                de Nanterre sous le numéro 7112B - Ingénierie, études techniques
              </p>

              <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-[#E7EAE7] pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-[13px] text-[#7A8598]">SIREN</dt>
                  <dd className="mt-1">107 846 933</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#7A8598]">TVA intracommunautaire</dt>
                  <dd className="mt-1">FR27107846933</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#7A8598]">Téléphone</dt>
                  <dd className="mt-1">+33 (0)1 85 09 97 48</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-[#7A8598]">Email</dt>
                  <dd className="mt-1">hello@elvarra.fr</dd>
                </div>
              </dl>

              <h2
  className="mt-10 text-[19px] text-[#14213D]"
  style={{ fontFamily: 'var(--font-display)' }}
>
  Hébergement
</h2>
<p className="mt-3">
  Le site est hébergé par Vercel Inc., société de droit américain, dont le siège
  social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
  Site Internet : vercel.com.
</p>

              <h2
                className="mt-10 text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Propriété intellectuelle
              </h2>
              <p className="mt-3">
                Les contenus, textes, éléments graphiques, photographies, marques et composants
                du site sont protégés par les droits applicables. Sauf autorisation écrite
                préalable ou exception légale, leur reproduction, représentation, adaptation ou
                exploitation, totale ou partielle, est interdite.
              </p>

              <h2
                className="mt-10 text-[19px] text-[#14213D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Responsabilité
              </h2>
              <p className="mt-3">
                Les informations publiées ont un caractère général et pédagogique. Elles ne
                constituent pas une analyse personnalisée d’un contrat, un avis juridique ni une
                garantie d’indemnisation. Elvarra s’efforce d’assurer leur exactitude et leur mise
                à jour, sans pouvoir garantir qu’elles répondent à chaque situation particulière.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}