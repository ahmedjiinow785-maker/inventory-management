import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import transactionService from "../../services/transactionService";
import Table from "../../components/Table";

const TransactionList = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        loadTransactions();
    }, []);

    const loadTransactions = async () => {
        const data = await transactionService.getAllTransactions();
        setTransactions(data);
    };

    const columns = [
        { header: "ID", accessor: "transactionID" },
        { header: "Product", accessor: "productName" },
        { header: "Type", accessor: "transactionType" },
        { header: "Quantity", accessor: "quantity" },
        { header: "Date", accessor: "transactionDate" }
    ];

    return (
        <div>

            <div className="flex justify-between mb-5">

                <h1 className="text-3xl font-bold">
                    Transactions
                </h1>

                <div className="space-x-3">

                    <Link
                        to="/transactions/stockin"
                        className="bg-green-600 text-white px-5 py-2 rounded"
                    >
                        Stock In
                    </Link>

                    <Link
                        to="/transactions/stockout"
                        className="bg-red-600 text-white px-5 py-2 rounded"
                    >
                        Stock Out
                    </Link>

                </div>

            </div>

            <Table
                columns={columns}
                data={transactions}
            />

        </div>
    );
};

export default TransactionList;