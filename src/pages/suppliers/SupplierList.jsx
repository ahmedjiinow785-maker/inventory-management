import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supplierService from "../../services/supplierService";
import Table from "../../components/Table";

const SupplierList = () => {

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        loadSuppliers();
    }, []);

    const loadSuppliers = async () => {
        const data = await supplierService.getAllSuppliers();
        setSuppliers(data);
    };

    const deleteSupplier = async (id) => {
        if (window.confirm("Delete this supplier?")) {
            await supplierService.deleteSupplier(id);
            loadSuppliers();
        }
    };

    const columns = [
        { header: "ID", accessor: "supplierID" },
        { header: "Supplier", accessor: "supplierName" },
        { header: "Contact", accessor: "contactName" },
        { header: "Phone", accessor: "phone" },
        { header: "Email", accessor: "email" }
    ];

    return (
        <div>

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Suppliers
                </h1>

                <Link
                    to="/suppliers/add"
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Add Supplier
                </Link>

            </div>

            <Table
                columns={columns}
                data={suppliers}
                actions={(supplier) => (
                    <div className="space-x-2">

                        <Link
                            to={`/suppliers/edit/${supplier.supplierID}`}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => deleteSupplier(supplier.supplierID)}
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

export default SupplierList;