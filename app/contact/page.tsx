import ContactForm from "@/components/ContactForm";
import { Button, SectionLabel } from "@/components/PageUI";
import { ArrowRight, Phone, Mail, MapPin, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "Contacter un expert d'assuré | ELVARRA",
  description: "Présentez votre sinistre à ELVARRA. Téléphone, email ou formulaire de rappel.",
};

export default function ContactPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-12 pt-16 md:px-14 md:pt-20">
          <div className="max-w-[680px] mx-auto md:mx-0">
            <SectionLabel tone="teal">Contact</SectionLabel>
            <h1 className="text-[36px] leading-[1.12] text-[#14213D] sm:text-[44px] lg:text-[50px]" style={{ fontFamily: "var(--font-display)" }}>
              Parlez-nous de votre situation
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-[#4A5568]">
              Indiquez-nous où en est votre dossier et les prochaines échéances. Nous vous recontacterons pour vérifier si ELVARRA peut vous accompagner.
            </p>
          </div>
        </section>

        {/* FORMULAIRE + COORDONNEES */}
        <section className="px-6 pb-20 md:px-14">
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 items-start">

            <ContactForm showCard title="" description="" />

            <div className="flex flex-col gap-6">

              <div className="rounded-3xl bg-white p-8 shadow-2xl">
                <h3 className="text-[20px] text-[#14213D] mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Nos coordonnées
                </h3>

                <div className="space-y-5">

                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#3D6BAD]">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <p className="text-[15px] font-medium text-[#14213D]">Téléphone</p>
                      <a href="tel:+33185099748" className="text-[15px] text-[#4A5568] hover:text-[#3D6BAD]">
                        +33 (0)1 85 09 97 48
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#3D6BAD]">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <p className="text-[15px] font-medium text-[#14213D]">Email</p>
                      <a href="mailto:hello@elvarra.fr" className="text-[15px] text-[#4A5568] hover:text-[#3D6BAD]">
                        hello@elvarra.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#3D6BAD]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div className="text-left">
                      <p className="text-[15px] font-medium text-[#14213D]">Adresse</p>
                      <p className="text-[15px] text-[#4A5568]">
                        47 rue Marcel Dassault<br />
                        92100 Boulogne-Billancourt
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded-3xl border border-[#E3B7A6] bg-[#FBEAE4] p-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#B4552F]" />
                  <p className="text-left text-[14px] leading-relaxed text-[#7A2E1E]">
                    En présence d&apos;un danger pour les personnes ou les biens, contactez d&apos;abord les services d&apos;urgence ou le professionnel compétent. Le formulaire ELVARRA n&apos;est pas un service de secours.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECONDAIRE */}
        <section className="px-6 pb-20 md:px-14">
          <div className="rounded-3xl bg-[#14213D] p-10 text-center md:p-16">
            <h2 className="mx-auto max-w-[560px] text-[26px] leading-tight text-white lg:text-[32px]" style={{ fontFamily: "var(--font-display)" }}>
              Besoin d&apos;échanger directement plutôt que d&apos;écrire ?
            </h2>
            <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/80">
              Appelez-nous, un membre de l&apos;équipe ELVARRA vous répondra directement.
            </p>
            <Button href="tel:+33185099748" variant="primary" className="mt-8 bg-white text-[#14213D]">
              <span className="flex items-center gap-2 text-[#14213D]">
                +33 (0)1 85 09 97 48
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </section>

      </div>
    </main>
  );
}