export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10 mt-auto border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* KOLUMNA 1: MARKA I OPIS */}
                    <div>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">
                            Morska Mila
                        </h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Komfortowe domki letniskowe w Kopaniu.
                            Idealne miejsce na rodzinny wypoczynek między morzem a jeziorem.
                        </p>
                    </div>

                    {/* KOLUMNA 2: ADRES I E-MAIL */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                            Adres
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p>Kopań (numer posesji)</p>
                            <p>76-150 Darłowo</p>
                            <a href="mailto:kontakt@morska-mila.pl" className="block mt-2 text-blue-400 hover:text-blue-300 transition">
                                ✉️ kontakt@morska-mila.pl
                            </a>
                        </div>
                    </div>

                    {/* KOLUMNA 3: KONTAKT I SOCIAL MEDIA */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
                            Rezerwacje
                        </h4>

                        {/* Numer telefonu - teraz jako zwykły tekst, nie przycisk */}
                        <a
                            href="tel:+48607000000"
                            className="text-2xl text-white font-bold hover:text-blue-400 transition mb-4"
                        >
                            +48 607 ... ...
                        </a>

                        {/* Ikonka Facebooka (Standard w stopce) */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition group"
                        >
                            <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-blue-600 flex items-center justify-center transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </div>
                            <span className="text-sm">Odwiedź nas na Facebooku</span>
                        </a>
                    </div>

                </div>

                {/* DOLNY PASEK - TYLKO COPYRIGHT */}
                <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Morska Mila. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}