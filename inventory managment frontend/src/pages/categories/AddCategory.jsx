import { useState } from "react";
import { useNavigate } from "react-router-dom";
import categoryService from "../../services/categoryService";

const AddCategory = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState({
        categoryName: "",
        description: ""
    });

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    };

    const saveCategory = async (e) => {
        e.preventDefault();
        await categoryService.createCategory(category);
        navigate("/categories");
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Add Category
            </h1>

            <form onSubmit={saveCategory} className="space-y-4">

                <input
                    type="text"
                    name="categoryName"
                    placeholder="Category Name"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    rows="4"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded">
                    Save Category
                </button>

            </form>

        </div>
    );
};

export default AddCategory;