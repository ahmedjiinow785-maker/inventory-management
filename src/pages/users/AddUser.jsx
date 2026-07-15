import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../services/userService";

const AddUser = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        role: "Staff"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const saveUser = async (e) => {
        e.preventDefault();

        await userService.createUser(user);

        navigate("/users");
    };

    return (

        <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">

            <h1 className="text-3xl font-bold mb-6">
                Add User
            </h1>

            <form onSubmit={saveUser} className="space-y-4">

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
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

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <select
                    name="role"
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
                    <option>Admin</option>
                    <option>Staff</option>
                </select>

                <button className="bg-blue-600 text-white px-6 py-3 rounded">
                    Save User
                </button>

            </form>

        </div>

    );
};

export default AddUser;