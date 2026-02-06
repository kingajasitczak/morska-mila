"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// KATEGORIE
const categories = [
    { id: "all", name: "Wszystko" },
    { id: "wnetrze", name: "Wnętrze" },
    { id: "zewnatrz", name: "Zewnątrz" },
    { id: "okolica", name: "Okolica" },
];

// ZDJĘCIA
const photos = [
    // WNĘTRZE
    { src: "/images/domki/1.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/2.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/3.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/4.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/5.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/6.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/7_.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/8.jpg", category: "wnetrze", alt: "Salon z aneksem" },
    { src: "/images/domki/9.jpg", category: "wnetrze", alt: "Salon z aneksem" },


    // ZEWNĄTRZ
    { src: "/images/DSC_0660_123.jpg", category: "zewnatrz", alt: "Domki z zewnątrz" },
    { src: "/images/DSC_0663.jpg", category: "zewnatrz", alt: "Taras" },
    { src: "/images/Panorama1.jpg", category: "zewnatrz", alt: "Panorama ośrodka" },

    // OKOLICA
    { src: "/images/Kopan.jpg", category: "okolica", alt: "Okolica i jezioro" },
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