import Link from 'next/link';

const Navbar = () => {
    // Tutaj definiujemy linki zgodnie z Twoją starą stroną
    const menuItems = [
        { name: 'Start', href: '/' },
        { name: 'O Nas', href: '/o-nas' },
        { name: 'Oferta', href: '/oferta' },
        { name: 'Cennik', href: '/cennik' },
        { name: 'Galeria', href: '/galeria' },
        { name: 'Kopań', href: '/kopan' },
        { name: 'Kontakt', href: '/kontakt' },
    ];

    return (
        <header className="bg-white shadow-md">
            {/* Pasek górny z kontaktem (kolor granatowy) */}
            <div className="bg-blue-900 text-white py-2 text-sm text-center">
                <span className="mx-2">📞 +48 607 ... ...</span>
                <span className="mx-2">✉️ kontakt@morska-mila.pl</span>
            </div>

            {/* Główne menu */}
            <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo (Na razie tekst, potem podmienimy na obrazek) */}
                <Link href="/" className="font-bold text-2xl text-blue-900 mb-4 md:mb-0 uppercase tracking-widest">
                    Morska Mila
                </Link>

                {/* Lista linków */}
                <ul className="flex flex-wrap gap-6 justify-center">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 font-medium transition uppercase text-sm"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;