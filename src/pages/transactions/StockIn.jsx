import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productService from "../../services/productService";
import transactionService from "../../services/transactionService";

const StockIn = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const [transaction, setTransaction] = useState({
        productID: "",
        quantity: "",
        notes: ""
    });

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await productService.getAllProducts();
        setProducts(data);
    };

    const handleChange = (e) => {
        setTransaction({
            ...transaction,
            [e.target.name]: e.target.value
        });
    };

    const save = async (e) => {
        e.preventDefault();
        await transactionService.stockIn(transaction);
        navigate("/transactions");
    };

    return (

        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Stock In
            </h1>

            <form onSubmit={save} className="space-y-4">

                <select
                    name="productID"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
                    <option>Select Product</option>

                    {products.map(product => (
                        <option
                            key={product.productID}
                            value={product.productID}
                        >
                            {product.productName}
                        </option>
                    ))}

                </select>

                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="notes"
                    rows="3"
                    placeholder="Notes"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Save Stock In
                </button>

            </form>

        </div>

    );
};

export default StockIn;