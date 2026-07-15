import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userService from "../../services/userService";
import Table from "../../components/Table";

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await userService.getAllUsers();
        setUsers(data);
    };

    const deleteUser = async (id) => {
        if (window.confirm("Delete this user?")) {
            await userService.deleteUser(id);
            loadUsers();
        }
    };

    const columns = [
        { header: "ID", accessor: "userID" },
        { header: "Username", accessor: "username" },
        { header: "Email", accessor: "email" },
        { header: "Role", accessor: "role" }
    ];

    return (
        <div>

            <div className="flex justify-between mb-5">
                <h1 className="text-3xl font-bold">Users</h1>

                <Link
                    to="/users/add"
                    className="bg-blue-600 text-white px-5 py-2 rounded"
                >
                    Add User
                </Link>
            </div>

            <Table
                columns={columns}
                data={users}
                actions={(user) => (
                    <div className="space-x-2">

                        <Link
                            to={`/users/edit/${user.userID}`}
                            className="bg-green-600 text-white px-3 py-1 rounded"
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => deleteUser(user.userID)}
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

export default UserList;