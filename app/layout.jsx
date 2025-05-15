import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import "aos/dist/aos.css";
import "./globals.css";

const montserratRegular = localFont({
  src: "./fonts/Montserrat-Regular.woff2",
  variable: "--font-montserrat-regular",
  display: "swap",
});

const montserratMedium = localFont({
  src: "./fonts/Montserrat-Medium.woff2",
  variable: "--font-montserrat-medium",
  display: "swap",
});

const montserratSemibold = localFont({
  src: "./fonts/Montserrat-SemiBold.woff2",
  variable: "--font-montserrat-semibold",
  display: "swap",
});

const montserratBold = localFont({
  src: "./fonts/Montserrat-Bold.woff2",
  variable: "--font-montserrat-bold",
  display: "swap",
});

const montserratExtraBold = localFont({
  src: "./fonts/Montserrat-ExtraBold.woff2",
  variable: "--font-montserrat-extrabold",
  display: "swap",
});

export const metadata = {
  title: "Codifica",
  description:
    "Aprende desarrollo web con un enfoque 100% práctico. En Codifica creas proyectos reales desde el primer día, sin teoría aburrida y con acompañamiento cercano. Sal listo para el mundo laboral.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },

  openGraph: {
    title: "Codifica",
    description:
      "Aprende desarrollo web con un enfoque 100% práctico. En Codifica creas proyectos reales desde el primer día, sin teoría aburrida y con acompañamiento cercano. Sal listo para el mundo laboral.",
    url: "https://codifica-ten.vercel.app",
    siteName: "Codifica",
    images: [
      {
        url: "https://codifica-ten.vercel.app/og-codifica.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserratRegular.variable} ${montserratMedium.variable} ${montserratExtraBold.variable} ${montserratSemibold.variable} ${montserratBold.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
