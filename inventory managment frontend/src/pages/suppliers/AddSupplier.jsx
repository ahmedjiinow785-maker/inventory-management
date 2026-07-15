import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supplierService from "../../services/supplierService";

const AddSupplier = () => {

    const navigate = useNavigate();

    const [supplier, setSupplier] = useState({
        supplierName: "",
        contactName: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setSupplier({
            ...supplier,
            [e.target.name]: e.target.value
        });
    };

    const saveSupplier = async (e) => {
        e.preventDefault();
        await supplierService.createSupplier(supplier);
        navigate("/suppliers");
    };

    return (

        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Add Supplier
            </h1>

            <form onSubmit={saveSupplier} className="space-y-4">

                <input
                    type="text"
                    name="supplierName"
                    placeholder="Supplier Name"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    rows="3"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded">
                    Save Supplier
                </button>

            </form>

        </div>

    );
};

export default AddSupplier;