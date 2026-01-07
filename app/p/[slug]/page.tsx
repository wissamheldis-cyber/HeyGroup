import Link from 'next/link';
import { places } from '@/data/places';
import { notFound } from 'next/navigation';

export async function _generateStaticParams() {
    return places.map((place) => ({
        slug: place.slug,
    }));
}

export default async function ShopPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const place = places.find((p) => p.slug === params.slug);

    if (!place) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20 md:pb-0">
            {/* Hero Banner */}
            <div
                className="h-64 md:h-80 w-full bg-cover bg-center relative"
                style={{ backgroundColor: place.image || '#e5e7eb' }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-2 border border-white/30">
                        {place.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold">{place.name}</h1>
                </div>
            </div>

            <div className="max-w-screen-lg mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium ${place.badge ? 'bg-green-50 text-[#276135]' : 'bg-gray-100 text-gray-800'}`}>
                                    {place.badge || 'Ouvert – horaires à confirmer'}
                                </span>
                            </div>

                            <p className="text-xl text-gray-700 leading-relaxed font-light">
                                {place.description}
                            </p>
                        </section>

                        <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                Coordonnées
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 w-5 h-5 flex-none text-gray-400">📍</div>
                                    <p>{place.address}, {place.city}</p>
                                </div>
                                {place.phone && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 flex-none text-gray-400">📞</div>
                                        <p>{place.phone}</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="space-y-4">
                        <button className="btn-primary w-full shadow-lg shadow-[#276135]/20 flex justify-center items-center gap-2">
                            <span>Appeler</span>
                        </button>

                        <Link href="/a" className="btn-secondary w-full text-center block">
                            Voir d&apos;autres commerces
                        </Link>

                        <p className="text-xs text-center text-gray-400 mt-4">
                            Les informations affichées sont à titre indicatif (Simulation MVP).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
