import Link from 'next/link';

const categories = [
    'Café', 'Restaurant', 'Boulangerie', 'Mode', 'Librairie', 'Fleuriste', 'Santé', 'Services', 'Culture', 'Épicerie'
];

export default function CategoryChips() {
    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar mask-gradient-right">
            {categories.map((cat) => (
                <Link
                    key={cat}
                    href={`/c/${cat.toLowerCase()}`}
                    className="flex-none px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-[#276135] hover:text-[#276135] transition-all whitespace-nowrap"
                >
                    {cat}
                </Link>
            ))}
        </div>
    );
}
