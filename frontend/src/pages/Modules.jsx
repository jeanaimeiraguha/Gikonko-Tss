// components/Module.jsx
import React from "react";

const Module = ({ modules, onEdit, onDelete }) => {
  if (!modules.length) return <p>No modules available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Module Name</th>
            <th className="p-2 border">Trade</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((m, i) => (
            <tr key={m.Module_Id}>
              <td className="p-2 border">{i + 1}</td>
              <td className="p-2 border">{m.Module_Name}</td>
              <td className="p-2 border">{m.Trade_Name}</td>
              <td className="p-2 border space-x-2">
                <button className="bg-yellow-500 px-2 py-1 text-white rounded" onClick={() => onEdit(m)}>Edit</button>
                <button className="bg-red-500 px-2 py-1 text-white rounded" onClick={() => onDelete(m.Module_Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Module;
