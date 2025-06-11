// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const mongoUri = 'mongodb+srv://jeanaimeiraguha:Iraguha@mern.sazoqkg.mongodb.net/School?retryWrites=true&w=majority&appName=Mern';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const traineeSchema = new mongoose.Schema({
  FirstNames: String,
  LastName: String,
  Gender: String,
  Trade_Id: mongoose.Schema.Types.ObjectId,
});
const Trainee = mongoose.model('Trainee', traineeSchema);

const tradeSchema = new mongoose.Schema({
  Trade_Name: String,
});
const Trade = mongoose.model('Trade', tradeSchema);

const moduleSchema = new mongoose.Schema({
  Module_Name: String,
  Trade_Id: mongoose.Schema.Types.ObjectId,
});
const Module = mongoose.model('Module', moduleSchema);

const markSchema = new mongoose.Schema({
  Trainee_Id: mongoose.Schema.Types.ObjectId,
  Module_Id: mongoose.Schema.Types.ObjectId,
  Formative_Assessment: Number,
  Summative_Assessment: Number,
  Term: String,
});
const Mark = mongoose.model('Mark', markSchema);

const userSchema = new mongoose.Schema({
  Username: String,
  Password: String,
  Role: String,
});
const User = mongoose.model('User', userSchema);

const studentSchema = new mongoose.Schema({
  Username: String,
  Password: String,
});
const Student = mongoose.model('Student', studentSchema);

// --- ROUTES ---

// TRAINEES CRUD
app.post('/trainees', async (req, res) => {
  try {
    const trainee = new Trainee(req.body);
    await trainee.save();
    res.send('Trainee added');
  } catch (err) {
    console.error('Error saving trainee:', err);  // <-- Add this to see full error details in console
    res.status(500).send('Error saving trainee: ' + err.message);
  }
});

app.get('/trainees', async (req, res) => {
  try {
    const trainees = await Trainee.find();
    res.json(trainees);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/trainees/:id', async (req, res) => {
  try {
    await Trainee.findByIdAndUpdate(req.params.id, req.body);
    res.send('Trainee updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/trainees/:id', async (req, res) => {
  try {
    await Trainee.findByIdAndDelete(req.params.id);
    res.send('Trainee deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// TRADES CRUD
app.post('/trades', async (req, res) => {
  try {
    const trade = new Trade(req.body);
    await trade.save();
    res.send('Trade added');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/trades', async (req, res) => {
  try {
    const trades = await Trade.find();
    res.json(trades);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/trades/:id', async (req, res) => {
  try {
    await Trade.findByIdAndUpdate(req.params.id, req.body);
    res.send('Trade updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/trades/:id', async (req, res) => {
  try {
    await Trade.findByIdAndDelete(req.params.id);
    res.send('Trade deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// MODULES CRUD
app.post('/modules', async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.send('Module added');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/modules', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/modules/:id', async (req, res) => {
  try {
    await Module.findByIdAndUpdate(req.params.id, req.body);
    res.send('Module updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/modules/:id', async (req, res) => {
  try {
    await Module.findByIdAndDelete(req.params.id);
    res.send('Module deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// MARKS CRUD
app.post('/marks', async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();
    res.send('Mark added');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/marks', async (req, res) => {
  try {
    const marks = await Mark.find();
    const data = marks.map(m => ({
      ...m.toObject(),
      Total_Marks: m.Formative_Assessment + m.Summative_Assessment
    }));
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/marks/trainee/:id', async (req, res) => {
  try {
    const marks = await Mark.find({ Trainee_Id: req.params.id });
    res.json(marks);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/marks/:id', async (req, res) => {
  try {
    await Mark.findByIdAndUpdate(req.params.id, req.body);
    res.send('Mark updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/marks/:id', async (req, res) => {
  try {
    await Mark.findByIdAndDelete(req.params.id);
    res.send('Mark deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// USERS CRUD with password hashing
app.post('/users', async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.Password, 10);
    const user = new User({ ...req.body, Password: hashed });
    await user.save();
    res.send('User added');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'Username Role');
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/users/:id', async (req, res) => {
  try {
    const { Password, ...rest } = req.body;
    const updateObj = { ...rest };
    if (Password) updateObj.Password = await bcrypt.hash(Password, 10);
    await User.findByIdAndUpdate(req.params.id, updateObj);
    res.send('User updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// STUDENTS CRUD with hashing
app.post('/students', async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.Password, 10);
    const student = new Student({ Username: req.body.Username, Password: hashed });
    await student.save();
    res.send('Student registered');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find({}, 'Username');
    res.json(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.put('/students/:id', async (req, res) => {
  try {
    const { Password, Username } = req.body;
    const updateObj = { Username };
    if (Password) updateObj.Password = await bcrypt.hash(Password, 10);
    await Student.findByIdAndUpdate(req.params.id, updateObj);
    res.send('Student updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});
app.delete('/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Student deleted');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// REPORT endpoint
app.get('/students/:id/report', async (req, res) => {
  try {
    const traineeId = req.params.id;
    const data = await Mark.aggregate([
      { $match: { Trainee_Id: new mongoose.Types.ObjectId(traineeId) } },
      {
        $lookup: {
          from: 'modules',
          localField: 'Module_Id',
          foreignField: '_id',
          as: 'module'
        }
      },
      { $unwind: '$module' },
      {
        $project: {
          Term: 1,
          Formative: '$Formative_Assessment',
          Summative: '$Summative_Assessment',
          Total_Marks: { $add: ['$Formative_Assessment', '$Summative_Assessment'] },
          Module_Name: '$module.Module_Name'
        }
      },
      { $sort: { Term: 1 } }
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// LOGIC LOGIN (covers both User and Student)
app.post('/login', async (req, res) => {
  try {
    const { Username, Password } = req.body;

    // Try User model first
    let user = await User.findOne({ Username });
    if (user) {
      const valid = await bcrypt.compare(Password, user.Password);
      if (!valid) return res.status(401).send('Invalid username or password');
      return res.json({ message: 'Login successful', user: { id: user._id, username: user.Username, role: user.Role } });
    }

    // Try Student model
    user = await Student.findOne({ Username });
    if (user) {
      const valid = await bcrypt.compare(Password, user.Password);
      if (!valid) return res.status(401).send('Invalid username or password');
      return res.json({ message: 'Login successful', user: { id: user._id, username: user.Username, role: 'student' } });
    }

    return res.status(401).send('Invalid username or password');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DASHBOARD summary
app.get('/dashboard/summary', async (req, res) => {
  try {
    const [tCnt, mCnt, trCnt, mkCnt] = await Promise.all([
      Trainee.countDocuments(),
      Module.countDocuments(),
      Trade.countDocuments(),
      Mark.countDocuments()
    ]);
    res.json({ trainees: tCnt, modules: mCnt, trades: trCnt, marks: mkCnt });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
