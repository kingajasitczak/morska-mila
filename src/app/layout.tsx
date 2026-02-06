import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Upewnij się, że ścieżka jest poprawna
import Footer from "@/components/Footer"; // Upewnij się, że ścieżka jest poprawna

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Morska Mila - Domki w Kopaniu",
    description: "Komfortowe domki letniskowe między morzem a jeziorem.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        {/* Dodajemy suppressHydrationWarning={true}, aby React ignorował
         atrybuty dodawane przez wtyczki przeglądarki (np. Grammarly).
      */}
        <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}