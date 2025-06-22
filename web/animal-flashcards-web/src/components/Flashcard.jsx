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
                {image ? (
                    <img src={image} alt={title} className="w-full h-48 object-fill rounded" />
                ) : (
                    <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                        No Image
                    </div>
                )}
                <div className="card-body text-left p-4 flex-grow">
                    <h1 className="animal-name text-xl font-bold text-blue-800 p-1">{title}</h1>
                    <p className="uppercase flex items-center justify-center animal-category text-sm text-gray-700 px-3 py-[4px] border rounded-full bg-pink-50 w-fit">{category}</p>
                    <p className="animal-description text-sm text-gray-700 p-1">{description}</p>
                </div>
            </div>
        );
}

export default Flashcard;