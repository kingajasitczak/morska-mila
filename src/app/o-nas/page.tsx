import Image from "next/image";
import {
    FaHeart,
    FaUmbrellaBeach,
    FaBicycle,
    FaStar
} from "react-icons/fa";

export default function ONasPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">

            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                O Nas
            </h1>

            {/* SEKJA GŁÓWNA: TEKST + ZDJĘCIE */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

                {/* Tekst */}
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
                    <p>
                        Witamy w <strong>Morskiej Mili</strong> – miejscu, które powstało z marzeń o idealnym wypoczynku nad Bałtykiem.
                        Nasz ośrodek znajduje się w malowniczej miejscowości <strong>Kopań</strong>, tuż obok Darłowa.
                    </p>
                    <p>
                        To, co nas wyróżnia, to idealny balans między ciszą a bliskością morskich atrakcji. Jesteśmy położeni w spokojnej okolicy, która gwarantuje prawdziwy odpoczynek od zgiełku miasta. Jednocześnie nasi Goście mają zaledwie <strong>200 metrów</strong> do szerokiej, piaszczystej i niezatłoczonej plaży, do której prowadzi prosta droga. To idealne miejsce dla osób szukających prywatności, a jednocześnie chcących mieć atrakcje Darłowa i Darłówka w zasięgu niedługiego spaceru lub przejażdżki rowerowej.
                    </p>
                    <p>
                        Ośrodek istnieje od <strong>2018 roku</strong>. Oddajemy do Państwa dyspozycji 6 nowoczesnych,
                        drewnianych domków, które zaprojektowaliśmy tak, aby zapewnić komfort, prywatność i domową atmosferę.
                    </p>
                </div>

                <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
                    <Image
                        src="/images/plaza/IMG_20190711_184510_BURST001_COVER.jpg"
                        alt="Domki z zewnątrz"
                        fill
                        className="object-cover hover:scale-105 transition duration-700"
                    />
                </div>
            </div>

            {/* SEKJA WARTOŚCI (Ikony) */}
            <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Dlaczego warto nas odwiedzić?</h2>
                    <p className="text-gray-600 mt-2">Stawiamy na jakość i zadowolenie naszych Gości</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Filar 1: Lokalizacja */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
                        <div className="bg-blue-50 p-4 rounded-full text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300 mb-4">
                            <FaUmbrellaBeach size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Blisko Plaży</h3>
                        <p className="text-sm text-gray-600">
                            Tylko 200 metrów dzieli nas od szerokiej, piaszczystej i spokojnej plaży.
                        </p>
                    </div>

                    {/* Filar 2: Cisza */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
                        <div className="bg-blue-50 p-4 rounded-full text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300 mb-4">
                            <FaHeart size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Spokój</h3>
                        <p className="text-sm text-gray-600">
                            Idealne miejsce dla rodzin szukających ucieczki od zgiełku miasta i tłumów.
                        </p>
                    </div>

                    {/* Filar 3: Standard */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
                        <div className="bg-blue-50 p-4 rounded-full text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300 mb-4">
                            <FaStar size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Komfort</h3>
                        <p className="text-sm text-gray-600">
                            Nowoczesne domki oferują pełne wyposażenie, przytulne wnętrza oraz zadaszony taras.
                        </p>
                    </div>

                    {/* Filar 4: Aktywność */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center text-center group">
                        <div className="bg-blue-50 p-4 rounded-full text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300 mb-4">
                            <FaBicycle size={28} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-800 mb-2">Aktywność</h3>
                        <p className="text-sm text-gray-600">
                            Rowerami (dostępnymi na miejscu) pojedziesz szlakiem R10 wzdłuż wybrzeża.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}