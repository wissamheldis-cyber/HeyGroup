import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 md:py-32">
      <div className="text-center max-w-2xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
            Hey<span className="text-[#276135]">Nouth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Découvrez les commerces autour de vous.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-sm mx-auto">
          <Link href="/a" className="btn-primary w-full text-center shadow-lg shadow-[#276135]/20">
            Voir autour de moi
          </Link>
          <Link href="/s" className="btn-secondary w-full text-center">
            Explorer par catégorie
          </Link>
        </div>

        <div className="pt-12 text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
          <p>Une nouvelle façon de vivre votre quartier. Soutenez les commerçants locaux.</p>
        </div>
      </div>
    </div>
  );
}
