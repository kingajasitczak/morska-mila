import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <--- Tu dodaliśmy import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Morska Mila - Domki Letniskowe Kopań",
    description: "Komfortowe domki letniskowe między morzem a jeziorem.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            <Footer /> {/* <--- Tu dodaliśmy Stopkę */}
        </div>
        </body>
        </html>
    );
}