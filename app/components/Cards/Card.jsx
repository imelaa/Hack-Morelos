// components/FeaturedCard.js

export default function Card() {
    return (
      <button
        type="button"
        className="block w-full rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
          Featured
        </div>
        <div className="p-6">
          <div className="h-48 bg-gray-200 dark:bg-gray-700 flex justify-center items-center">
            {/* Espacio para la imagen */}
            <span className="text-gray-400 dark:text-gray-500">Imagen</span>
          </div>
        </div>
        <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300">
          2 days ago
        </div>
      </button>
    );
  }
  