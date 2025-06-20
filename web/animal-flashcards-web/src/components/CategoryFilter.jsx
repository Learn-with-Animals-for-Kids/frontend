import {useCategory} from "../context/CategoryContext.jsx";

function CategoryFilter() {
    const {selectedCategory, setSelectedCategory} = useCategory();

    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (<div className="mb-6">
        <label htmlFor="category" className="block text-lg font-medium mb-2">
            Filter by Category:
        </label>
        <select
            id="category"
            value={selectedCategory}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md bg-white shadow-sm"
        >
            <option value="">All</option>
            <option value="wild">Wild</option>
            <option value="sea">Sea</option>
            <option value="farm">Farm</option>
        </select>
    </div>);

}

export default CategoryFilter;