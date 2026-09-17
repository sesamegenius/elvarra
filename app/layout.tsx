import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  title: "Expert d'assuré après un sinistre | ELVARRA",
  description:
    "ELVARRA accompagne particuliers et professionnels pour analyser, documenter, chiffrer et défendre leurs dommages après un sinistre.",
  icons: {
    icon: "/ElvarraLogo.png",
  },
  alternates: {
    canonical: "https://www.elvarra.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Expert d'assuré après un sinistre | ELVARRA",
    description:
      "ELVARRA accompagne particuliers et professionnels pour analyser, documenter, chiffrer et défendre leurs dommages après un sinistre.",
    images: [
      {
        url: "/ElvarraLogo.png",
      },
    ],
  },
  twitter: {
    title: "Expert d'assuré après un sinistre | ELVARRA",
    description:
      "ELVARRA accompagne particuliers et professionnels pour analyser, documenter, chiffrer et défendre leurs dommages après un sinistre.",
    images: ["/ElvarraLogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${inter.variable} bg-[linear-gradient(160deg,#EEF4F1_0%,#EAF0F8_45%,#F1F1EC_100%)] pt-8`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Header />

        <main className="">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}