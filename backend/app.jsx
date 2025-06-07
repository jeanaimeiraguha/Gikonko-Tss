// App.jsx
import React, { useState, useEffect } from 'react';

const API_BASE = 'http://localhost:3000';

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div style={{ maxWidth: 900, margin: '20px auto', fontFamily: 'Arial' }}>
      <h1>GIKONKO TSS - Trainee Assessment System</h1>
      <nav style={{ marginBottom: 20 }}>
        {['dashboard', 'trainees', 'trades', 'modules', 'marks'].map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{
              marginRight: 10,
              backgroundColor: page === p ? '#4caf50' : '#eee',
              color: page === p ? 'white' : 'black',
              border: 'none',
              padding: '8px 12px',
              cursor: 'pointer',
            }}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </nav>
      <div>
        {page === 'dashboard' && <Dashboard />}
        {page === 'trainees' && <Trainees />}
        {page === 'trades' && <Trades />}
        {page === 'modules' && <Modules />}
        {page === 'marks' && <Marks />}
      </div>
    </div>
  );
}

function Dashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch(API_BASE + '/dashboard/summary')
      .then((res) => res.json())
      .then(setSummary)
      .catch(console.error);
  }, []);

  if (!summary) return <p>Loading summary...</p>;

  return (
    <div>
      <h2>Dashboard Summary</h2>
      <ul>
        <li>Trainees: {summary.trainees}</li>
        <li>Trades: {summary.trades}</li>
        <li>Modules: {summary.modules}</li>
        <li>Marks: {summary.marks}</li>
      </ul>
    </div>
  );
}

function Trainees() {
  const [trainees, setTrainees] = useState([]);
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({ FirstNames: '', LastName: '', Gender: 'M', Trade_Id: '' });
  const [editingId, setEditingId] = useState(null);

  // Load trainees and trades
  useEffect(() => {
    fetch(API_BASE + '/trainees')
      .then((res) => res.json())
      .then(setTrainees)
      .catch(console.error);

    fetch(API_BASE + '/trades')
      .then((res) => res.json())
      .then(setTrades)
      .catch(console.error);
  }, []);

  function refresh() {
    fetch(API_BASE + '/trainees')
      .then((res) => res.json())
      .then(setTrainees)
      .catch(console.error);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `${API_BASE}/trainees/${editingId}` : `${API_BASE}/trainees`;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to save trainee');
        return res.text();
      })
      .then(() => {
        setForm({ FirstNames: '', LastName: '', Gender: 'M', Trade_Id: '' });
        setEditingId(null);
        refresh();
      })
      .catch(alert);
  }

  function handleEdit(t) {
    setForm({
      FirstNames: t.FirstNames,
      LastName: t.LastName,
      Gender: t.Gender,
      Trade_Id: t.Trade_Id,
    });
    setEditingId(t.Trainee_Id);
  }

  function handleDelete(id) {
    if (!window.confirm('Delete this trainee?')) return;
    fetch(`${API_BASE}/trainees/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to delete');
        refresh();
      })
      .catch(alert);
  }

  return (
    <div>
      <h2>Trainees</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          required
          placeholder="First Names"
          value={form.FirstNames}
          onChange={(e) => setForm({ ...form, FirstNames: e.target.value })}
        />
        <input
          required
          placeholder="Last Name"
          value={form.LastName}
          onChange={(e) => setForm({ ...form, LastName: e.target.value })}
        />
        <select value={form.Gender} onChange={(e) => setForm({ ...form, Gender: e.target.value })}>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <select
          required
          value={form.Trade_Id}
          onChange={(e) => setForm({ ...form, Trade_Id: e.target.value })}
        >
          <option value="">Select Trade</option>
          {trades.map((trade) => (
            <option key={trade.Trade_Id} value={trade.Trade_Id}>
              {trade.Trade_Name}
            </option>
          ))}
        </select>
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setForm({ FirstNames: '', LastName: '', Gender: 'M', Trade_Id: '' });
            }}
            style={{ marginLeft: 10 }}
          >
            Cancel
          </button>
        )}
      </form>

      <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Names</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Trade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainees.map((t) => (
            <tr key={t.Trainee_Id}>
              <td>{t.Trainee_Id}</td>
              <td>{t.FirstNames}</td>
              <td>{t.LastName}</td>
              <td>{t.Gender}</td>
              <td>{trades.find((tr) => tr.Trade_Id === t.Trade_Id)?.Trade_Name || 'Unknown'}</td>
              <td>
                <button onClick={() => handleEdit(t)}>Edit</button>{' '}
                <button onClick={() => handleDelete(t.Trainee_Id)}>Delete</button>
              </td>
            </tr>
          ))}
          {trainees.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No trainees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Trades() {
  const [trades, setTrades] = useState([]);
  const [tradeName, setTradeName] = useState('');

  useEffect(() => {
    fetch(API_BASE + '/trades')
      .then((res) => res.json())
      .then(setTrades)
      .catch(console.error);
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    if (!tradeName.trim()) return alert('Enter trade name');
    fetch(API_BASE + '/trades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Trade_Name: tradeName }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add trade');
        return res.text();
      })
      .then(() => {
        setTradeName('');
        return fetch(API_BASE + '/trades');
      })
      .then((res) => res.json())
      .then(setTrades)
      .catch(alert);
  }

  return (
    <div>
      <h2>Trades</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
        <input
          placeholder="Trade Name"
          value={tradeName}
          onChange={(e) => setTradeName(e.target.value)}
          required
        />
        <button type="submit">Add Trade</button>
      </form>
      <ul>
        {trades.map((t) => (
          <li key={t.Trade_Id}>{t.Trade_Name}</li>
        ))}
      </ul>
    </div>
  );
}

function Modules() {
  const [modules, setModules] = useState([]);
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({ Module_Name: '', Trade_Id: '' });

  useEffect(() => {
    fetch(API_BASE + '/modules')
      .then((res) => res.json())
      .then(setModules)
      .catch(console.error);

    fetch(API_BASE + '/trades')
      .then((res) => res.json())
      .then(setTrades)
      .catch(console.error);
  }, []);

  function handleAdd(e) {
    e.preventDefault();
    if (!form.Module_Name.trim() || !form.Trade_Id) return alert('Fill all fields');
    fetch(API_BASE + '/modules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add module');
        return res.text();
      })
      .then(() => {
        setForm({ Module_Name: '', Trade_Id: '' });
        return fetch(API_BASE + '/modules');
      })
      .then((res) => res.json())
      .then(setModules)
      .catch(alert);
  }

  return (
    <div>
      <h2>Modules</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
        <input
          placeholder="Module Name"
          value={form.Module_Name}
          onChange={(e) => setForm({ ...form, Module_Name: e.target.value })}
          required
        />
        <select
          required
          value={form.Trade_Id}
          onChange={(e) => setForm({ ...form, Trade_Id: e.target.value })}
        >
          <option value="">Select Trade</option>
          {trades.map((t) => (
            <option key={t.Trade_Id} value={t.Trade_Id}>
              {t.Trade_Name}
            </option>
          ))}
        </select>
        <button type="submit">Add Module</button>
      </form>
      <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Module Name</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((m) => (
            <tr key={m.Module_Id}>
              <td>{m.Module_Id}</td>
              <td>{m.Module_Name}</td>
              <td>{trades.find((tr) => tr.Trade_Id === m.Trade_Id)?.Trade_Name || 'Unknown'}</td>
            </tr>
          ))}
          {modules.length === 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
                No modules found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Marks() {
  const [marks, setMarks] = useState([]);
  const [trainees, setTrainees] = useState([]);
  const [modules, setModules] = useState([]);
  const [form, setForm] = useState({ Trainee_Id: '', Module_Id: '', Marks_Obtained: '' });

  useEffect(() => {
    fetch(API_BASE + '/marks')
      .then((res) => res.json())
      .then(setMarks)
      .catch(console.error);

    fetch(API_BASE + '/trainees')
      .then((res) => res.json())
      .then(setTrainees)
      .catch(console.error);

    fetch(API_BASE + '/modules')
      .then((res) => res.json())
      .then(setModules)
      .catch(console.error);
  }, []);

  function refresh() {
    fetch(API_BASE + '/marks')
      .then((res) => res.json())
      .then(setMarks)
      .catch(console.error);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.Trainee_Id || !form.Module_Id || form.Marks_Obtained === '') return alert('Fill all fields');
    fetch(API_BASE + '/marks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        Trainee_Id: parseInt(form.Trainee_Id),
        Module_Id: parseInt(form.Module_Id),
        Marks_Obtained: parseFloat(form.Marks_Obtained),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add mark');
        return res.text();
      })
      .then(() => {
        setForm({ Trainee_Id: '', Module_Id: '', Marks_Obtained: '' });
        refresh();
      })
      .catch(alert);
  }

  return (
    <div>
      <h2>Marks</h2>
      <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
        <select
          required
          value={form.Trainee_Id}
          onChange={(e) => setForm({ ...form, Trainee_Id: e.target.value })}
        >
          <option value="">Select Trainee</option>
          {trainees.map((t) => (
            <option key={t.Trainee_Id} value={t.Trainee_Id}>
              {t.FirstNames} {t.LastName}
            </option>
          ))}
        </select>
        <select
          required
          value={form.Module_Id}
          onChange={(e) => setForm({ ...form, Module_Id: e.target.value })}
        >
          <option value="">Select Module</option>
          {modules.map((m) => (
            <option key={m.Module_Id} value={m.Module_Id}>
              {m.Module_Name}
            </option>
          ))}
        </select>
        <input
          required
          type="number"
          min="0"
          max="100"
          step="0.01"
          placeholder="Marks Obtained"
          value={form.Marks_Obtained}
          onChange={(e) => setForm({ ...form, Marks_Obtained: e.target.value })}
        />
        <button type="submit">Add Mark</button>
      </form>

      <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Trainee</th>
            <th>Module</th>
            <th>Marks Obtained</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((m) => (
            <tr key={m.Mark_Id}>
              <td>{m.Mark_Id}</td>
              <td>{trainees.find((t) => t.Trainee_Id === m.Trainee_Id)?.FirstNames || 'Unknown'}</td>
              <td>{modules.find((mod) => mod.Module_Id === m.Module_Id)?.Module_Name || 'Unknown'}</td>
              <td>{m.Marks_Obtained}</td>
            </tr>
          ))}
          {marks.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No marks found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
