import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | ELVARRA",
  description:
    "Consultez les mentions légales du site ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Mentions légales | ELVARRA",
    description:
      "Consultez les mentions légales du site ELVARRA.",
    images: [
      {
        url: "/og/cabinet.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Mentions légales",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/mentions/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Mentions légales | ELVARRA",
    description:
      "Consultez les mentions légales du site ELVARRA.",
    images: ["/og/cabinet.jpg"],
  },
  alternates: {
    canonical: "https://elvarra.fr/mentions/",
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

export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
