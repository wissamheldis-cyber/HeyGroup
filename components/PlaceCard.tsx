import Link from 'next/link';
import { Place } from '@/data/places';

export default function PlaceCard({ place }: { place: Place }) {
    return (
        <Link href={`/p/${place.slug}`} className="block group h-full">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col relative">
                {/* Generative Placeholder Image */}
                <div
                    className="h-56 w-full bg-cover bg-center relative"
                    style={{ backgroundColor: place.image || '#e5e7eb' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
                    {place.badge && (
                        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-[var(--color-primary-green)] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm uppercase tracking-wide">
                            {place.badge}
                        </span>
                    )}
                </div>

                <div className="p-5 flex-1 flex flex-col relative">
                    <div className="absolute -top-6 right-4 w-10 h-10 bg-[var(--color-primary-green)] rounded-full flex items-center justify-center shadow-lg text-white border-2 border-white group-hover:bg-[var(--color-accent-yellow)] group-hover:text-black transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    </div>

                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{place.category}</span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 leading-tight mb-1 group-hover:text-[var(--color-primary-green)] transition-colors">{place.name}</h3>

                    <p className="text-sm font-medium text-gray-500 mb-4 flex items-center gap-1">
                        <svg className="w-3 h-3 text-[var(--color-primary-green)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        {place.city}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-sm">
                        <span className="font-bold text-[var(--color-primary-green)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Voir la fiche
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
