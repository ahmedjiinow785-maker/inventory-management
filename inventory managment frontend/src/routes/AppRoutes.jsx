import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

import UserList from "../pages/users/UserList";
import AddUser from "../pages/users/AddUser";
import EditUser from "../pages/users/EditUser";

import CategoryList from "../pages/categories/CategoryList";
import AddCategory from "../pages/categories/AddCategory";
import EditCategory from "../pages/categories/EditCategory";

import SupplierList from "../pages/suppliers/SupplierList";
import AddSupplier from "../pages/suppliers/AddSupplier";
import EditSupplier from "../pages/suppliers/EditSupplier";

import ProductList from "../pages/products/ProductList";
import AddProduct from "../pages/products/AddProduct";
import EditProduct from "../pages/products/EditProduct";

import TransactionList from "../pages/transactions/TransactionList";
import StockIn from "../pages/transactions/StockIn";
import StockOut from "../pages/transactions/StockOut";

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<MainLayout />}>

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/add" element={<AddUser />} />
                    <Route path="/users/edit/:id" element={<EditUser />} />

                    <Route path="/categories" element={<CategoryList />} />
                    <Route path="/categories/add" element={<AddCategory />} />
                    <Route path="/categories/edit/:id" element={<EditCategory />} />

                    <Route path="/suppliers" element={<SupplierList />} />
                    <Route path="/suppliers/add" element={<AddSupplier />} />
                    <Route path="/suppliers/edit/:id" element={<EditSupplier />} />

                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/products/edit/:id" element={<EditProduct />} />

                    <Route path="/transactions" element={<TransactionList />} />
                    <Route path="/transactions/stockin" element={<StockIn />} />
                    <Route path="/transactions/stockout" element={<StockOut />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;