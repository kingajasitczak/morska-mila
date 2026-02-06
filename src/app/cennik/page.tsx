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
    // DANE DO TABELI - Pamiętaj, aby uzupełnić tutaj swoje ceny!
    const cennik = [
        {
            termin: "Majówka (01.05 - 05.05)",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
        {
            termin: "Boże Ciało (30.05 - 02.06)",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
        {
            termin: "Czerwiec (do 23.06)",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
        {
            termin: "Sezon Wysoki (24.06 - 20.08)",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
        {
            termin: "Końcówka Sierpnia (od 21.08)",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
        {
            termin: "Wrzesień",
            cena5: "000 zł",
            cena6: "000 zł",
            dostawka: "+00 zł"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">

            {/* NAGŁÓWEK */}
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 border-b-2 border-blue-100 pb-4">
                Cennik
            </h1>

            <div className="grid lg:grid-cols-3 gap-12 items-start">

                {/* LEWA KOLUMNA: Tabela cen (Szersza) */}
                <div className="lg:col-span-2">
                    <p className="text-gray-600 mb-6 text-lg">
                        Poniższe ceny dotyczą wynajmu domku za jedną dobę.
                        W sezonie wysokim preferujemy pobyty tygodniowe (od soboty do soboty).
                    </p>

                    {/* Kontener z przewijaniem (dla urządzeń mobilnych) */}
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                            <tr className="bg-blue-900 text-white text-sm uppercase tracking-wider">
                                <th className="p-4 font-bold w-1/3">Termin</th>
                                <th className="p-4 font-bold text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaUserFriends size={16} /> 5 Osób
                                    </div>
                                </th>
                                <th className="p-4 font-bold text-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaUserFriends size={16} /> 6 Osób
                                    </div>
                                </th>
                                <th className="p-4 font-bold text-center text-blue-200">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaPlus size={16} /> Kolejna os.
                                    </div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm md:text-base">
                            {cennik.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-gray-100 hover:bg-blue-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                                >
                                    <td className="p-4 flex items-center gap-3 font-bold text-blue-900">
                                        <FaCalendarAlt className="text-blue-400 shrink-0" />
                                        {item.termin}
                                    </td>
                                    <td className="p-4 text-center font-medium">
                                        {item.cena5}
                                    </td>
                                    <td className="p-4 text-center font-bold text-blue-900">
                                        {item.cena6}
                                    </td>
                                    <td className="p-4 text-center text-gray-500">
                                        {item.dostawka}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex items-start gap-3 text-sm text-gray-500 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <FaExclamationCircle className="mt-1 text-blue-400 shrink-0 text-lg" />
                        <p>
                            Maksymalna liczba osób w domku to <strong>8</strong>.
                            Dzieci do lat 3 nie są wliczane do ceny, jeśli śpią z rodzicami (bez dodatkowej pościeli).
                            W cenę wliczone są media (prąd, woda) oraz jedno miejsce parkingowe.
                        </p>
                    </div>
                </div>


                {/* PRAWA KOLUMNA: Opłaty i Zasady */}
                <div className="space-y-8">

                    {/* Opłaty dodatkowe (Tylko Klimatyczna) */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <FaMoneyBillWave className="text-blue-400" /> Opłaty dodatkowe
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-50 p-2 rounded-lg text-blue-400">
                                    <FaUmbrellaBeach size={16} />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">Opłata klimatyczna</p>
                                    <p className="text-sm text-gray-600">Płatna na miejscu gotówką wg aktualnych stawek Urzędu Gminy Darłowo.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ważne informacje */}
                    <div className="bg-blue-900 text-white p-6 rounded-2xl shadow-md">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <FaClock className="text-blue-300" /> Rezerwacja
                        </h3>
                        <ul className="space-y-3 text-sm text-blue-100">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>Doba zaczyna się o <strong>15:00</strong> w dniu przyjazdu.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>Doba kończy się o <strong>10:00</strong> w dniu wyjazdu.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>Warunkiem rezerwacji jest wpłata zadatku (30%).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400 font-bold">•</span>
                                <span>Pozostała kwota płatna w dniu przyjazdu (gotówką).</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}