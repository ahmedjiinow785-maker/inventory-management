// src/components/Navbar.jsx

import { FaUserCircle } from "react-icons/fa";
import authService from "../services/authService";

const Navbar = () => {
    const username = authService.getUsername();

    return (
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">
                Inventory Management
            </h1>

            <div className="flex items-center gap-3">
                <FaUserCircle size={30} className="text-gray-600" />
                <span className="font-semibold">{username}</span>
            </div>
        </nav>
    );
};

export default Navbar;