import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Sésame",
  description: "Mentions légales de Sésame",
  icons: {
    icon: "/sesamelogo.png",
  },
  openGraph: {
    title: "Politique de confidentialité - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Politique de confidentialité - Sésame",
      },
    ],
    siteName: "Sésame",
    type: "website",
    url: "https://www.sesame-group.io/legal/privacy",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Politique de confidentialité - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Politique de confidentialité - Sésame",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sesame-group.io/legal/privacy",
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
    title: "Politique de confidentialité - Sésame",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
        <main className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {children}
        </main>
  );
}
