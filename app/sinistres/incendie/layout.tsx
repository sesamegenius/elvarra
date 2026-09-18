import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Expert d'assuré après incendie | Elvarra",
  description:
    "Après un incendie, Elvarra vous accompagne pour documenter, évaluer et défendre les dommages de votre logement ou entreprise.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Expert d'assuré après incendie | Elvarra",
    description:
      "Après un incendie, Elvarra vous accompagne pour documenter, évaluer et défendre les dommages de votre logement ou entreprise.",
    images: [
      {
        url: "/og/incendie.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Expert d'assuré après incendie",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/sinistres/incendie/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Expert d'assuré après incendie | Elvarra",
    description:
      "Après un incendie, Elvarra vous accompagne pour documenter, évaluer et défendre les dommages de votre logement ou entreprise.",
    images: [
      {
        url: "/og/incendie.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Expert d'assuré après incendie",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/sinistres/incendie/",
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

export default function IncendieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}