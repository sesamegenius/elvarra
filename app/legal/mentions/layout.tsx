import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: "Mentions légales - Sésame",
  description: "Mentions légales de Sésame",
  icons: {
    icon: "/sesamelogo.png",
  },
  openGraph: {
    title: "Mentions légales - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Mentions légales - Sésame",
      },
    ],
    siteName: "Sésame",
    type: "website",
    url: "https://www.sesame-group.io/legal/mentions",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Mentions légales - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Mentions légales - Sésame",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sesame-group.io/legal/mentions",
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
    title: "Mentions légales - Sésame",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function MentionsLayout({
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
