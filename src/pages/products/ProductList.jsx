import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../../services/productService";
import Table from "../../components/Table";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await productService.getAllProducts();
        setProducts(data);
    };

    const deleteProduct = async (id) => {
        if (window.confirm("Delete this product?")) {
            await productService.deleteProduct(id);
            loadProducts();
        }
    };

    const columns = [
        { header: "ID", accessor: "productID" },
        { header: "SKU", accessor: "sku" },
        { header: "Product", accessor: "productName" },
        { header: "Price", accessor: "unitPrice" },
        { header: "Stock", accessor: "quantityInStock" }
    ];

    return (
        <div>

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Products
                </h1>

                <Link
                    to="/products/add"
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Add Product
                </Link>

            </div>

            <Table
                columns={columns}
                data={products}
                actions={(product) => (
                    <div className="space-x-2">

                        <Link
                            to={`/products/edit/${product.productID}`}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => deleteProduct(product.productID)}
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

export default ProductList;