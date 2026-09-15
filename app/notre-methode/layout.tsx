import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "La méthode ELVARRA après sinistre",
  description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "La méthode ELVARRA après sinistre",
    description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement ELVARRA.",
    images: [{ url: "/og/notre-methode.jpg", width: 1200, height: 630, alt: "ELVARRA — Notre méthode" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/notre-methode/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "La méthode ELVARRA après sinistre",
    description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement ELVARRA.",
    images: [{ url: "/og/notre-methode.jpg", width: 1200, height: 630, alt: "ELVARRA — Notre méthode" }],
  },
  alternates: { canonical: "https://elvarra.fr/notre-methode/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "ELVARRA" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function NotreMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}