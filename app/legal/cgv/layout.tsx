import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: "Conditions générales de vente - Sésame",
  description: "Conditions générales de vente de Sésame et de ses services.",
  icons: {
    icon: "/sesamelogo.png",
  },
  openGraph: {
    title: "Conditions générales de vente - Sésame",
    description: "Conditions générales de vente de Sésame et de ses services.",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Conditions générales de vente - Sésame",
      },
    ],
    siteName: "Sésame",
    type: "website",
    url: "https://www.sesame-group.io/legal/cgv",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Conditions générales de vente - Sésame",
    description: "Conditions générales de vente de Sésame et de ses services.",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Conditions générales de vente - Sésame",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sesame-group.io/legal/cgv",
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
    title: "Conditions générales de vente - Sésame",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function CGVLayout({
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
