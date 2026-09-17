import Link from "next/link";
import { SectionLabel } from "@/components/PageUI";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] px-6 py-16 md:px-14 md:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="overflow-hidden rounded-[2rem] bg-white px-7 py-16 shadow-[0_20px_60px_rgba(20,33,61,0.06)] sm:px-12 md:rounded-[2.5rem] md:px-20 md:py-24">
          <div className="mx-auto max-w-[720px] text-center">
            <SectionLabel tone="amber">Page introuvable</SectionLabel>

            <p
              className="mt-8 text-[88px] leading-none text-[#14213D] sm:text-[120px] lg:text-[150px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              404
            </p>

            <h1
              className="mt-6 text-[30px] leading-tight text-[#14213D] sm:text-[36px] lg:text-[42px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Cette page semble s’être égarée.
            </h1>

            <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-relaxed text-[#4A5568] sm:text-[16px]">
              L’adresse que vous avez suivie ne correspond à aucune page de notre
              site. Vous pouvez revenir à l’accueil ou nous contacter pour
              poursuivre votre démarche.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#14213D] px-7 text-[14px] text-white transition-all duration-200 hover:bg-[#1C2D50] hover:shadow-[0_8px_24px_rgba(20,33,61,0.16)]"
              >
                Retour à l’accueil
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#D9A44E] bg-[#FEF8EC] px-7 text-[14px] text-[#8A6A26] transition-all duration-200 hover:bg-[#FEF1D0]"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}