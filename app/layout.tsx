import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horacio Ruiz — Applied AI, GRC & IT Operations",
  description:
    "Bilingual GRC and IT operations professional building practical AI-assisted products and research workflows with privacy, security, and human review.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0b0e0f] text-white antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(12,13,9,.72) 0%, rgba(13,14,10,.82) 58%, rgba(12,13,9,.93) 100%), url('/images/pillars-of-creation.png')",
            backgroundAttachment: "fixed",
            filter: "saturate(.65) brightness(.7)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
