import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenny Bennett - Full Stack Developer ",
  description: "Full Stack Developer | React | TypeScript | Go | AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased p-8 bg-primary-foreground text-slate-700 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
