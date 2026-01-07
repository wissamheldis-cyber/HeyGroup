export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12 pb-24 md:pb-12">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2">HeyNouth</h2>
                <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Découvrez les pépites locales autour de vous. Une initiative pour reconnecter les quartiers.
                </p>
                <div className="mt-8 text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} HeyNouth. Tous droits réservés. (MVP Visual Only)
                </div>
            </div>
        </footer>
    );
}
