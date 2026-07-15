import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoryService from "../../services/categoryService";

const EditCategory = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState({
        categoryName: "",
        description: ""
    });

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const data = await categoryService.getCategoryById(id);
        setCategory(data);
    };

    const handleChange = (e) => {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        });
    };

    const updateCategory = async (e) => {
        e.preventDefault();
        await categoryService.updateCategory(id, category);
        navigate("/categories");
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Edit Category
            </h1>

            <form onSubmit={updateCategory} className="space-y-4">

                <input
                    type="text"
                    name="categoryName"
                    value={category.categoryName}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="description"
                    rows="4"
                    value={category.description}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Update Category
                </button>

            </form>

        </div>
    );
};

export default EditCategory;