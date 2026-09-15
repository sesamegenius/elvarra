import { SectionLabel } from "@/components/PageUI";
import { IconFlame, IconDroplet, IconStorm, IconOther } from "@/components/icons";
import { ArrowRight } from "lucide-react";

const SITUATIONS = [
  {
    icon: IconFlame,
    title: "Incendie",
    text: "Sécuriser, préserver les preuves, inventorier et évaluer des dommages souvent multiples.",
    cta: "Après un incendie",
    href: "/sinistres/incendie/",
    bar: "#C65D3B",
  },
  {
    icon: IconDroplet,
    title: "Dégât des eaux",
    text: "Rechercher l'origine, limiter l'aggravation et documenter les conséquences visibles ou différées.",
    cta: "Après un dégât des eaux",
    href: "/sinistres/degat-des-eaux/",
    bar: "#5B90D6",
  },
  {
    icon: IconStorm,
    title: "Événement climatique",
    text: "Prendre des mesures conservatoires et réunir les éléments utiles sur l'événement et les dommages.",
    cta: "Après un événement climatique",
    href: "/sinistres/evenements-climatiques/",
    bar: "#5B6B82",
  },
  {
    icon: IconOther,
    title: "Autre sinistre",
    text: "Chaque dossier dépend des faits et du contrat. Présentez-nous votre situation afin de vérifier notre possibilité d'intervention.",
    cta: "Nous contacter",
    href: "/contact/",
    bar: "#1F6F63",
  },
];

export default function SinistresHubPage() {
  return (
    <main className="bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pb-16 pt-6 md:pb-24 md:pt-10 text-center md:text-left">
      <div className="mx-auto max-w-[90%] lg:max-w-[80%] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)]">

        {/* HERO */}
        <section className="px-6 pb-14 pt-16 md:px-14 md:pt-20">
          <div className="max-w-[680px] mx-auto md:mx-0">
            <SectionLabel tone="teal">Vos sinistres</SectionLabel>
            <h1 className="text-[34px] leading-[1.15] text-[#14213D] sm:text-[42px] lg:text-[46px]" style={{ fontFamily: "var(--font-display)" }}>
              Chaque sinistre a ses urgences. Chaque dossier exige une méthode.
            </h1>
            <p className="mt-6 text-[16px] leading-relaxed text-[#4A5568]">
              Sélectionnez votre situation pour connaître les premiers réflexes, les points de vigilance et la manière dont ELVARRA peut vous accompagner.
            </p>
          </div>
        </section>

        {/* CARTES SITUATIONS */}
        <section className="px-6 pb-20 md:px-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SITUATIONS.map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-3xl bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,33,61,0.35)]"
              >
                <span className="h-1 w-12 rounded-full" style={{ backgroundColor: s.bar }} />
                <s.icon className="mt-6 h-8 w-8 text-[#14213D]" />
                <p className="mt-5 text-[20px] text-[#14213D]" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </p>
                <p className="mt-3 max-w-[420px] text-[15px] leading-relaxed text-[#4A5568]">
                  {s.text}
                </p>
                <span className="mt-6 flex items-center gap-2 text-[14px] text-[#3D6BAD]">
                  {s.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}