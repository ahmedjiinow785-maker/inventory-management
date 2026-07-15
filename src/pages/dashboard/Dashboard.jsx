import { useEffect, useState } from "react";
import DashboardCard from "../../components/DashboardCard";
import userService from "../../services/userService";
import categoryService from "../../services/categoryService";
import supplierService from "../../services/supplierService";
import productService from "../../services/productService";
import transactionService from "../../services/transactionService";

const Dashboard = () => {

    const [users, setUsers] = useState(0);
    const [categories, setCategories] = useState(0);
    const [suppliers, setSuppliers] = useState(0);
    const [products, setProducts] = useState(0);
    const [transactions, setTransactions] = useState(0);
    const [lowStock, setLowStock] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const userData = await userService.getAllUsers();
            const categoryData = await categoryService.getAllCategories();
            const supplierData = await supplierService.getAllSuppliers();
            const productData = await productService.getAllProducts();
            const transactionData = await transactionService.getAllTransactions();
            const lowStockData = await productService.getLowStockProducts(10);

            setUsers(userData.length);
            setCategories(categoryData.length);
            setSuppliers(supplierData.length);
            setProducts(productData.length);
            setTransactions(transactionData.length);
            setLowStock(lowStockData.length);

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div>

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <DashboardCard
                    title="Users"
                    value={users}
                    color="bg-blue-600"
                />

                <DashboardCard
                    title="Categories"
                    value={categories}
                    color="bg-green-600"
                />

                <DashboardCard
                    title="Suppliers"
                    value={suppliers}
                    color="bg-yellow-500"
                />

                <DashboardCard
                    title="Products"
                    value={products}
                    color="bg-purple-600"
                />

                <DashboardCard
                    title="Transactions"
                    value={transactions}
                    color="bg-red-600"
                />

                <DashboardCard
                    title="Low Stock"
                    value={lowStock}
                    color="bg-orange-500"
                />

            </div>

        </div>

    );
};

export default Dashboard;