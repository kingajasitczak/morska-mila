import Link from 'next/link';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
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
        <header className="bg-white shadow-md sticky top-0 z-50">

            {/* Pasek górny (Top Bar) - Granatowy */}
            <div className="bg-blue-900 text-white py-2 text-sm">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">

                    {/* Telefon */}
                    <div className="flex items-center gap-2 hover:text-blue-200 transition cursor-default">
                        <FaPhoneAlt className="w-3 h-3" />
                        <span className="font-bold tracking-wide">+48 798 093 006</span>
                    </div>

                    {/* Separator */}
                    <span className="hidden md:block text-blue-400">|</span>

                    <div className="flex items-center gap-2 hover:text-blue-200 transition cursor-default">
                        <FaPhoneAlt className="w-3 h-3" />
                        <span className="font-bold tracking-wide">+48 504 186 535</span>
                    </div>

                    <span className="hidden md:block text-blue-400">|</span>

                    {/* E-mail */}
                    <a href="mailto:poczta@morska-mila.pl" className="flex items-center gap-2 hover:text-blue-200 transition">
                        <FaEnvelope className="w-3 h-3" />
                        <span>poczta@morska-mila.pl</span>
                    </a>

                </div>
            </div>

            {/* Główne menu */}
            <nav className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">

                {/* LOGO */}
                <Link href="/" className="mb-4 md:mb-0 transition hover:opacity-90">
                    <Image
                        src="/images/logo-trasparent-30.png"
                        alt="Morska Mila Logo"
                        width={200}
                        height={60}
                        className="h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Lista linków */}
                <ul className="flex flex-wrap gap-4 md:gap-6 justify-center items-center">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                // ZMIANA: hover:text-blue-900 (Granatowy) - pasuje do paska na górze
                                className="text-gray-700 hover:text-blue-900 font-bold uppercase text-xs md:text-sm tracking-wide transition duration-300 relative group"
                            >
                                {item.name}

                                {/* ZMIANA: Pasek pod linkiem też jest teraz bg-blue-900 */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;