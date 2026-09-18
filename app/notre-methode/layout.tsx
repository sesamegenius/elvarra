import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "La méthode Elvarra après sinistre",
  description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement Elvarra.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "La méthode Elvarra après sinistre",
    description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement Elvarra.",
    images: [{ url: "/og/notre-methode.jpg", width: 1200, height: 630, alt: "Elvarra — Notre méthode" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/notre-methode/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "La méthode Elvarra après sinistre",
    description: "De l'analyse au suivi du dossier, découvrez les étapes de l'accompagnement Elvarra.",
    images: [{ url: "/og/notre-methode.jpg", width: 1200, height: 630, alt: "Elvarra — Notre méthode" }],
  },
  alternates: { canonical: "https://elvarra.fr/notre-methode/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "Elvarra" },
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