import { places } from '@/data/places';
import PlaceCard from '@/components/PlaceCard';

export default function AroundMe() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Autour de moi</h1>
                <p className="text-gray-500">Commerces proches (simulation)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {places.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </div>
        </div>
    );
}
