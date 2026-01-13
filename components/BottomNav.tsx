"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100 pb-safe pt-3 px-6 md:hidden z-50 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between items-center max-w-sm mx-auto">
                <Link href="/" className={`flex flex-col items-center gap-1 group w-12 ${isActive('/') ? 'text-[var(--color-primary-green)]' : 'text-gray-300'}`}>
                    <svg className="w-7 h-7 transition-colors group-active:scale-90" fill={isActive('/') ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isActive('/') ? "0" : "2"} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <span className="text-[10px] font-bold">Accueil</span>
                </Link>
                <Link href="/a" className={`flex flex-col items-center gap-1 group w-12 ${isActive('/a') ? 'text-[var(--color-primary-green)]' : 'text-gray-300'}`}>
                    <svg className="w-7 h-7 transition-colors group-active:scale-90" fill={isActive('/a') ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isActive('/a') ? "0" : "2"} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="text-[10px] font-bold">Autour</span>
                </Link>
                <Link href="/s" className={`flex flex-col items-center gap-1 group w-12 ${isActive('/s') ? 'text-[var(--color-primary-green)]' : 'text-gray-300'}`}>
                    <svg className="w-7 h-7 transition-colors group-active:scale-90" fill={isActive('/s') ? "currentColor" : "none"} stroke="currentColor" strokeWidth={isActive('/s') ? "0" : "2"} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span className="text-[10px] font-bold">Recherche</span>
                </Link>
            </div>
        </nav>
    );
}
