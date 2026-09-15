import Link from "next/link";
import {Metadata, Viewport} from "next";

export const metadata: Metadata = {
  title: "Légal - Sésame",
  description: "Mentions légales de Sésame",
  icons: {
    icon: "/sesamelogo.png",
  },
  openGraph: {
    title: "Légal - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Légal - Sésame",
      },
    ],
    siteName: "Sésame",
    type: "website",
    url: "https://www.sesame-group.io/legal",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "Légal - Sésame",
    description: "Mentions légales de Sésame",
    images: [
      {
        url: "/sesamelogo.png",
        width: 1200,
        height: 630,
        alt: "Légal - Sésame",
      },
    ],
  },
  alternates: {
    canonical: "https://www.sesame-group.io/legal",
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
    title: "Légal - Sésame",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation légale */}
        <div className="mb-8">
          <nav className="flex flex-wrap justify-center gap-4 mb-8">
            <Link 
              href="/legal/mentions"
              className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              Mentions légales
            </Link>
           {/*  <Link 
              href="/legal/cgv"
              className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              CGV
            </Link> */}
            <Link 
              href="/legal/privacy"
              className="px-6 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>

        {/* Contenu de la page */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          {children}
        </div>

        {/* Retour à l'accueil */}
        <div className="text-center mt-8">
          <Link 
            href="/"
            className="inline-flex items-center text-[#005493] hover:text-[#003d6e] transition-colors duration-200"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
