// components/Trainee.jsx
import React from "react";

const Trainee = ({ trainees, onEdit, onDelete }) => {
  if (!trainees.length)
    return <p className="text-gray-500">No trainees available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">First Names</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Trade</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((t, i) => (
            <tr key={t.Trainee_Id} className="hover:bg-gray-50">
              <td className="p-2 border">{i + 1}</td>
              <td className="p-2 border">{t.FirstNames}</td>
              <td className="p-2 border">{t.LastName}</td>
              <td className="p-2 border">{t.Gender}</td>
              <td className="p-2 border">{t.Trade_Name}</td>
              <td className="p-2 border space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(t)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(t.Trainee_Id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trainee;
