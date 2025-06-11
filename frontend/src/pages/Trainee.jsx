import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Change if your backend runs elsewhere

function Trainee() {
  const [trainees, setTrainees] = useState([]);
  const [form, setForm] = useState({ FirstNames: '', LastName: '', Gender: '', Trade_Id: '' });
  const [editId, setEditId] = useState(null);

  // Fetch all trainees
  const fetchTrainees = async () => {
    try {
      const res = await axios.get(`${API_URL}/trainees`);
      setTrainees(res.data);
    } catch (error) {
      alert('Error fetching trainees: ' + error.message);
    }
  };

  useEffect(() => {
    fetchTrainees();
  }, []);

  // Handle input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (Add or Update)
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (editId) {
        // Update
        await axios.put(`${API_URL}/trainees/${editId}`, form);
        alert('Trainee updated');
      } else {
        // Create
        await axios.post(`${API_URL}/trainees`, form);
        alert('Trainee added');
      }
      setForm({ FirstNames: '', LastName: '', Gender: '', Trade_Id: '' });
      setEditId(null);
      fetchTrainees();
    } catch (error) {
      alert('Error saving trainee: ' + error.message);
    }
  };

  // Handle edit click
  const handleEdit = trainee => {
    setForm({
      FirstNames: trainee.FirstNames,
      LastName: trainee.LastName,
      Gender: trainee.Gender,
      Trade_Id: trainee.Trade_Id || '',
    });
    setEditId(trainee._id);
  };

  // Handle delete click
  const handleDelete = async id => {
    if (!window.confirm('Are you sure to delete this trainee?')) return;
    try {
      await axios.delete(`${API_URL}/trainees/${id}`);
      alert('Trainee deleted');
      fetchTrainees();
    } catch (error) {
      alert('Error deleting trainee: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h2>{editId ? 'Edit Trainee' : 'Add Trainee'}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <div>
          <label>First Names</label><br />
          <input
            name="FirstNames"
            value={form.FirstNames}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label><br />
          <input
            name="LastName"
            value={form.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender</label><br />
          <select name="Gender" value={form.Gender} onChange={handleChange} required>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Trade Id</label><br />
          <input
            name="Trade_Id"
            value={form.Trade_Id}
            onChange={handleChange}
            placeholder="ObjectId string"
            required
          />
        </div>
        <button type="submit">{editId ? 'Update' : 'Add'}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ FirstNames: '', LastName: '', Gender: '', Trade_Id: '' }); }}>Cancel</button>}
      </form>

      <h2>Trainees List</h2>
      {trainees.length === 0 && <p>No trainees found</p>}
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>First Names</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Trade Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map(t => (
            <tr key={t._id}>
              <td>{t.FirstNames}</td>
              <td>{t.LastName}</td>
              <td>{t.Gender}</td>
              <td>{t.Trade_Id}</td>
              <td>
                <button onClick={() => handleEdit(t)}>Edit</button>{' '}
                <button onClick={() => handleDelete(t._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Trainee;
