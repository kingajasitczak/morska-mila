import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col">

            {/* 1. SEKCJA HERO (Wielkie zdjęcie na górze) */}
            <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
                {/* Zdjęcie w tle */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/DSC_0660_123.jpg" // Upewnij się, że masz to zdjęcie. Jeśli nie, zmień na DSC_0660_123.jpg
                        alt="Morska Mila Kopań"
                        fill
                        className="object-cover brightness-75" // brightness przyciemnia zdjęcie, żeby napisy były czytelne
                        priority
                    />
                </div>

                {/* Napisy na środku */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md tracking-wide">
                        MORSKA MILA
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md font-light">
                        Komfortowe domki letniskowe między morzem a jeziorem
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            href="/oferta"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
                        >
                            Zobacz ofertę
                        </Link>
                        <Link
                            href="/kontakt"
                            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
                        >
                            Skontaktuj się
                        </Link>
                    </div>
                </div>
            </div>

            {/* 2. SEKCJA "O NAS" (Tekst pod zdjęciem) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center md:text-left">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Tekst */}
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Serdecznie Witamy</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    <strong>MORSKA MILA</strong> to wybudowany w połowie 2018 r. kompleks domków letniskowych,
                                    położony w cichym, spokojnym miejscu, w miejscowości Kopań k. Darłówka.
                                </p>
                                <p>
                                    Domki położone są w odległości 200m od morza, kilka minut spacerem do plaży.
                                    Spokojna i zaciszna okolica przypadnie do gustu wszystkim, którzy cenią sobie odpoczynek
                                    z dala od wielkomiejskiego zgiełku.
                                </p>
                            </div>
                        </div>

                        {/* Drugie mniejsze zdjęcie obok tekstu */}
                        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition duration-500">
                            {/* Tu używamy innego zdjęcia, np. wnętrza */}
                            <Image
                                src="/images/DSC_0660_123.jpg"
                                alt="Wnętrze domku"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SEKCJA ATUTY (Ikony/Karty) */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Dlaczego warto nas odwiedzić?</h2>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Karta 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="text-4xl mb-4">🏠</div>
                            <h3 className="text-xl font-bold mb-2">Komfortowe Domki</h3>
                            <p className="text-gray-600">Nowoczesne, piętrowe domki z pełnym wyposażeniem, idealne dla 6-8 osób.</p>
                        </div>
                        {/* Karta 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="text-4xl mb-4">🌊</div>
                            <h3 className="text-xl font-bold mb-2">Blisko Morza</h3>
                            <p className="text-gray-600">Tylko 200 metrów do szerokiej, piaszczystej plaży. Słychać szum fal!</p>
                        </div>
                        {/* Karta 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                            <div className="text-4xl mb-4">b🚴</div>
                            <h3 className="text-xl font-bold mb-2">Aktywny Wypoczynek</h3>
                            <p className="text-gray-600">Rowery dla gości, plac zabaw dla dzieci i bliskość ścieżek rowerowych R10.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}