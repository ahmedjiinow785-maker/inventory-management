import React from "react";

const Table = ({ columns, data, actions }) => {
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-4 py-3 text-left"
                            >
                                {column.header}
                            </th>
                        ))}
                        {actions && (
                            <th className="px-4 py-3 text-center">
                                Actions
                            </th>
                        )}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className="border-b hover:bg-gray-100"
                        >
                            {columns.map((column, i) => (
                                <td key={i} className="px-4 py-3">
                                    {row[column.accessor]}
                                </td>
                            ))}

                            {actions && (
                                <td className="px-4 py-3 text-center">
                                    {actions(row)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;