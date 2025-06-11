import React, { useEffect, useState } from "react";
import axios from "axios";

const apiBase = "http://localhost:3000"; // adjust if needed

export default function Trades() {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [form, setForm] = useState({ Trade_Name: "" });
  const [editId, setEditId] = useState(null);

  // Fetch trades from backend
  const fetchTrades = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${apiBase}/trades`);
      setTrades(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch trades");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTrades();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle create or update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.Trade_Name.trim()) {
      setError("Trade name is required");
      return;
    }
    setLoading(true);
    try {
      if (editId) {
        // Update
        await axios.put(`${apiBase}/trades/${editId}`, form);
        setError("");
      } else {
        // Create
        await axios.post(`${apiBase}/trades`, form);
        setError("");
      }
      setForm({ Trade_Name: "" });
      setEditId(null);
      fetchTrades();
    } catch (err) {
      setError("Failed to save trade");
    }
    setLoading(false);
  };

  // Edit a trade
  const handleEdit = (trade) => {
    setForm({ Trade_Name: trade.Trade_Name });
    setEditId(trade._id);
  };

  // Delete a trade
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this trade?")) return;
    setLoading(true);
    try {
      await axios.delete(`${apiBase}/trades/${id}`);
      fetchTrades();
      setError("");
    } catch (err) {
      setError("Failed to delete trade");
    }
    setLoading(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setForm({ Trade_Name: "" });
    setEditId(null);
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Trades Management</h2>

      {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
        <input
          type="text"
          name="Trade_Name"
          placeholder="Trade Name"
          value={form.Trade_Name}
          onChange={handleChange}
          className="border rounded px-3 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={loading}
        >
          {editId ? "Update" : "Add"}
        </button>
        {editId && (
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            disabled={loading}
          >
            Cancel
          </button>
        )}
      </form>

      {loading && <p>Loading...</p>}

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Trade Name</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {trades.length === 0 && (
            <tr>
              <td colSpan={2} className="p-4 text-center text-gray-500">
                No trades found.
              </td>
            </tr>
          )}
          {trades.map((trade) => (
            <tr key={trade._id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{trade.Trade_Name}</td>
              <td className="border border-gray-300 p-2 text-center space-x-2">
                <button
                  onClick={() => handleEdit(trade)}
                  className="text-blue-600 hover:underline"
                  disabled={loading}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(trade._id)}
                  className="text-red-600 hover:underline"
                  disabled={loading}
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
}
