export default function KontaktPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center border-b pb-4">
                Kontakt
            </h1>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* LEWA KOLUMNA: Dane teleadresowe */}
                <div className="bg-blue-50 p-8 rounded-2xl shadow-sm border border-blue-100">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Morska Mila</h2>

                    <div className="space-y-6 text-lg text-gray-700">

                        {/* Adres */}
                        <div className="flex items-start">
                            <span className="text-3xl mr-4">📍</span>
                            <div>
                                <p className="font-bold">Adres:</p>
                                <p>Kopań (nr posesji...)</p>
                                <p>76-150 Darłowo</p>
                            </div>
                        </div>

                        {/* Telefon */}
                        <div className="flex items-start">
                            <span className="text-3xl mr-4">📞</span>
                            <div>
                                <p className="font-bold">Telefon:</p>
                                <a href="tel:+48607000000" className="text-blue-600 font-bold hover:underline">
                                    +48 607 ... ... (uzupełnij)
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start">
                            <span className="text-3xl mr-4">✉️</span>
                            <div>
                                <p className="font-bold">E-mail:</p>
                                <a href="mailto:kontakt@morska-mila.pl" className="text-blue-600 hover:underline">
                                    kontakt@morska-mila.pl
                                </a>
                            </div>
                        </div>

                        {/* Konto Bankowe (opcjonalnie) */}
                        <div className="flex items-start pt-4 border-t border-blue-200">
                            <span className="text-3xl mr-4">🏦</span>
                            <div>
                                <p className="font-bold">Dane do przelewu:</p>
                                <p className="text-sm">Nazwa odbiorcy...</p>
                                <p className="font-mono text-sm bg-white p-2 rounded border">
                                    00 0000 0000 0000 0000 0000 0000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PRAWA KOLUMNA: Mapa Google */}
                <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 relative bg-gray-200">
                    {/* Tutaj wstawiamy mapę. Aby to zrobić profesjonalnie, wchodzisz na Google Maps -> Kopań -> Udostępnij -> Umieść mapę
             i kopiujesz link "src". Na razie wstawiłem mapę ogólną Darłowa/Kopania.
          */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2334.665975765798!2d16.444!3d54.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDI2JzM4LjQiTiAxNsKwMjYnMzguNCJF!5e0!3m2!1spl!2spl!4v1600000000000!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>

            {/* SEKCJA: WAŻNE TELEFONY (Z Twojej bazy danych) */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Ważne telefony w okolicy</h3>
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Policja */}
                    <div className="bg-white p-6 rounded-xl shadow border text-center hover:shadow-md transition">
                        <div className="text-4xl mb-2">👮‍♂️</div>
                        <h4 className="font-bold text-lg">Policja</h4>
                        <p className="text-sm text-gray-500">Darłowo, ul. Rzemieślnicza 5</p>
                        <p className="font-bold text-blue-900 mt-2">997 / 94 314 22 07</p>
                    </div>

                    {/* Straż */}
                    <div className="bg-white p-6 rounded-xl shadow border text-center hover:shadow-md transition">
                        <div className="text-4xl mb-2">🚒</div>
                        <h4 className="font-bold text-lg">Straż Pożarna</h4>
                        <p className="text-sm text-gray-500">Darłowo, ul. Portowa 2</p>
                        <p className="font-bold text-red-600 mt-2">998 / 94 314 23 08</p>
                    </div>

                    {/* Pogotowie */}
                    <div className="bg-white p-6 rounded-xl shadow border text-center hover:shadow-md transition">
                        <div className="text-4xl mb-2">🚑</div>
                        <h4 className="font-bold text-lg">Pogotowie</h4>
                        <p className="text-sm text-gray-500">Darłowo, ul. M. C. Skłodowskiej 21</p>
                        <p className="font-bold text-blue-900 mt-2">999 / 94 314 25 88</p>
                    </div>

                </div>
            </div>
        </div>
    );
}