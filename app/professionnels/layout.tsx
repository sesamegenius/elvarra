import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Expert d'assuré pour entreprises | ELVARRA",
  description:
    "ELVARRA accompagne les entreprises après un sinistre touchant leurs locaux, équipements, stocks ou activité.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Expert d'assuré pour entreprises | ELVARRA",
    description:
      "ELVARRA accompagne les entreprises après un sinistre touchant leurs locaux, équipements, stocks ou activité.",
    images: [
      {
        url: "/og/professionnels.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Expert d'assuré pour entreprises",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "https://elvarra.fr/professionnels/",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Expert d'assuré pour entreprises | ELVARRA",
    description:
      "ELVARRA accompagne les entreprises après un sinistre touchant leurs locaux, équipements, stocks ou activité.",
    images: [
      {
        url: "/og/professionnels.jpg",
        width: 1200,
        height: 630,
        alt: "ELVARRA — Expert d'assuré pour entreprises",
      },
    ],
  },
  alternates: {
    canonical: "https://elvarra.fr/professionnels/",
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

export default function ProfessionnelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white rounded-xl shadow-lg">
      {children}
    </main>
  );
}