import Flashcard from "./Flashcard";

function CardWrapper({ cards }) {
    if (!cards || cards.length === 0) {
        return <p>No flashcards found.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => {

                return (
                    <Flashcard
                        key={card._id}
                        title={card.title}
                        category={card.category}
                        description={card.description}
                        image={card.image}
                    />
                );
            })}
        </div>
    );
}

export default CardWrapper;
