import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Dommages après événement climatique | ELVARRA",
  description:
    "Tempête, grêle ou fortes pluies : ELVARRA vous accompagne pour documenter et défendre votre dossier selon vos garanties.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dommages après événement climatique | ELVARRA",
    description:
      "Tempête, grêle ou fortes pluies : ELVARRA vous accompagne pour documenter et défendre votre dossier selon vos garanties.",
    images: [
      {
        url: "/og/evenements-climatiques.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Dommages après événement climatique",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/sinistres/evenements-climatiques/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Dommages après événement climatique | ELVARRA",
    description:
      "Tempête, grêle ou fortes pluies : ELVARRA vous accompagne pour documenter et défendre votre dossier selon vos garanties.",
    images: [
      {
        url: "/og/evenements-climatiques.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Dommages après événement climatique",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/sinistres/evenements-climatiques/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  appleWebApp: {
    title: "ELVARRA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function EvenementsClimatiquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}