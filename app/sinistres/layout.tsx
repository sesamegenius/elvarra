import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Accompagnement après sinistre | Elvarra",
  description:
    "Incendie, dégât des eaux, événement climatique : découvrez les premières étapes et l'accompagnement d'Elvarra.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Accompagnement après sinistre | Elvarra",
    description:
      "Incendie, dégât des eaux, événement climatique : découvrez les premières étapes et l'accompagnement d'Elvarra.",
    images: [
      {
        url: "/og/sinistres.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Accompagnement après sinistre",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/sinistres/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Accompagnement après sinistre | Elvarra",
    description:
      "Incendie, dégât des eaux, événement climatique : découvrez les premières étapes et l'accompagnement d'Elvarra.",
    images: [
      {
        url: "/og/sinistres.jpg",
        width: 1200,
        height: 630,
        alt: "Elvarra — Accompagnement après sinistre",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/sinistres/",
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

export default function SinistresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}