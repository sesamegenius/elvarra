import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Que faire après un sinistre ? Les bons réflexes | ELVARRA",
  description:
    "Sécurité, déclaration, preuves et travaux : les étapes essentielles pour protéger votre dossier après un sinistre.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Que faire après un sinistre ? Les bons réflexes | ELVARRA",
    description:
      "Sécurité, déclaration, preuves et travaux : les étapes essentielles pour protéger votre dossier après un sinistre.",
    images: [{ url: "/og/que-faire-apres-un-sinistre.jpg", width: 1200, height: 630, alt: "ELVARRA — Que faire après un sinistre" }],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/que-faire-apres-un-sinistre/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Que faire après un sinistre ? Les bons réflexes | ELVARRA",
    description:
      "Sécurité, déclaration, preuves et travaux : les étapes essentielles pour protéger votre dossier après un sinistre.",
    images: [{ url: "/og/que-faire-apres-un-sinistre.jpg", width: 1200, height: 630, alt: "ELVARRA — Que faire après un sinistre" }],
  },
  alternates: { canonical: "https://elvarra.fr/que-faire-apres-un-sinistre/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  appleWebApp: { title: "ELVARRA" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#14213D",
};

export default function QueFaireApresUnSinistreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}