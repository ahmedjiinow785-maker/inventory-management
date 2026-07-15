import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../../services/productService";
import categoryService from "../../services/categoryService";
import supplierService from "../../services/supplierService";

const EditProduct = () => {

    const { id } = useParams();
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
        setProduct(await productService.getProductById(id));
    };

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        await productService.updateProduct(id, product);
        navigate("/products");
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Edit Product
            </h1>

            <form onSubmit={updateProduct} className="space-y-4">

                <input
                    type="text"
                    name="sku"
                    value={product.sku}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <select
                    name="categoryID"
                    value={product.categoryID}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
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
                    value={product.supplierID}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
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
                    value={product.unitPrice}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    name="quantityInStock"
                    value={product.quantityInStock}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="number"
                    name="reorderLevel"
                    value={product.reorderLevel}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Update Product
                </button>

            </form>

        </div>
    );
};

export default EditProduct;