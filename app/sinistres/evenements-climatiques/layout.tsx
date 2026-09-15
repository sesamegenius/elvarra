import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: {
    icon: "",
  },
  openGraph: {
    title: "",
    description: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    siteName: "Elvarra",
    type: "website",
    url: "",
    locale: "fr_FR",
    countryName: "France",
  },
  twitter: {
    title: "",
    description: "",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
  alternates: {
    canonical: "",
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
    title: "",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function TemplateLayout({ // A Changer
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
