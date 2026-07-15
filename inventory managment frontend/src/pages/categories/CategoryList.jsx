import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryService from "../../services/categoryService";
import Table from "../../components/Table";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        const data = await categoryService.getAllCategories();
        setCategories(data);
    };

    const deleteCategory = async (id) => {
        if (window.confirm("Delete this category?")) {
            await categoryService.deleteCategory(id);
            loadCategories();
        }
    };

    const columns = [
        { header: "ID", accessor: "categoryID" },
        { header: "Category Name", accessor: "categoryName" },
        { header: "Description", accessor: "description" }
    ];

    return (
        <div>

            <div className="flex justify-between mb-5">
                <h1 className="text-3xl font-bold">Categories</h1>

                <Link
                    to="/categories/add"
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Add Category
                </Link>
            </div>

            <Table
                columns={columns}
                data={categories}
                actions={(category) => (
                    <div className="space-x-2">

                        <Link
                            to={`/categories/edit/${category.categoryID}`}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => deleteCategory(category.categoryID)}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                            Delete
                        </button>

                    </div>
                )}
            />

        </div>
    );
};

export default CategoryList;