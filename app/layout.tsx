import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PrintRocket",
    template: "%s | PrintRocket"
  },
  description:
    "PrintRocket helps vendors produce faster, administrators coordinate smarter, and delivery teams ship reliably.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001"),
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "PrintRocket",
    description:
      "A modern workflow for print vendors, admins, and delivery teams.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintRocket",
    description:
      "A modern workflow for print vendors, admins, and delivery teams."
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

