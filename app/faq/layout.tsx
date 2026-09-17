import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "ELVARRA - FAQ",
  description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "ELVARRA - FAQ",
    description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "ELVARRA — Les conseils" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/faq/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "ELVARRA - FAQ",
    description: "Découvrez l'approche, les conseils de l'équipe ELVARRA.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "ELVARRA — Les conseils" }],
  },
  alternates: { canonical: "https://elvarra.fr/faq/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "ELVARRA" },
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