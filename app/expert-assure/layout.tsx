import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Qu'est-ce qu'un expert d'assuré ? | ELVARRA",
  description:
    "Rôle, intervention et différence avec l'expert mandaté par l'assurance : comprendre l'expertise d'assuré.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Qu'est-ce qu'un expert d'assuré ? | ELVARRA",
    description:
      "Rôle, intervention et différence avec l'expert mandaté par l'assurance : comprendre l'expertise d'assuré.",
    images: [{ url: "/og/expert-assure.jpg", width: 1200, height: 630, alt: "ELVARRA — L'expert d'assuré" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/expert-assure/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Qu'est-ce qu'un expert d'assuré ? | ELVARRA",
    description:
      "Rôle, intervention et différence avec l'expert mandaté par l'assurance : comprendre l'expertise d'assuré.",
    images: [{ url: "/og/expert-assure.jpg", width: 1200, height: 630, alt: "ELVARRA — L'expert d'assuré" }],
  },
  alternates: { canonical: "https://elvarra.fr/expert-assure/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "ELVARRA" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function ExpertAssureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}