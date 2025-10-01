// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { Poppins, Roboto, Merriweather } from "next/font/google";
import type { Metadata } from "next";

// ✅ Beach Hut Rental SEO Metadata
export const metadata: Metadata = {
  title: "CO-BEACH HUTS",
  description:
    "Book your perfect beach hut getaway. Comfortable huts, stunning ocean views, and unforgettable experiences by the beach.",
  keywords: ["beach hut rental", "beach getaway", "vacation huts", "ocean view huts", "beach vacation"],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://yourbeachhutwebsite.com"), // Replace with your domain
  openGraph: {
    title: "CO-BEACH HUTS",
    description:
      "Book your perfect beach hut getaway. Comfortable huts, stunning ocean views, and unforgettable experiences by the beach.",
    url: "https://yourbeachhutwebsite.com",
    siteName: "CO-BEACH HUTS",
    images: [
      {
        url: "/bg.jpeg", // Put your preview image in /public
        width: 1200,
        height: 630,
        alt: "CO-BEACH HUTS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CO-BEACH HUTS",
    description:
      "Book your perfect beach hut getaway. Comfortable huts, stunning ocean views, and unforgettable experiences by the beach.",
    images: ["/bg.jpeg"],
  },
  icons: {
    icon: "/favicon.ico", // Place favicon.ico in /public
  },
};

// Import Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merri",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
