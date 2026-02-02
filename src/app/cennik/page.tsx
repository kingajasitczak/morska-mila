export default function CennikPage() {
    // Tutaj wpisujesz dane do tabeli.
    // Możesz dowolnie zmieniać te wiersze.
    const cennikData = [
        { termin: "27.04 - 30.04", cena5: "200 PLN", cena6: "240 PLN", doplata: "30 PLN" },
        { termin: "Majówka (30.04 - 05.05)", cena5: "350 PLN", cena6: "390 PLN", doplata: "30 PLN" },
        { termin: "05.05 - 15.06", cena5: "250 PLN", cena6: "290 PLN", doplata: "30 PLN" },
        { termin: "15.06 - 22.06", cena5: "300 PLN", cena6: "350 PLN", doplata: "30 PLN" },
        { termin: "22.06 - 29.06", cena5: "350 PLN", cena6: "400 PLN", doplata: "30 PLN" },
        { termin: "29.06 - 06.07", cena5: "400 PLN", cena6: "450 PLN", doplata: "30 PLN" },
        { termin: "06.07 - 17.08 (Wysoki sezon)", cena5: "450 PLN", cena6: "500 PLN", doplata: "40 PLN" },
        { termin: "17.08 - 24.08", cena5: "350 PLN", cena6: "400 PLN", doplata: "30 PLN" },
        { termin: "24.08 - 31.08", cena5: "300 PLN", cena6: "350 PLN", doplata: "30 PLN" },
        { termin: "Wrzesień", cena5: "200 PLN", cena6: "240 PLN", doplata: "30 PLN" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 border-b-2 border-blue-100 pb-4">
                Cennik
            </h1>

            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Ceny w tabeli podane są w PLN i dotyczą wynajmu domku na jedną dobę.
                <br />
                Domki są przystosowane dla maksymalnie 8 osób.
            </p>

            {/* Kontener tabeli z przewijaniem na telefonach */}
            <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-white uppercase bg-blue-900">
                    <tr>
                        <th scope="col" className="px-6 py-4 border-r border-blue-800">
                            Termin
                        </th>
                        <th scope="col" className="px-6 py-4 text-center border-r border-blue-800">
                            Cena do 5 osób
                        </th>
                        <th scope="col" className="px-6 py-4 text-center border-r border-blue-800">
                            Cena za 6 osób
                        </th>
                        <th scope="col" className="px-6 py-4 text-center">
                            Dopłata za kolejną osobę
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {cennikData.map((wiersz, index) => (
                        <tr
                            key={index}
                            className={`border-b hover:bg-blue-50 transition ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            <td className="px-6 py-4 font-medium text-gray-900 border-r">
                                {wiersz.termin}
                            </td>
                            <td className="px-6 py-4 text-center border-r text-blue-900 font-bold">
                                {wiersz.cena5}
                            </td>
                            <td className="px-6 py-4 text-center border-r text-blue-900 font-bold">
                                {wiersz.cena6}
                            </td>
                            <td className="px-6 py-4 text-center text-gray-500">
                                {wiersz.doplata}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-800">
                <p className="font-bold mb-1">Ważne informacje:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>W okresie wakacyjnym (Lipiec - Sierpień) domki wynajmujemy jedynie na pobyty 7-dniowe (od soboty do soboty).</li>
                    <li>Pobyt rozpoczyna się o godz. 15.00 w dniu przyjazdu i kończy o godz. 10.00 w dniu wyjazdu.</li>
                    <li>Do ceny należy doliczyć opłatę klimatyczną wg stawek gminy Darłowo.</li>
                </ul>
            </div>
        </div>
    );
}