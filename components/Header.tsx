import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-black tracking-tighter text-gray-900 group flex items-center">
                    Hey<span className="text-[var(--color-primary-green)]">nouth</span>
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent-yellow)] inline-block ml-1 mt-1 group-hover:scale-125 transition-transform shadow-sm"></span>
                </Link>

                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/a" className="text-sm font-bold text-gray-600 hover:text-[var(--color-primary-green)] transition-colors">
                        Autour de moi
                    </Link>
                    <Link href="/s" className="text-sm font-bold text-gray-600 hover:text-[var(--color-primary-green)] transition-colors">
                        Explorer
                    </Link>
                </nav>
            </div>
        </header>
    );
}
