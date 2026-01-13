import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-40 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-screen-xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-105">
                        <Image
                            src="/image/logo.png"
                            alt="HeyNouth Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-gray-900">
                        Hey<span className="text-[var(--color-primary-green)]">nouth</span>
                    </span>
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
