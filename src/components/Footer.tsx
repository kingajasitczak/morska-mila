import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaCode } from 'react-icons/fa'; // Dodałem ikonę kodu dla smaczku

export default function Footer() {
    return (
        // Tło jasnoszare (bg-gray-100), tekst ciemnoszary (text-gray-600)
        <footer className="bg-gray-100 text-gray-600 py-12 mt-auto border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* KOLUMNA 1: LOGO I OPIS */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* LOGO */}
                        <div className="mb-6 relative h-16 w-48">
                            <Image
                                src="/images/logo-trasparent-30.png"
                                alt="Morska Mila Logo Stopka"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </div>

                        <p className="text-sm leading-relaxed mb-4 max-w-xs text-gray-500">
                            Komfortowe domki letniskowe w Kopaniu.
                            Idealne miejsce na rodzinny wypoczynek nad Bałtykiem.
                        </p>
                    </div>

                    {/* KOLUMNA 2: ADRES I E-MAIL */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-blue-900 font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2">
                            Adres
                        </h4>
                        <div className="space-y-2 text-sm">
                            <p>Kopań 61H</p>
                            <p>76-150 Darłowo</p>

                            <a href="mailto:poczta@morska-mila.pl" className="flex items-center justify-center md:justify-start gap-2 mt-4 text-blue-900 hover:text-blue-600 transition font-medium group">
                                <FaEnvelope className="group-hover:scale-110 transition" />
                                poczta@morska-mila.pl
                            </a>
                        </div>
                    </div>

                    {/* KOLUMNA 3: KONTAKT I SOCIAL MEDIA */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-blue-900 font-bold mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2">
                            Rezerwacje
                        </h4>

                        {/* Telefon granatowy i duży */}
                        <a
                            href="tel:+48798093006"
                            className="text-2xl text-blue-900 font-bold hover:text-blue-600 transition mb-6 block"
                        >
                            +48 798 093 006
                        </a>
                        <a
                            href="tel:+48504186535"
                            className="text-2xl text-blue-900 font-bold hover:text-blue-600 transition mb-6 block"
                        >
                            +48 504 186 535
                        </a>

                        <a
                            href="https://www.facebook.com/domkimorskamila"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-gray-600 hover:text-blue-700 transition group border border-gray-300 rounded-full px-4 py-2 hover:border-blue-600 hover:bg-white bg-white shadow-sm"
                        >
                            <FaFacebook size={20} className="text-blue-600" />
                            <span className="text-sm font-medium">Znajdź nas na Facebooku</span>
                        </a>
                    </div>

                </div>

                {/* DOLNY PASEK */}
                <div className="mt-12 pt-6 border-t border-gray-300 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Morska Mila. Wszelkie prawa zastrzeżone.</p>

                    {/* TWÓJ PODPIS */}
                    <div className="flex items-center gap-1">
                        <FaCode className="text-blue-400" />
                        <span>Projekt i wykonanie:</span>
                        <a
                            href="https://linktr.ee/kingajasitczak"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-gray-600 hover:text-blue-900 transition-colors duration-300"
                        >
                            Kinga Jasitczak
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}