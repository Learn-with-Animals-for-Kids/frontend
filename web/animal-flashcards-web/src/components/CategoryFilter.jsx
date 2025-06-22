import { useCategory } from "../context/CategoryContext";

const categories = [
    { label: "All", value: "", emoji: "🌈" },
    { label: "Farm", value: "farm", emoji: "🐄" },
    { label: "Wild", value: "wild", emoji: "🦁" },
    { label: "Pet", value: "pet", emoji: "🐶" },
    { label: "Sea", value: "sea", emoji: "🐠" },
    { label: "Bugs", value: "bugs", emoji: "🐛" },
];

export default function CategoryFilter() {
    const { selectedCategory, setSelectedCategory } = useCategory();

    return (
        <section className="mb-6 text-center">
            <h3 className="text-lg font-semibold text-pink-600 mb-3">
                🐾 Choose a Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map(({ label, value, emoji }) => {
                    const isActive = selectedCategory === value;
                    return (
                        <button
                            key={value || "all"}
                            onClick={() => setSelectedCategory(value)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-in-out border-2
                ${
                                isActive
                                    ? "bg-pink-100 border-pink-500 text-pink-700 shadow-sm scale-105"
                                    : "bg-white border-pink-300 text-gray-700 hover:bg-pink-50"
                            }
              `}
                        >
                            {emoji} {label.toUpperCase()}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}
