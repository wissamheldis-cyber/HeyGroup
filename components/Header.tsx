import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-40">
            <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 group">
                    Hey<span className="text-[#276135]">Nouth</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#276135] inline-block ml-0.5 mb-0.5 group-hover:animate-pulse"></span>
                </Link>

                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/a" className="text-sm font-medium text-gray-600 hover:text-[#276135] transition-colors">
                        Autour de moi
                    </Link>
                    <Link href="/s" className="text-sm font-medium text-gray-600 hover:text-[#276135] transition-colors">
                        Explorer
                    </Link>
                </nav>
            </div>
        </header>
    );
}
