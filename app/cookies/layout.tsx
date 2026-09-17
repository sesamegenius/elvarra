import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Politique relative aux cookies | ELVARRA",
  description:
    "Découvrez la politique relative aux cookies du site ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Politique relative aux cookies | ELVARRA",
    description:
      "Découvrez la politique relative aux cookies du site ELVARRA.",
    images: [
      {
        url: "/og/cabinet.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Politique relative aux cookies",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/cookies/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Politique relative aux cookies | ELVARRA",
    description:
      "Découvrez la politique relative aux cookies du site ELVARRA.",
    images: ["/og/cabinet.jpg"],
  },
  alternates: {
    canonical: "https://elvarra.fr/cookies/",
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

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
