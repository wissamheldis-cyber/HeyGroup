import Link from 'next/link';
import { places } from '@/data/places';
import PlaceCard from '@/components/PlaceCard';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const categories = Array.from(new Set(places.map(p => p.category.toLowerCase())));
    return categories.map((category) => ({
        category,
    }));
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
    const params = await props.params;
    const categoryName = decodeURIComponent(params.category);
    const filteredPlaces = places.filter(
        (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (filteredPlaces.length === 0) {
        // In a real app we might show empty state, but for static params we can 404 if unknown category
        // Or just show empty. Let's show empty state if valid category but no places (unlikely with static params)
        // But if visual exploration allows typing text, we should handle it.
    }

    // Capitalize for display
    const displayCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/s" className="text-sm text-gray-500 hover:text-[#276135] mb-4 inline-block">
                    ← Retour à la recherche
                </Link>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{displayCategory}</h1>
                <p className="text-gray-500">{filteredPlaces.length} commerce(s) trouvé(s)</p>
            </div>

            {filteredPlaces.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPlaces.map((place) => (
                        <PlaceCard key={place.id} place={place} />
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <p className="text-gray-500">Aucun commerce trouvé dans cette catégorie.</p>
                    <Link href="/s" className="mt-4 text-[#276135] font-medium hover:underline">
                        Voir toutes les catégories
                    </Link>
                </div>
            )}
        </div>
    );
}
