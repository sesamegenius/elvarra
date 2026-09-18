import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Le cabinet d'expertise d'assuré Elvarra",
  description: "Découvrez l'approche, les engagements et l'équipe du cabinet Elvarra.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Le cabinet d'expertise d'assuré Elvarra",
    description: "Découvrez l'approche, les engagements et l'équipe du cabinet Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Le cabinet" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/cabinet/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Le cabinet d'expertise d'assuré Elvarra",
    description: "Découvrez l'approche, les engagements et l'équipe du cabinet Elvarra.",
    images: [{ url: "/og/cabinet.jpg", width: 1200, height: 630, alt: "Elvarra — Le cabinet" }],
  },
  alternates: { canonical: "https://elvarra.fr/cabinet/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "Elvarra" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function CabinetLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}