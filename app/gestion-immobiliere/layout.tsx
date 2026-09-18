import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Gestion des sinistres immobiliers | Elvarra Gestion",
  description:
    "Elvarra Gestion accompagne les gestionnaires immobiliers pour structurer, suivre et documenter les sinistres des biens sous gestion.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Gestion des sinistres immobiliers | Elvarra Gestion",
    description:
      "Elvarra Gestion accompagne les gestionnaires immobiliers pour structurer, suivre et documenter les sinistres des biens sous gestion.",
    images: [
      {
        url: "/og/gestion-immobiliere.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra Gestion — Gestion des sinistres immobiliers",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/gestion-immobiliere/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Gestion des sinistres immobiliers | Elvarra Gestion",
    description:
      "Elvarra Gestion accompagne les gestionnaires immobiliers pour structurer, suivre et documenter les sinistres des biens sous gestion.",
    images: [
      {
        url: "/og/gestion-immobiliere.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra Gestion — Gestion des sinistres immobiliers",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/gestion-immobiliere/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  appleWebApp: {
    title: "Elvarra",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function GestionImmobiliereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}