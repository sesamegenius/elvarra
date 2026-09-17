import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | ELVARRA",
  description:
    "Découvrez la politique de confidentialité et la protection des données personnelles du site ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Politique de confidentialité | ELVARRA",
    description:
      "Découvrez la politique de confidentialité et la protection des données personnelles du site ELVARRA.",
    images: [
      {
        url: "/og/cabinet.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Politique de confidentialité",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/privacy/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Politique de confidentialité | ELVARRA",
    description:
      "Découvrez la politique de confidentialité et la protection des données personnelles du site ELVARRA.",
    images: ["/og/cabinet.jpg"],
  },
  alternates: {
    canonical: "https://elvarra.fr/privacy/",
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
    title: "ELVARRA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
