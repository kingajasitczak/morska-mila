import Image from "next/image";
import {
    FaTv,
    FaUtensils,
    FaBed,
    FaShower,
    FaCar,
    FaCheck,
    FaCoffee,
    FaFireAlt,
    FaBicycle // Import ikonki roweru
} from "react-icons/fa";

export default function OfertaPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">

            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Oferta Domków
            </h1>

            {/* KRÓTKI WSTĘP + ZDJĘCIE */}
            <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
                <div className="md:w-1/2 space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Oferujemy Państwu <strong>6 nowoczesnych, drewnianych domków letniskowych</strong>.
                        Każdy domek jest piętrowy i przeznaczony dla maksymalnie <strong>8 osób</strong>.
                    </p>
                    <p>
                        Przestrzeń o powierzchni ok. 50 m² została zaprojektowana tak, aby zapewnić swobodę i wygodę zarówno rodzinom z dziećmi, jak i grupom przyjaciół.
                    </p>

                    {/* SZYBKIE ATUTY */}
                    <div className="flex flex-wrap gap-6 mt-4">
                        <div className="flex items-center gap-2 text-blue-900 font-medium">
                            <FaCheck className="text-blue-400" /> Max. 8 Osób
                        </div>

                        <div className="flex items-center gap-2 text-blue-900 font-medium">
                            <FaCheck className="text-blue-400" /> 200m do Morza
                        </div>
                    </div>
                </div>

                {/* ZDJĘCIE */}
                <div className="md:w-1/2 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/domki_z/1__.jpg"
                        alt="Domki Morska Mila"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* SZCZEGÓŁY WYPOSAŻENIA - GRID */}
            <div className="grid md:grid-cols-3 gap-10 mb-16 items-start">

                {/* KOLUMNA 1: PARTER */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 border-b border-gray-100 pb-2">Parter</h3>

                    {/* Salon */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaTv size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Salon</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Rozkładana sofa narożna, duży stół z krzesłami oraz telewizor LCD.
                            </p>
                        </div>
                    </div>

                    {/* Kuchnia */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaUtensils size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Aneks Kuchenny</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Lodówka, płyta indukcyjna (2 palniki), czajnik, komplet naczyń i garnków.
                            </p>
                        </div>
                    </div>

                    {/* Łazienka */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaShower size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Łazienka</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Wygodna kabina prysznicowa, toaleta oraz umywalka z szafką.
                            </p>
                        </div>
                    </div>
                </div>


                {/* KOLUMNA 2: PIĘTRO */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 border-b border-gray-100 pb-2">Piętro</h3>

                    {/* Sypialnia 1 */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaBed size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Sypialnia 1</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Jedno łóżko podwójne, jedno łóżko pojedyncze oraz komoda na ubrania.
                            </p>
                        </div>
                    </div>

                    {/* Sypialnia 2 */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaBed size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Sypialnia 2</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Jedno łóżko podwójne, jedno łóżko pojedyncze oraz komoda na ubrania.
                            </p>
                        </div>
                    </div>

                    {/* Dodatki */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaCheck size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Pościel</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Zapewniamy komplet świeżej pościeli dla wszystkich gości w cenie pobytu.
                            </p>
                        </div>
                    </div>
                </div>


                {/* KOLUMNA 3: NA ZEWNĄTRZ */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 border-b border-gray-100 pb-2">Na zewnątrz</h3>

                    {/* Taras */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaCoffee size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Prywatny Taras</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Zadaszony taras przed domkiem, wyposażony w stolik i krzesełka.
                            </p>
                        </div>
                    </div>

                    {/* Grill i Atrakcje (DODANO ROWERY I PLAC ZABAW) */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaBicycle size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Rowery i Rekreacja</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Do dyspozycji gości są rowery, plac zabaw dla dzieci oraz altana z grillem.
                            </p>
                        </div>
                    </div>

                    {/* Parking i Wifi */}
                    <div className="flex items-start gap-4 group">
                        <div className="bg-blue-50 p-3 rounded-xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition shadow-sm">
                            <FaCar size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-800 mb-1">Media i Parking</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Zapewniamy bezpłatne miejsce parkingowe na terenie posesji oraz dostęp do WiFi.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* INFORMACJE DODATKOWE */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Warto wiedzieć</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                        <span className="text-blue-400">●</span> Doba hotelowa zaczyna się o 15:00, a kończy o 10:00.
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-400">●</span> Nie zapewniamy ręczników (prosimy o zabranie własnych).
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-400">●</span> Cena pobytu nie uwzględnia opłaty klimatycznej (wg stawek Gminy Darłowo).
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-blue-400">●</span> Możliwość dostawienia łóżeczka turystycznego (po uzgodnieniu).
                    </li>
                </ul>
            </div>

        </div>
    );
}