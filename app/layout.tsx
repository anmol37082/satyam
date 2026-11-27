import type { Metadata } from "next";
// @ts-ignore Next.js resolves global CSS imports at build time.
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
export const metadata: Metadata = {
  title: "SATYA Facility Services Pvt. Ltd. | Complete Facility Management",
  description:
    "Security, housekeeping, patient care, cleaning, gardening and manpower support by SATYA Facility Services in Mohali, Punjab.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollAnimations />
      </body>
    </html>
  );
}
