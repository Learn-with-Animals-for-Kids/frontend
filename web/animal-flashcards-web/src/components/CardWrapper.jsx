import Flashcard from "./Flashcard.jsx";

function CardWrapper({cards}) {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card) => (
                <Flashcard
                    key={card.id}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>

    );
}

export default CardWrapper;