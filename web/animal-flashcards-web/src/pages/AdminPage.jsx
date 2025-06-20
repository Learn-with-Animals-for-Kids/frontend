import {useState} from "react";

function AdminPage()
{
    const [animal, setAnimal] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🐾 Submitted Animal:");
        console.log("Name:", animal);
        console.log("Image URL:", image);
        console.log("Category:", category);
        console.log("Description:", description);
    };

    return (
        <div className="admin-dashboard flex justify-center py-12 bg-yellow-50 min-h-screen">
            <form className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md border-2 border-pink-200 space-y-5"
                  onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Add a New Animal</h2>

                {/* Animal Name */}
                <input
                    className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    name="Animal"
                    placeholder="Animal Name"
                    onChange={(e) => setAnimal(e.target.value)}
                />

                {/* Image URL */}

                <input className="cursor-pointer w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400" type="file" id="myFile" name="filename" />


                {/* Category Dropdown */}
                <select
                    name="category"
                    className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-600"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="wild">Wild</option>
                    <option value="sea">Sea</option>
                    <option value="farm">Farm</option>


                </select>

                {/* Description */}
                <input
                    className="w-full p-3 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    name="Description"
                    placeholder="Short Description"
                    onChange={(e) => setDescription(e.target.value)}
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-gray-600 font-extrabold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 tracking-wide"
                >
                    🐾 Add Animal
                </button>
            </form>
        </div>
    );
}

export default AdminPage;