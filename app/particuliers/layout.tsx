import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Expert d'assuré pour particuliers | Elvarra",
  description:
    "Après un sinistre habitation, Elvarra vous aide à documenter vos dommages, préparer l'expertise et défendre votre dossier.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Expert d'assuré pour particuliers | Elvarra",
    description:
      "Après un sinistre habitation, Elvarra vous aide à documenter vos dommages, préparer l'expertise et défendre votre dossier.",
    images: [
      {
        url: "/og/particuliers.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Expert d'assuré pour particuliers",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/particuliers/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Expert d'assuré pour particuliers | Elvarra",
    description:
      "Après un sinistre habitation, Elvarra vous aide à documenter vos dommages, préparer l'expertise et défendre votre dossier.",
    images: [
      {
        url: "/og/particuliers.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Expert d'assuré pour particuliers",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/particuliers/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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

export default function ParticuliersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white rounded-xl shadow-lg">
      {children}
    </main>
  );
}