import type { Metadata } from "next";
import { Geist, Geist_Mono, Michroma, Poppins, Iceland} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})
const iceland = Iceland ({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-iceland",
})
const duneRise = localFont({
  src: './fonts/Dune_Rise.ttf',
  variable: '--font-dunerise',
})


export const metadata: Metadata = {
  title: "~~ New Page ~~",
  description: "My custom homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} ${poppins.variable} ${iceland.variable} ${duneRise} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
