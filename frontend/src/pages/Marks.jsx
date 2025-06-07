// components/Marks.jsx
import React from "react";

const Marks = ({ marks, onEdit, onDelete }) => {
  if (!marks.length) return <p>No marks available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Trainee</th>
            <th className="p-2 border">Module</th>
            <th className="p-2 border">Marks</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((m, i) => (
            <tr key={m.Mark_Id}>
              <td className="p-2 border">{i + 1}</td>
              <td className="p-2 border">{m.FirstNames} {m.LastName}</td>
              <td className="p-2 border">{m.Module_Name}</td>
              <td className="p-2 border">{m.Marks}</td>
              <td className="p-2 border space-x-2">
                <button className="bg-yellow-500 px-2 py-1 text-white rounded" onClick={() => onEdit(m)}>Edit</button>
                <button className="bg-red-500 px-2 py-1 text-white rounded" onClick={() => onDelete(m.Mark_Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
