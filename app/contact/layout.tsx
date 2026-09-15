import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Contact - Sésame",
  description: "Contactez-nous pour toute question ou demande de service.",
  icons: {
    icon: "/sesamelogo.png",
  },
  openGraph: {
    title: "Contact - Sésame",
    description: "Contactez-nous pour toute question ou demande de service.",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Contact - Sésame",
      },
    ],
    siteName: "Sésame",
    type: "website",
    url: "https://www.sesame-group.io/contact",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Contact - Sésame",
    description: "Contactez-nous pour toute question ou demande de service.",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Contact - Sésame",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sesame-group.io/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#000000",
  appleWebApp: {
    title: "Contact - Sésame",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ContactLayout({
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
