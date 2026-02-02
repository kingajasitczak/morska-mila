"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// --- DANE (ZDJĘCIA) ---
// Pamiętaj, żeby z czasem podmienić 'src' na różne pliki, jak już je wgrasz.
const wszystkieZdjecia = [
    // Kategoria: WNĘTRZA
    { src: "/images/DSC_0660_123.jpg", category: "Wnętrza", alt: "Salon z aneksem - widok ogólny" },
    { src: "/images/DSC_0660_123.jpg", category: "Wnętrza", alt: "Sypialnia na piętrze" },
    { src: "/images/DSC_0660_123.jpg", category: "Wnętrza", alt: "Łazienka z prysznicem" },

    // Kategoria: ZEWNĄTRZ
    { src: "/images/DSC_0660_123.jpg", category: "Zewnątrz", alt: "Widok na taras i wejście" },
    { src: "/images/DSC_0660_123.jpg", category: "Zewnątrz", alt: "Plac zabaw dla dzieci" },
    { src: "/images/DSC_0660_123.jpg", category: "Zewnątrz", alt: "Miejsce na grilla" },

    // Kategoria: OKOLICA
    { src: "/images/DSC_0660_123.jpg", category: "Okolica", alt: "Droga na plażę (200m)" },
    { src: "/images/DSC_0660_123.jpg", category: "Okolica", alt: "Jezioro Kopań o zachodzie" },
    { src: "/images/DSC_0660_123.jpg", category: "Okolica", alt: "Szeroka plaża" },
];

const kategorie = ["Wszystkie", "Wnętrza", "Zewnątrz", "Okolica"];

export default function GaleriaPage() {
    const [aktywnaKategoria, setAktywnaKategoria] = useState("Wszystkie");

    // Stan dla Lightboxa (które zdjęcie jest otwarte? null = żadne)
    const [wybranyIndeks, setWybranyIndeks] = useState<number | null>(null);

    // Filtrowanie zdjęć
    const wyswietlaneZdjecia = aktywnaKategoria === "Wszystkie"
        ? wszystkieZdjecia
        : wszystkieZdjecia.filter(foto => foto.category === aktywnaKategoria);

    // Funkcje nawigacji
    const otworzLightbox = (index: number) => {
        setWybranyIndeks(index);
    };

    const zamknijLightbox = () => {
        setWybranyIndeks(null);
    };

    const nastepneZdjecie = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation(); // Zapobiega zamknięciu przy kliknięciu strzałki
        if (wybranyIndeks !== null) {
            setWybranyIndeks((prev) =>
                prev === wyswietlaneZdjecia.length - 1 ? 0 : (prev as number) + 1
            );
        }
    }, [wybranyIndeks, wyswietlaneZdjecia.length]);

    const poprzednieZdjecie = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (wybranyIndeks !== null) {
            setWybranyIndeks((prev) =>
                prev === 0 ? wyswietlaneZdjecia.length - 1 : (prev as number) - 1
            );
        }
    }, [wybranyIndeks, wyswietlaneZdjecia.length]);

    // Obsługa klawiatury (Strzałki i ESC)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (wybranyIndeks === null) return;
            if (e.key === "Escape") zamknijLightbox();
            if (e.key === "ArrowRight") nastepneZdjecie();
            if (e.key === "ArrowLeft") poprzednieZdjecie();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [wybranyIndeks, nastepneZdjecie, poprzednieZdjecie]);


    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center">
                Galeria Zdjęć
            </h1>

            {/* PRZYCISKI KATEGORII */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {kategorie.map((kat) => (
                    <button
                        key={kat}
                        onClick={() => { setAktywnaKategoria(kat); setWybranyIndeks(null); }}
                        className={`px-6 py-2 rounded-full font-medium transition duration-300 shadow-sm
              ${aktywnaKategoria === kat
                            ? "bg-blue-900 text-white shadow-md transform scale-105"
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                        }`}
                    >
                        {kat}
                    </button>
                ))}
            </div>

            {/* SIATKA ZDJĘĆ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {wyswietlaneZdjecia.map((foto, index) => (
                    <div
                        key={index}
                        onClick={() => otworzLightbox(index)} // Kliknięcie otwiera Lightbox
                        className="group relative h-64 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-200 cursor-pointer"
                    >
                        <Image
                            src={foto.src}
                            alt={foto.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        {/* Ikona lupy po najechaniu */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <span className="text-white text-4xl font-light">+</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- LIGHTBOX (MODAL) --- */}
            {wybranyIndeks !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={zamknijLightbox} // Kliknięcie w tło zamyka
                >
                    {/* Przycisk ZAMKNIJ (X) */}
                    <button
                        onClick={zamknijLightbox}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* Przycisk POPRZEDNIE (<) */}
                    <button
                        onClick={poprzednieZdjecie}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 bg-black/50 rounded-full hover:bg-black/80 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    {/* ZDJĘCIE POWIĘKSZONE */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh]"
                        onClick={(e) => e.stopPropagation()} // Kliknięcie w zdjęcie NIE zamyka
                    >
                        <Image
                            src={wyswietlaneZdjecia[wybranyIndeks].src}
                            alt={wyswietlaneZdjecia[wybranyIndeks].alt}
                            fill
                            className="object-contain" // Zachowuje proporcje
                            priority
                        />
                        {/* Opis pod zdjęciem */}
                        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                            <p className="text-white text-lg bg-black/50 inline-block px-4 py-1 rounded-full">
                                {wyswietlaneZdjecia[wybranyIndeks].alt}
                            </p>
                        </div>
                    </div>

                    {/* Przycisk NASTĘPNE (>) */}
                    <button
                        onClick={nastepneZdjecie}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50 bg-black/50 rounded-full hover:bg-black/80 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                </div>
            )}
        </div>
    );
}