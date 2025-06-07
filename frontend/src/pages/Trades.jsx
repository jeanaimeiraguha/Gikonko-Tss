// components/Trade.jsx
import React from "react";

const Trade = ({ trades, onEdit, onDelete }) => {
  if (!trades.length) return <p>No trades available.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">#</th>
            <th className="p-2 border">Trade Name</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((t, i) => (
            <tr key={t.Trade_Id}>
              <td className="p-2 border">{i + 1}</td>
              <td className="p-2 border">{t.Trade_Name}</td>
              <td className="p-2 border space-x-2">
                <button className="bg-yellow-500 px-2 py-1 text-white rounded" onClick={() => onEdit(t)}>Edit</button>
                <button className="bg-red-500 px-2 py-1 text-white rounded" onClick={() => onDelete(t.Trade_Id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trade;
