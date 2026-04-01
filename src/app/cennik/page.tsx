import {
    FaCalendarAlt,
    FaMoneyBillWave,
    FaClock,
    FaUmbrellaBeach,
    FaExclamationCircle,
    FaUserFriends,
    FaPlus
} from 'react-icons/fa';

export default function CennikPage() {
    // DANE DO TABELI
    const cennik = [
        {
            termin: "Cały sezon",
            cenaBazowa: "500 zł / doba",
            dostawka: "+ 30 zł / doba"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">

            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Cennik
            </h1>

            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-start">

                {/* LEWA KOLUMNA: Szersza (Tabela + Dodatkowe informacje) */}
                <div className="lg:col-span-2 space-y-8">

                    <p className="text-gray-600 text-lg">
                        Wakacje to czas dla Was! Zapraszamy do rezerwacji pobytów od pierwszego weekendu po zakończeniu roku szkolnego <strong>(27 czerwca 2026 r.)</strong> aż do ostatnich dni lata – sezon zamykamy w ostatni weekend sierpnia <strong>(29 sierpnia 2026 r.)</strong>.
                    </p>

                    {/* Tabela */}
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                            <tr className="bg-blue-900 text-white text-sm uppercase tracking-wider">
                                <th className="p-4 font-bold w-1/3">Termin</th>
                                <th className="p-4 font-bold text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaUserFriends size={16} /> Cena bazowa (do 5 osób)
                                    </div>
                                </th>
                                <th className="p-4 font-bold text-center text-blue-200">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaPlus size={16} /> Każda dodatkowa osoba
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm md:text-base">
                            {cennik.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 bg-white hover:bg-blue-50 transition"
                                >
                                    <td className="p-4 flex items-center gap-3 font-bold text-blue-900">
                                        <FaCalendarAlt className="text-blue-400 shrink-0" />
                                        {item.termin}
                                    </td>
                                    <td className="p-4 text-center font-bold text-blue-900">
                                        {item.cenaBazowa}
                                    </td>
                                    <td className="p-4 text-center text-gray-500 font-medium">
                                        {item.dostawka}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Dwa kafelki pod tabelą (wyrównujące lewą stronę) */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        {/* Box Informacyjny */}
                        <div className="flex items-start gap-3 text-sm text-gray-600 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                            <FaExclamationCircle className="mt-1 text-blue-400 shrink-0 text-xl" />
                            <p className="leading-relaxed">
                                Maksymalna liczba osób w domku to <strong>8</strong>.
                                Dzieci do roczku nie są wliczane do ceny.
                                W cenę wliczone są media (prąd, woda) oraz jedno miejsce parkingowe.
                            </p>
                        </div>

                        {/* Box Opłaty Dodatkowe */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-start gap-4">
                            <div className="bg-blue-50 p-3 rounded-xl text-blue-400 shrink-0 mt-1">
                                <FaUmbrellaBeach size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                                    Opłata klimatyczna
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Płatna na miejscu gotówką wg aktualnych stawek Urzędu Gminy Darłowo.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* PRAWA KOLUMNA: Węższa (Sidebar z rezerwacją) */}
                <div className="lg:col-span-1">

                    {/* Ważne informacje / Rezerwacja */}
                    <div className="bg-blue-900 text-white p-6 md:p-8 rounded-2xl shadow-md sticky top-6">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <FaClock className="text-blue-300" /> Rezerwacja
                        </h3>
                        <ul className="space-y-4 text-sm md:text-base text-blue-50">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">Doba zaczyna się o <strong>15:00</strong> w dniu przyjazdu.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">Doba kończy się o <strong>10:00</strong> w dniu wyjazdu.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">Warunkiem rezerwacji jest wpłata zadatku o uzgodnionej wysokości.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold mt-0.5">•</span>
                                <span className="leading-relaxed">Pozostała kwota płatna w dniu przyjazdu.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}