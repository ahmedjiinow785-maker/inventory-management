// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaUsers,
    FaBoxes,
    FaTags,
    FaTruck,
    FaExchangeAlt,
    FaSignOutAlt,
} from "react-icons/fa";
import authService from "../services/authService";

const Sidebar = () => {
    const logout = () => {
        authService.logout();
        window.location.href = "/";
    };

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
        }`;

    return (
        <aside className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
                Inventory
            </h2>

            <nav className="flex flex-col gap-2">

                <NavLink to="/dashboard" className={linkClass}>
                    <FaTachometerAlt />
                    Dashboard
                </NavLink>

                <NavLink to="/users" className={linkClass}>
                    <FaUsers />
                    Users
                </NavLink>

                <NavLink to="/categories" className={linkClass}>
                    <FaTags />
                    Categories
                </NavLink>

                <NavLink to="/suppliers" className={linkClass}>
                    <FaTruck />
                    Suppliers
                </NavLink>

                <NavLink to="/products" className={linkClass}>
                    <FaBoxes />
                    Products
                </NavLink>

                <NavLink to="/transactions" className={linkClass}>
                    <FaExchangeAlt />
                    Transactions
                </NavLink>

            </nav>

            <button
                onClick={logout}
                className="mt-auto flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
            >
                <FaSignOutAlt />
                Logout
            </button>
        </aside>
    );
};

export default Sidebar;