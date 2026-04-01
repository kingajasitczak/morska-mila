import Image from "next/image";
import { FaWater, FaBicycle } from "react-icons/fa"; // Importujemy profesjonalne ikony

export default function KopanPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">

            {/* NAGŁÓWEK - Styl spójny z resztą strony (lewa strona + linia) */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Miejscowość Kopań
            </h1>

            {/* ZDJĘCIE GŁÓWNE */}
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl mb-12">
                <Image
                    src="/images/plaza/IMG_5356.jpg"
                    alt="Plaża"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-12 items-start">

                {/* LEWA STRONA: Tekst główny (2/3 szerokości) */}
                <div className="md:col-span-2 text-gray-700 text-lg leading-relaxed space-y-6 text-justify">
                    <p>
                        <span className="font-bold text-blue-900">Kopań</span> (do 1945 niem. <em>Kopahn</em>) – wieś w Polsce położona w województwie zachodniopomorskim,
                        w powiecie sławieńskim, w gminie Darłowo.
                    </p>

                    <p>
                        Miejscowość ma nazwę o słowiańskim pochodzeniu, która oznacza "pagórek" albo "wzgórze".
                        To bardzo trafne określenie, ponieważ Kopań leży na malowniczym morenowym wzniesieniu.
                        Dzięki temu roztacza się stąd niesamowita, daleko sięgająca perspektywa widokowa
                        zarówno na <strong>Jezioro Kopań</strong>, jak i na <strong>Morze Bałtyckie</strong>.
                    </p>

                    <p>
                        Dawniej Kopań charakteryzował się tradycyjnym budownictwem zagrodowym z XVIII/XIX wieku.
                        Dziś jest to dynamicznie rozwijająca się miejscowość letniskowa, która jednak zachowała swój
                        spokojny, sielski charakter, odróżniający ją od głośnych kurortów.
                    </p>
                </div>

                {/* PRAWA STRONA: Atuty (1/3 szerokości) - Bez ramek, nowoczesne ikony */}
                <div className="space-y-8 mt-4 md:mt-0">

                    {/* Atut 1: Morze i Jezioro */}
                    <div className="flex flex-col items-start gap-3 group">
                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition duration-300 shadow-sm">
                            <FaWater size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Morze i Jezioro</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Unikalne położenie. Jednego dnia plażujesz nad Bałtykiem, a drugiego łowisz ryby w jeziorze.
                            </p>
                        </div>
                    </div>

                    {/* Atut 2: Rower */}
                    <div className="flex flex-col items-start gap-3 group">
                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition duration-300 shadow-sm">
                            <FaBicycle size={28} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-blue-900 mb-2">Szlak R10</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Przez miejscowość przebiega słynny nadmorski szlak rowerowy R10, idealny na wycieczki do Darłówka lub Jarosławca.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}