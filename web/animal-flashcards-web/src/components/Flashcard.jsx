import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function Flashcard({ image, title, category, description })
{
    return (
            <div className="flashcard bg-yellow-50 border-4 border-pink-300 rounded-2xl shadow-xl h-[400px] flex flex-col overflow-hidden ">
                <img className="w-full h-[60%] object-cover" src={image} alt={'animal image'} />
                <div className="card-body text-left p-4 flex-grow">
                    <h1 className="animal-name text-xl font-bold text-blue-800 p-3">{title}</h1>
                    <p className="animal-category text-sm text-gray-700 p-1">{category}</p>
                    <p className="animal-description text-sm text-gray-700 p-1">{description}</p>
                </div>
            </div>
        );
}

export default Flashcard;