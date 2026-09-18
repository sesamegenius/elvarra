import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Elvarra - FAQ",
  description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Elvarra - FAQ",
    description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Les conseils" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/faq/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Elvarra - FAQ",
    description: "Découvrez l'approche, les conseils de l'équipe Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Les conseils" }],
  },
  alternates: { canonical: "https://elvarra.fr/faq/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "Elvarra" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}