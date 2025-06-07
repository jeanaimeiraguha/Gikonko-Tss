// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'GIKONKO_TSS'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
});

// TRAINEES
app.post('/trainees', (req, res) => {
  const { FirstNames, LastName, Gender, Trade_Id } = req.body;
  db.query('INSERT INTO Trainees (FirstNames, LastName, Gender, Trade_Id) VALUES (?, ?, ?, ?)',
    [FirstNames, LastName, Gender, Trade_Id],
    err => err ? res.status(500).send(err) : res.send('Trainee added'));
});

app.get('/trainees', (req, res) => {
  db.query('SELECT * FROM Trainees', (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.put('/trainees/:id', (req, res) => {
  const { FirstNames, LastName, Gender, Trade_Id } = req.body;
  db.query('UPDATE Trainees SET FirstNames=?, LastName=?, Gender=?, Trade_Id=? WHERE Trainee_Id=?',
    [FirstNames, LastName, Gender, Trade_Id, req.params.id],
    err => err ? res.status(500).send(err) : res.send('Trainee updated'));
});

app.delete('/trainees/:id', (req, res) => {
  db.query('DELETE FROM Trainees WHERE Trainee_Id=?', [req.params.id],
    err => err ? res.status(500).send(err) : res.send('Trainee deleted'));
});

// TRADES
app.post('/trades', (req, res) => {
  db.query('INSERT INTO Trades (Trade_Name) VALUES (?)', [req.body.Trade_Name],
    err => err ? res.status(500).send(err) : res.send('Trade added'));
});

app.get('/trades', (req, res) => {
  db.query('SELECT * FROM Trades', (err, results) => err ? res.status(500).send(err) : res.json(results));
});

// MODULES
app.post('/modules', (req, res) => {
  const { Module_Name, Trade_Id } = req.body;
  db.query('INSERT INTO Modules (Module_Name, Trade_Id) VALUES (?, ?)', [Module_Name, Trade_Id],
    err => err ? res.status(500).send(err) : res.send('Module added'));
});

app.get('/modules', (req, res) => {
  db.query('SELECT * FROM Modules', (err, results) => err ? res.status(500).send(err) : res.json(results));
});

// MARKS
app.post('/marks', (req, res) => {
  const { Trainee_Id, Module_Id, Formative_Assessment, Summative_Assessment, Term } = req.body;
  db.query('INSERT INTO Marks (Trainee_Id, Module_Id, Formative_Assessment, Summative_Assessment, Term) VALUES (?, ?, ?, ?, ?)',
    [Trainee_Id, Module_Id, Formative_Assessment, Summative_Assessment, Term],
    err => err ? res.status(500).send(err) : res.send('Mark added'));
});

app.get('/marks', (req, res) => {
  db.query('SELECT *, (Formative_Assessment + Summative_Assessment) AS Total_Marks FROM Marks',
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.get('/marks/trainee/:id', (req, res) => {
  db.query('SELECT * FROM Marks WHERE Trainee_Id = ?', [req.params.id],
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

// USERS
app.post('/users', async (req, res) => {
  const { Username, Password, Role } = req.body;
  const hashedPassword = await bcrypt.hash(Password, 10);
  db.query('INSERT INTO Users (Username, Password, Role) VALUES (?, ?, ?)', [Username, hashedPassword, Role],
    err => err ? res.status(500).send(err) : res.send('User added'));
});

app.get('/users', (req, res) => {
  db.query('SELECT User_Id, Username, Role FROM Users',
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

// STUDENTS (View-only Access)
app.post('/students', (req, res) => {
  const { Username, Password } = req.body;
  db.query('INSERT INTO Students (Username, Password) VALUES (?, ?)', [Username, Password],
    err => err ? res.status(500).send(err) : res.send('Student registered'));
});

app.get('/students', (req, res) => {
  db.query('SELECT Student_Id, Username FROM Students',
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.get('/students/:id/report', (req, res) => {
  const studentId = req.params.id;
  const query = `
    SELECT m.Term, m.Formative_Assessment, m.Summative_Assessment,
           (m.Formative_Assessment + m.Summative_Assessment) AS Total_Marks,
           mo.Module_Name
    FROM Marks m
    JOIN Trainees t ON m.Trainee_Id = t.Trainee_Id
    JOIN Modules mo ON m.Module_Id = mo.Module_Id
    WHERE t.Trainee_Id = ? ORDER BY m.Term`;
  db.query(query, [studentId], (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.get('/students/:id/report/download', (req, res) => {
  const studentId = req.params.id;
  const query = `
    SELECT m.Term, mo.Module_Name, m.Formative_Assessment, m.Summative_Assessment,
           (m.Formative_Assessment + m.Summative_Assessment) AS Total_Marks
    FROM Marks m
    JOIN Modules mo ON m.Module_Id = mo.Module_Id
    WHERE m.Trainee_Id = ?
    ORDER BY m.Term, mo.Module_Name`;
  db.query(query, [studentId], (err, results) => {
    if (err) return res.status(500).send(err);
    const content = results.map(row => 
      `Term: ${row.Term}, Module: ${row.Module_Name}, Formative: ${row.Formative_Assessment}, Summative: ${row.Summative_Assessment}, Total: ${row.Total_Marks}`
    ).join('\n');
    const filePath = path.join(__dirname, `student_${studentId}_report.txt`);
    fs.writeFileSync(filePath, content);
    res.download(filePath, `report_student_${studentId}.txt`, () => fs.unlinkSync(filePath));
  });
});

// REPORTS
app.get('/reports/competent', (req, res) => {
  db.query('SELECT *, (Formative_Assessment + Summative_Assessment) AS Total_Marks FROM Marks WHERE (Formative_Assessment + Summative_Assessment) >= 70',
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.get('/reports/nyc', (req, res) => {
  db.query('SELECT *, (Formative_Assessment + Summative_Assessment) AS Total_Marks FROM Marks WHERE (Formative_Assessment + Summative_Assessment) < 70',
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

app.get('/reports/trainee/:id', (req, res) => {
  db.query('SELECT *, (Formative_Assessment + Summative_Assessment) AS Total_Marks FROM Marks WHERE Trainee_Id = ?', [req.params.id],
    (err, results) => err ? res.status(500).send(err) : res.json(results));
});

// DASHBOARD SUMMARY
app.get('/dashboard/summary', (req, res) => {
  const summary = {
    trainees: 'SELECT COUNT(*) as count FROM Trainees',
    modules: 'SELECT COUNT(*) as count FROM Modules',
    trades: 'SELECT COUNT(*) as count FROM Trades',
    marks: 'SELECT COUNT(*) as count FROM Marks'
  };
  const results = {};
  let completed = 0;
  for (const key in summary) {
    db.query(summary[key], (err, rows) => {
      if (err) return res.status(500).send(err);
      results[key] = rows[0].count;
      completed++;
      if (completed === Object.keys(summary).length) {
        res.json(results);
      }
    });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
