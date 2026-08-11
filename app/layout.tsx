import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cargoland.africa/"),
  title: {
    default: "Cargoland Logistics | Comprehensive Freight Services in Nigeria",
    template: "%s | Cargoland Logistics Nigeria",
  },
  description:
    "Leading logistics company in Nigeria offering road, sea, and air freight services worldwide. Reliable cargo transport, shipping, and logistics solutions with extensive coverage.",
  keywords: [
    "logistics company Nigeria",
    "global coverage",
    "freight services Nigeria",
    "cargo transport Lagos",
    "sea freight Nigeria",
    "air freight Nigeria",
    "road haulage Nigeria",
    "Cargoland Logistics",
    "shipping company Nigeria",
    "freight forwarding West Africa",
    "logistics solutions West Africa",
  ],
  authors: [
    { name: "Cargoland Logistics", url: "https://www.cargoland.africa/" },
  ],
  creator: "Cargoland Logistics",
  publisher: "Cargoland Logistics",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.cargoland.africa/",
    siteName: "Cargoland Logistics",
    title: "Cargoland Logistics - Road, Sea & Air Freight Services",
    description:
      "Comprehensive logistics solutions across the world. Specializing in road haulage, sea freight, and air cargo services with nationwide coverage.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cargoland Global Logistics Freight Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargoland Logistics - Freight Services ",
    description:
      "Leading logistics company in Nigeria offering road, sea, and air freight services",
    images: ["/twitter-image.jpg"],
    creator: "@cargolandlogistics",
    site: "@cargolandlogistics",
  },
  alternates: {
    canonical: "https://www.cargoland.africa/",
    // languages: {
    //   "en-NG": "https://www.cargoland.africa/",
    //   "en-US": "https://www.cargoland.africa/",
    //   fr: "https://www.cargoland.africa/",
    },
  },
  // category: "logistics",
  // classification: "Freight and Logistics Services",
  // referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos",
    "geo.position": "6.5244;3.3792",
    ICBM: "6.5244, 3.3792",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        montserrat.variable,
        roboto.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
