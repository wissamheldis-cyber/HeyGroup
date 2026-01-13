import Link from 'next/link';
import { Place } from '@/data/places';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 md:py-32 bg-[var(--color-bg-cream)]">
      <div className="text-center max-w-2xl mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 drop-shadow-sm">
            Hey<span className="text-[var(--color-primary-green)]">nouth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Découvrez les commerces autour de vous.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full max-w-sm mx-auto">
          <Link href="/a" className="btn-primary w-full text-center flex items-center justify-center gap-2 text-lg">
            <span>Voir autour de moi</span>
          </Link>
          <Link href="/s" className="btn-secondary w-full text-center flex items-center justify-center gap-2 text-lg">
            <span>Explorer</span>
          </Link>
        </div>

        <div className="pt-16 text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
          <p className="font-medium">Une nouvelle façon de vivre votre quartier. <br />Soutenez les commerçants locaux.</p>
        </div>
      </div>
    </div>
  );
}
