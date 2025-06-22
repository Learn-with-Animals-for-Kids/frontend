import { useState, useRef, useEffect } from "react";

function AdminPage()
{
    const [animal, setAnimal] = useState("");
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const animalInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", animal);
        formData.append("category", category);
        formData.append("description", description);
        formData.append("image", image); // File object

        try {
            const res = await fetch("http://localhost:3000/admin/create", {
                method: "POST",
                body: formData,
            });

            if (res.status === 409) {
                setErrorMessage("Same card already exists!");
            }

            if (res.ok) {
                alert("✅ Animal added!");
                setAnimal("");
                setCategory("");
                setDescription("");
                setImage(null);
            } else {
                console.log("error", res);
            }
        } catch (err) {
            console.error("Upload error:", err);
        }
    };

    // Auto-focus the Animal Name input when the component mounts
    useEffect(() => {
        if (animalInputRef.current) {
            animalInputRef.current.focus();
        }
    }, []);

    return (
        <div className="admin-dashboard flex justify-center py-12 bg-yellow-50 min-h-screen">
            <form className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md border-2 border-pink-200 space-y-5"
                  onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center text-pink-600 mb-4">Add a New Animal</h2>
                <h3>{errorMessage}</h3>
                {/* Animal Name input with auto-focus */}
                <input
                    ref={animalInputRef}
                    className="w-full p-3 rounded-lg border border-pink-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                    name="Animal"
                    placeholder="Animal Name"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                />

                {/* Image URL */}

                <div className="w-full">
                    <label
                        htmlFor="myFile"
                        className="block w-full cursor-pointer text-left p-3 rounded-lg border text-gray-600 border-pink-300  focus-within:ring-2 focus:ring-pink-400 transition-all"
                    >
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="myFile"
                        name="filename"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setImage(file);
                        }}
                        className="hidden"
                    />

                    {/* ✅ Show preview if image is selected */}
                    {image && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="Preview"
                            className="mt-2 max-h-64 w-full object-contain rounded-md border border-pink-200"
                        />
                    )}
                </div>


                {/* Category Dropdown */}
                <select
                    name="category"
                    value={category}
                    className="w-full p-3 rounded-lg border text-gray-600 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-600"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    <option value="farm">🐄 Farm</option>
                    <option value="wild">🦁 Wild</option>
                    <option value="sea">🐠 Sea</option>
                    <option value="pet">🐶 Pet</option>
                    <option value="bugs">🐛 Bugs</option>


                </select>

                {/* Description */}
                <input
                    className="w-full p-3 rounded-lg border text-gray-900 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    name="Description"
                    placeholder="Short Description"
                    value={description}
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