import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supplierService from "../../services/supplierService";

const EditSupplier = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [supplier, setSupplier] = useState({
        supplierName: "",
        contactName: "",
        phone: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        loadSupplier();
    }, []);

    const loadSupplier = async () => {
        const data = await supplierService.getSupplierById(id);
        setSupplier(data);
    };

    const handleChange = (e) => {
        setSupplier({
            ...supplier,
            [e.target.name]: e.target.value
        });
    };

    const updateSupplier = async (e) => {
        e.preventDefault();
        await supplierService.updateSupplier(id, supplier);
        navigate("/suppliers");
    };

    return (

        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Edit Supplier
            </h1>

            <form onSubmit={updateSupplier} className="space-y-4">

                <input
                    type="text"
                    name="supplierName"
                    value={supplier.supplierName}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="contactName"
                    value={supplier.contactName}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="text"
                    name="phone"
                    value={supplier.phone}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    value={supplier.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <textarea
                    name="address"
                    rows="3"
                    value={supplier.address}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <button className="bg-green-600 text-white px-6 py-3 rounded">
                    Update Supplier
                </button>

            </form>

        </div>

    );
};

export default EditSupplier;