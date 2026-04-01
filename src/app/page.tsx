"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaUmbrellaBeach,
    FaBicycle,
    FaHome,
    FaMapMarkerAlt,
    FaArrowRight
} from "react-icons/fa";

export default function Home() {
    // Tablica ze zdjęciami
    const heroImages = [
        "/images/bannerstart/1.jpg",
        "/images/bannerstart/2.jpg",
        "/images/bannerstart/3.jpg",
        "/images/bannerstart/4.jpg",
        "/images/bannerstart/5.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatyczna zmiana zdjęć co 5 sekund
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroImages.length]);

    return (
        <div className="flex flex-col min-h-screen">

            {/* 1. HERO SECTION - Super płynne przenikanie */}
            <section className="relative h-[85vh] min-h-[500px] w-full flex items-center justify-center text-center text-white px-4 overflow-hidden">

                {/* TŁO (z-0) - Kontener trzymający zdjęcia i przyciemnienie */}
                <div className="absolute inset-0 z-0 bg-blue-950">
                    {/* Zdjęcia */}
                    {heroImages.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out transform ${
                                index === currentIndex
                                    ? "opacity-100 scale-105"
                                    : "opacity-0 scale-100"
                            }`}
                        >
                            <Image
                                src={src}
                                alt={`Morska Mila tło ${index + 1}`}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ))}

                    {/* Ciemna nakładka - przykrywa tylko zdjęcia (z-10 wymusza bycie nad powiększającymi się fotkami) */}
                    <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px] z-10 pointer-events-none"></div>
                </div>

                {/* TREŚĆ HERO (z-20) - Najwyższa warstwa, 100% wyraźna i nieprzyciemniona */}
                <div className="relative z-20 max-w-4xl mx-auto space-y-6 animate-fade-in-up">
                    <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-blue-200 mb-2">
                        Kopań
                    </h2>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg mb-4">
                        Morska Mila
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Domki letniskowe pomiędzy morzem a jeziorem. <br className="hidden md:block"/>
                        Tylko 200 metrów od szerokiej, piaszczystej plaży.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Link
                            href="/oferta"
                            className="px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-full transition duration-300 shadow-lg text-lg"
                        >
                            Domki
                        </Link>
                        <Link
                            href="/kontakt"
                            className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-full transition duration-300 shadow-lg text-lg"
                        >
                            Kontakt
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. ATUTY - Ikony */}
            <section className="py-20 bg-white container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Kafel 1 */}
                    <div className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-blue-50 transition duration-300">
                        <div className="bg-blue-50 text-blue-400 p-5 rounded-full mb-4 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                            <FaUmbrellaBeach size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Blisko Plaży</h3>
                        <p className="text-gray-600 text-sm">
                            Zaledwie 200m spacerem dzieli Cię od pięknego Bałtyku.
                        </p>
                    </div>

                    {/* Kafel 2 */}
                    <div className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-blue-50 transition duration-300">
                        <div className="bg-blue-50 text-blue-400 p-5 rounded-full mb-4 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                            <FaHome size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Komfortowe Domki</h3>
                        <p className="text-gray-600 text-sm">
                            Nowoczesne, piętrowe domki dla max 8 osób. Pełne wyposażenie.
                        </p>
                    </div>

                    {/* Kafel 3 */}
                    <div className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-blue-50 transition duration-300">
                        <div className="bg-blue-50 text-blue-400 p-5 rounded-full mb-4 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                            <FaBicycle size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Aktywny Wypoczynek</h3>
                        <p className="text-gray-600 text-sm">
                            Rowery dla gości i szlak R10 tuż obok ośrodka.
                        </p>
                    </div>

                    {/* Kafel 4 */}
                    <div className="flex flex-col items-center text-center group p-6 rounded-2xl hover:bg-blue-50 transition duration-300">
                        <div className="bg-blue-50 text-blue-400 p-5 rounded-full mb-4 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                            <FaMapMarkerAlt size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Unikalna Lokalizacja</h3>
                        <p className="text-gray-600 text-sm">
                            Kopań – oaza spokoju między morzem a jeziorem.
                        </p>
                    </div>

                </div>
            </section>

            {/* 3. SEKJA "O NAS" SKRÓT - Zdjęcie + Tekst */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Zdjęcie */}
                        <div className="w-full lg:w-1/2 h-[350px] lg:h-[450px] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <Image
                                src="/images/DSC_0660_123.jpg" // Zdjęcie domków
                                alt="Domki letniskowe Morska Mila"
                                fill
                                className="object-cover hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* Tekst */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm">O Naszym Ośrodku</h4>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
                                Poczuj morską bryzę i <br/> domową atmosferę
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed text-justify">
                                Morska Mila to kompleks 6 domków, stworzonych z myślą o rodzinach i grupach przyjaciół.
                                Oferujemy ciszę, spokój i bliskość natury, której nie znajdziesz w zatłoczonych kurortach.
                            </p>
                            <ul className="space-y-3 pt-2">
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <FaArrowRight className="text-blue-400" /> Plac zabaw dla dzieci
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <FaArrowRight className="text-blue-400" /> Altana z grillem
                                </li>
                                <li className="flex items-center gap-3 text-gray-700 font-medium">
                                    <FaArrowRight className="text-blue-400" /> Bezpłatny parking i WiFi
                                </li>
                            </ul>

                            <div className="pt-6">
                                <Link href="/o-nas" className="text-blue-900 font-bold border-b-2 border-blue-400 hover:text-blue-600 transition pb-1">
                                    Poznaj nas bliżej →
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA NA DOLE */}
            <section className="py-20 bg-blue-900 text-white text-center px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold">Planujesz wakacje?</h2>
                    <p className="text-blue-100 text-lg">
                        Zarezerwuj swój wymarzony domek już teraz.
                        Czekamy na Ciebie w Kopaniu!
                    </p>
                    <div className="flex justify-center gap-6 pt-4">
                        <Link
                            href="/cennik"
                            className="px-8 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition shadow-lg"
                        >
                            Sprawdź Cennik
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}