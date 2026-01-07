import { places } from '@/data/places';
import PlaceCard from '@/components/PlaceCard';
import CategoryChips from '@/components/CategoryChips';

export default function SearchPage() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative mb-6">
                    <input
                        type="text"
                        placeholder="Rechercher un commerce, un produit..."
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#276135] focus:border-transparent text-gray-900 placeholder-gray-400"
                        readOnly // Visual only
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                <CategoryChips />
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Suggestions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {places.map((place) => (
                        <PlaceCard key={place.id} place={place} />
                    ))}
                </div>
            </div>
        </div>
    );
}
