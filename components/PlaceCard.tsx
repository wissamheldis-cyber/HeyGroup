import Link from 'next/link';
import { Place } from '@/data/places';

export default function PlaceCard({ place }: { place: Place }) {
    return (
        <Link href={`/p/${place.slug}`} className="block group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col">
                {/* Generative Placeholder Image */}
                <div
                    className="h-48 w-full bg-cover bg-center relative"
                    style={{ backgroundColor: place.image || '#e5e7eb' }}
                >
                    {place.badge && (
                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#276135] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            {place.badge}
                        </span>
                    )}
                </div>

                <div className="p-4 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{place.category}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1 group-hover:text-[#276135] transition-colors">{place.name}</h3>

                    <p className="text-sm text-gray-400 mb-3">{place.city}</p>

                    <div className="mt-auto pt-3 border-t border-gray-50 flex justify-between items-center text-sm">
                        <span className="font-medium text-[#276135]">Voir la fiche</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
