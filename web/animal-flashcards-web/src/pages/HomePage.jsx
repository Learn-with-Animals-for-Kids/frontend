import {cardsData} from "../utils/mockup-data.js";
import CardWrapper from "../components/CardWrapper";

function HomePage() {
    return(
        <div className="w-full flex justify-center px-4 py-10">
            <CardWrapper cards={cardsData} />
        </div>
    );
}

export default HomePage;