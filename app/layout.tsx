import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Roognis",
    template: "%s | Roognis",
  },
  description: "Scale educational impact with 24×7 AI tutoring. Reduce volunteer burnout, personalize learning, and serve more students—₹120-₹200/month.",
  openGraph: {
    title: "Roognis",
    description: "Scale educational impact with 24×7 AI tutoring. Reduce volunteer burnout, personalize learning, and serve more students—₹120-₹200/month.",
    url: "https://roognis.netlify.app",
    siteName: "Roognis",
    images: [
      {
        url: "https://roognis.netlify.app/favicon.svg",
        width: 64,
        height: 64,
        alt: "Roognis logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
