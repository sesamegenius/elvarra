import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Les conseils d'Elvarra",
  description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Les conseils d'Elvarra",
    description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Les conseils" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/conseils/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Les conseils d'Elvarra",
    description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Les conseils" }],
  },
  alternates: { canonical: "https://elvarra.fr/conseils/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "Elvarra" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function ConseilsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}