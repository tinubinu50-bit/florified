import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Florified — Handcrafted Pipe Cleaner Bouquets",
  description:
    "Beautiful, long-lasting bouquets handcrafted from colorful pipe cleaners. Made with love, designed to last forever.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
