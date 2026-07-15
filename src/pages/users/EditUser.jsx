import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from "../../services/userService";

const EditUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const data = await userService.getUserById(id);
        setUser(data);
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const updateUser = async (e) => {
        e.preventDefault();
        await userService.updateUser(id, user);
        navigate("/users");
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">

            <h1 className="text-3xl font-bold mb-6">
                Edit User
            </h1>

            <form onSubmit={updateUser} className="space-y-4">

                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                />

                <select
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    className="w-full border p-3 rounded"
                >
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                </select>

                <button
                    className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
                >
                    Update User
                </button>

            </form>

        </div>
    );
};

export default EditUser;