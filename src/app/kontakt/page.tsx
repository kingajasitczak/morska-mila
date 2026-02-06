import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope
} from 'react-icons/fa';

export default function KontaktPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 border-b-2 border-blue-100 pb-4">
                Kontakt
            </h1>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">

                {/* LEWA KOLUMNA: Dane Kontaktowe */}
                <div className="space-y-10">

                    <div className="prose">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">Jesteśmy do dyspozycji</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Masz pytania dotyczące rezerwacji lub wyposażenia domków?
                            Zadzwoń do nas lub napisz. Odpowiadamy najszybciej jak to możliwe.
                        </p>
                    </div>

                    <div className="space-y-8 mt-8">

                        {/* Adres */}
                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                                <FaMapMarkerAlt size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Lokalizacja</p>
                                <p className="text-xl text-blue-900 font-medium">Kopań 61H</p>
                                <p className="text-gray-600">76-150 Darłowo</p>
                            </div>
                        </div>

                        {/* Telefon */}
                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                                <FaPhoneAlt size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Zadzwoń do nas</p>
                                <a href="tel:+48798093006" className="text-2xl text-blue-900 font-bold hover:text-blue-600 transition block">
                                    +48 798 093 006
                                </a>
                                <a href="tel:+48504186535" className="text-2xl text-blue-900 font-bold hover:text-blue-600 transition block">
                                    +48 504 186 535
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-5 group">
                            <div className="bg-blue-50 p-4 rounded-2xl text-blue-400 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                                <FaEnvelope size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Napisz e-mail</p>
                                <a href="mailto:poczta@morska-mila.pl" className="text-xl text-blue-900 font-medium hover:text-blue-600 transition">
                                    poczta@morska-mila.pl
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* PRAWA KOLUMNA: Mapa Google */}
                <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white relative bg-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.5304211711996!2d16.412707445927698!3d54.46186251038343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe2d7beb9484db%3A0x3067a819303ffcd6!2sMorska%20Mila!5e0!3m2!1spl!2spl!4v1770398378072!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}