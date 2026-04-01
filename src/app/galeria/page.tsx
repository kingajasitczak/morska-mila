"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// KATEGORIE
const categories = [
    { id: "all", name: "Wszystko" },
    { id: "wnetrze", name: "W środku" },
    { id: "zewnatrz", name: "Na zewnątrz" },
    { id: "okolica", name: "Okolica" },
];

// ZDJĘCIA
const photos = [
    // WNĘTRZE
    { src: "/images/domki/nowe1.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/nowe2.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/2.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/3.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/4.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/6.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/7_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/8.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9a_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9b_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9c_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9d_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9e.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9f.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9g.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9h.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9i.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9j.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9m.jpg", category: "wnetrze", alt: "Sypialnie" },
    { src: "/images/domki/9n.jpg", category: "wnetrze", alt: "Łazienka" },
    { src: "/images/domki/9o.jpg", category: "wnetrze", alt: "Łazienka" },
    { src: "/images/domki/9p.jpg", category: "wnetrze", alt: "Łazienka" },



    // ZEWNĄTRZ
    { src: "/images/domki_z/1__.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/domki_z/2a.jpeg", category: "zewnatrz", alt: "Podwórko" },
    { src: "/images/domki_z/3.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/domki_z/9p.jpeg", category: "zewnatrz", alt: "Altana" },
    { src: "/images/domki_z/4.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/domki_z/5.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/domki_z/6.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/domki_z/7.jpg", category: "zewnatrz", alt: "Rowery" },
    { src: "/images/domki_z/8.jpg", category: "zewnatrz", alt: "Rowery" },
    { src: "/images/domki_z/9.jpg", category: "zewnatrz", alt: "Rowery" },
    { src: "/images/domki_z/9a.jpg", category: "zewnatrz", alt: "Rowery" },
    { src: "/images/domki_z/9b.jpeg", category: "zewnatrz", alt: "Plac zabaw" },
    { src: "/images/domki_z/9e.jpg", category: "zewnatrz", alt: "Rowery" },
    { src: "/images/domki_z/9f.jpeg", category: "zewnatrz", alt: "Altana" },
    { src: "/images/domki_z/9g.jpg", category: "zewnatrz", alt: "Altana" },
    { src: "/images/domki_z/9h.jpeg", category: "zewnatrz", alt: "Plac zabaw" },
    { src: "/images/domki_z/9i.jpeg", category: "zewnatrz", alt: "Plac zabaw" },
    { src: "/images/domki_z/9j.jpeg", category: "zewnatrz", alt: "Plac zabaw" },



    // OKOLICA
    { src: "/images/plaza/IMG_20190711_184510_BURST001_COVER.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_20190711_190902.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/received_212967716529541.jpeg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/received_215389286577217.jpeg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/received_415232669258059.jpeg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/received_631633164369864.jpeg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/received_705888203586468.jpeg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4922_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4923_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4939_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4942_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4943_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4944_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_4945_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_5356.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_5618_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/plaza/IMG_5621_.jpg", category: "okolica", alt: "Plaża" },
    { src: "/images/Kopan.jpg", category: "okolica", alt: "Mapa" },
];

export default function GaleriaPage() {
    const [filter, setFilter] = useState("all");
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

    // 1. Filtrujemy zdjęcia
    const filteredPhotos = filter === "all"
        ? photos
        : photos.filter((photo) => photo.category === filter);

    // FUNKCJE NAWIGACJI
    const openLightbox = (index: number) => {
        setSelectedPhotoIndex(index);
    };

    const closeLightbox = () => {
        setSelectedPhotoIndex(null);
    };

    const showNext = useCallback(() => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
    }, [selectedPhotoIndex, filteredPhotos.length]);

    const showPrev = useCallback(() => {
        if (selectedPhotoIndex === null) return;
        setSelectedPhotoIndex((prev) =>
            prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
    }, [selectedPhotoIndex, filteredPhotos.length]);

    // OBSŁUGA KLAWIATURY
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedPhotoIndex === null) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedPhotoIndex, showNext, showPrev]);

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">

            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Galeria Zdjęć
            </h1>

            {/* FILTRY */}
            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => { setFilter(cat.id); setSelectedPhotoIndex(null); }}
                        className={`px-6 py-2 rounded-full text-sm md:text-base font-medium transition duration-300 border ${
                            filter === cat.id
                                ? "bg-blue-900 text-white border-blue-900 shadow-md"
                                : "bg-white text-gray-600 border-gray-200 hover:border-blue-900 hover:text-blue-900"
                        }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* SIATKA ZDJĘĆ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="group relative h-64 w-full rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500 cursor-pointer"
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition duration-700"
                        />
                        {/* Ikonka lupki */}
                        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition duration-500 flex items-center justify-center">
               <span className="text-white opacity-0 group-hover:opacity-100 transition duration-500 text-4xl drop-shadow-lg">
                 +
               </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* LIGHTBOX (Pełny ekran) */}
            {selectedPhotoIndex !== null && (
                <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">

                    {/* Przycisk Zamknij (X) */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-[70]"
                    >
                        {/* POPRAWKA: Używamy className zamiast size */}
                        <FaTimes className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    {/* Strzałka w lewo */}
                    <button
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        className="absolute left-4 md:left-8 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition z-[70]"
                    >
                        {/* POPRAWKA: Używamy className zamiast md:size */}
                        <FaChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                    {/* Zdjęcie Główne */}
                    <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
                        <Image
                            src={filteredPhotos[selectedPhotoIndex].src}
                            alt={filteredPhotos[selectedPhotoIndex].alt}
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Podpis zdjęcia */}
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-white text-lg font-medium drop-shadow-md bg-black/50 inline-block px-4 py-1 rounded-full">
                                {filteredPhotos[selectedPhotoIndex].alt}
                            </p>
                        </div>
                    </div>

                    {/* Strzałka w prawo */}
                    <button
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                        className="absolute right-4 md:right-8 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition z-[70]"
                    >
                        <FaChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                    </button>

                </div>
            )}

        </div>
    );
}