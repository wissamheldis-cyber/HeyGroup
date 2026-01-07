"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 md:hidden z-50">
            <div className="flex justify-between items-center max-w-md mx-auto">
                <Link href="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-[#276135]' : 'text-gray-400'}`}>
                    <div className="w-6 h-6 bg-current rounded-full opacity-20" /> {/* Placeholder Icon */}
                    <span className="text-xs font-medium">Accueil</span>
                </Link>
                <Link href="/a" className={`flex flex-col items-center gap-1 ${isActive('/a') ? 'text-[#276135]' : 'text-gray-400'}`}>
                    <div className="w-6 h-6 bg-current rounded-full opacity-20" />
                    <span className="text-xs font-medium">Autour</span>
                </Link>
                <Link href="/s" className={`flex flex-col items-center gap-1 ${isActive('/s') ? 'text-[#276135]' : 'text-gray-400'}`}>
                    <div className="w-6 h-6 bg-current rounded-full opacity-20" />
                    <span className="text-xs font-medium">Recherche</span>
                </Link>
            </div>
        </nav>
    );
}
