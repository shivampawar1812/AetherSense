import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AetherSense",
  description:
    "Discover what's truly novel with AI-powered literature intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
        bg-black
        text-white
        relative
        overflow-x-hidden
    "
      ><div
        className="
        fixed
        inset-0
        -z-10
        pointer-events-none
        overflow-hidden
    "
      >

          {/* Top Hero Glow */}

          <div
            className="
            absolute
            top-[-200px]
            left-1/2
            -translate-x-1/2
            w-[1000px]
            h-[1000px]
            rounded-full
            bg-[#D4145A]/15
            blur-[180px]
        "
          />

          {/* Middle Glow */}

          <div
            className="
            absolute
            top-[900px]
            right-[-200px]
            w-[700px]
            h-[700px]
            rounded-full
            bg-[#D4145A]/8
            blur-[180px]
        "
          />

          {/* Features Glow */}

          <div
            className="
            absolute
            top-[1700px]
            left-[-250px]
            w-[800px]
            h-[800px]
            rounded-full
            bg-fuchsia-500/6
            blur-[180px]
        "
          />

          {/* Bottom Glow */}

          <div
            className="
            absolute
            bottom-[-300px]
            left-1/2
            -translate-x-1/2
            w-[900px]
            h-[900px]
            rounded-full
            bg-[#D4145A]/8
            blur-[200px]
        "
          />

          <div
            className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[radial-gradient(circle,white_1px,transparent_1px)]
        [background-size:32px_32px]
    "
          />
        </div>{children}</body>
    </html>
  );
}
