import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import supplierService from "../../services/supplierService";

const AddProduct = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);

    const [product, setProduct] = useState({
        sku: "",
        productName: "",
        categoryID: "",
        supplierID: "",
        unitPrice: "",
        quantityInStock: "",
        reorderLevel: ""
    });

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setCategories(await categoryService.getAllCategories());
        setSuppliers(await supplierService.getAllSuppliers());
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        await productService.createProduct(product);
        navigate("/products");
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Add Product
            </h1>

            <form onSubmit={saveProduct} className="space-y-4">

                <input
                    type="text"
                    name="sku"
                    placeholder="SKU"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <select
                    name="categoryID"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
                    <option value="">Select Category</option>

                    {categories.map(category => (
                        <option
                            key={category.categoryID}
                            value={category.categoryID}
                        >
                            {category.categoryName}
                        </option>
                    ))}

                </select>

                <select
                    name="supplierID"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
                    <option value="">Select Supplier</option>

                    {suppliers.map(supplier => (
                        <option
                            key={supplier.supplierID}
                            value={supplier.supplierID}
                        >
                            {supplier.supplierName}
                        </option>
                    ))}

                </select>

                <input
                    type="number"
                    name="unitPrice"
                    placeholder="Unit Price"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    name="quantityInStock"
                    placeholder="Quantity In Stock"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    name="reorderLevel"
                    placeholder="Reorder Level"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded">
                    Save Product
                </button>

            </form>

        </div>
    );
};

export default AddProduct;