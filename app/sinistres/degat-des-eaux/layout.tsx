import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Expert d'assuré dégât des eaux | ELVARRA",
  description:
    "ELVARRA vous aide à documenter les dommages et préparer votre dossier après un dégât des eaux.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Expert d'assuré dégât des eaux | ELVARRA",
    description:
      "ELVARRA vous aide à documenter les dommages et préparer votre dossier après un dégât des eaux.",
    images: [
      {
        url: "/og/degat-des-eaux.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Expert d'assuré dégât des eaux",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/sinistres/degat-des-eaux/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Expert d'assuré dégât des eaux | ELVARRA",
    description:
      "ELVARRA vous aide à documenter les dommages et préparer votre dossier après un dégât des eaux.",
    images: [
      {
        url: "/og/degat-des-eaux.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Expert d'assuré dégât des eaux",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/sinistres/degat-des-eaux/",
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

export default function DegatDesEauxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}