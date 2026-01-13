import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:py-20 bg-[var(--color-bg-cream)] min-h-[80vh]">
      <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center">

        {/* Mascot Nouth */}
        <div className="relative w-40 h-40 md:w-56 md:h-56 animate-in fade-in zoom-in duration-700">
          <Image
            src="/image/nouth.png"
            alt="Nouth - Mascotte HeyNouth"
            fill
            className="object-contain drop-shadow-xl"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 drop-shadow-sm">
            Hey<span className="text-[var(--color-primary-green)]">nouth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-lg mx-auto leading-tight">
            Découvrez et soutenez vos <br className="hidden md:block" /> commerces de proximité.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full max-w-sm mx-auto pt-4">
          <Link href="/a" className="btn-primary w-full text-center flex items-center justify-center gap-2 text-lg group">
            <span>Voir autour de moi</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </Link>
          <Link href="/s" className="btn-secondary w-full text-center flex items-center justify-center gap-2 text-lg">
            <span>Explorer</span>
          </Link>
        </div>

        <div className="pt-12 text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
          <p className="font-medium">Une nouvelle façon de vivre votre quartier.</p>
        </div>
      </div>
    </div>
  );
}
