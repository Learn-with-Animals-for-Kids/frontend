import { useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardSwiper({ cards }) {

        const [index, setIndex] = useState(0);

        const next = () => setIndex((prev) => (prev + 1) % cards.length);
        const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

        const currentCard = cards[index];

        return (
            <div className="flex flex-col items-center gap-6">
                <Flashcard
                    image={currentCard.image}
                    title={currentCard.title}
                    category={currentCard.category}
                    description={currentCard.description}
                />

                <div className="flex gap-4">
                    <button
                        onClick={prev}
                        className="bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
                    >
                        ◀ Prev
                    </button>
                    <button
                        onClick={next}
                        className="bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition"
                    >
                        Next ▶
                    </button>
                </div>
            </div>


);
}

export default FlashcardSwiper;
