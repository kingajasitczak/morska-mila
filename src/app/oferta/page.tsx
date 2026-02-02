import Image from "next/image";

export default function OfertaPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            {/* Nagłówek strony */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Nasza Oferta
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* LEWA KOLUMNA: Tekst */}
                <div className="text-gray-700 space-y-6 text-lg">
                    <p className="font-medium">
                        Oferujemy na wynajem 6 komfortowo wyposażonych, wygodnych 6/8-osobowych domków w zabudowie szeregowej.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="font-bold text-xl mb-4 text-blue-900">W każdym domku znajduje się:</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                <span><strong>Salon:</strong> rozkładany narożnik, TV, stół z krzesłami</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                <span><strong>Aneks kuchenny:</strong> lodówka, kuchenka indukcyjna, mikrofalówka, komplet naczyń</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                <span><strong>Łazienka:</strong> z prysznicem, umywalką i wc</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                <span><strong>Piętro:</strong> 2 sypialnie (w każdej łóżko małżeńskie i jednoosobowe)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2 font-bold">✓</span>
                                <span><strong>Taras:</strong> z krzesełkami i stolikiem kawowym</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-justify leading-relaxed text-base">
                        Domki położone są w odległości 200m od morza, do pięknej, piaszczystej, szerokiej plaży kilka minut spacerem.
                        Wszystkim, którzy chcą odpocząć od wielkomiejskiego zgiełku i chaosu przypadnie do gustu spokojna i zaciszna okolica.
                    </p>
                </div>

                {/* PRAWA KOLUMNA: Zdjęcie */}
                <div>
                    <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        {/* Upewnij się, że plik o tej nazwie jest w folderze public/images */}
                        <Image
                            src="/images/DSC_0660_123.jpg"
                            alt="Wnętrze domku Morska Mila"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="text-sm text-gray-500 mt-2 text-center italic">
                        Wnętrze naszych domków
                    </p>

                    <div className="mt-8 bg-blue-900 text-white p-6 rounded-xl shadow-lg">
                        <h4 className="font-bold text-lg mb-2">Dodatkowe udogodnienia</h4>
                        <p className="text-blue-100 text-sm">
                            Goście MORSKIEJ MILI mają do dyspozycji miejsce do grillowania, rowery i plac zabaw dla dzieci.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}