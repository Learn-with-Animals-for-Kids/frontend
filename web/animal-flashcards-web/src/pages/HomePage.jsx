import CardWrapper from "../components/CardWrapper";
import CategoryFilter from "../components/CategoryFilter";
import { useState, useEffect, useMemo } from "react";
import { useCategory } from "../context/CategoryContext";

function HomePage() {
    const [cards, setCards] = useState([]);
    const { selectedCategory } = useCategory();


    useEffect(() => {
        fetch("http://localhost:3000/admin/create")
            .then((res) => res.json())
            .then((data) => {
                const formatted = data.map((card) => {
                    let base64Image = "";

                    // Properly handle image buffer to base64 conversion
                    if (card.image && card.image.data && card.imageType) {
                        const buffer = card.image.data; // Array of numbers
                        const base64 = btoa(
                            buffer
                                .map((byte) => String.fromCharCode(byte))
                                .join("")
                        );
                        base64Image = `data:${card.imageType};base64,${base64}`;
                    }

                    return {
                        ...card,
                        image: base64Image || null, // pass null instead of empty string
                    };
                });

                setCards(formatted);
            })
            .catch((err) => console.error("Fetch error:", err));
    }, []);


    const filteredCards = useMemo(() => {
        if (!selectedCategory) return cards;
        return cards.filter((card) => card.category === selectedCategory);
    }, [cards, selectedCategory]);

    return (
        <div className="p-6">
            <CategoryFilter />
            <CardWrapper cards={filteredCards} />
        </div>
    );
}

export default HomePage;