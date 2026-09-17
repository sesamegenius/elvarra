import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Les conseils d'ELVARRA",
  description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Les conseils d'ELVARRA",
    description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "ELVARRA — Les conseils" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/conseils/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Les conseils d'ELVARRA",
    description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "ELVARRA — Les conseils" }],
  },
  alternates: { canonical: "https://elvarra.fr/conseils/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "ELVARRA" },
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