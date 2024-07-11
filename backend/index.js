const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/Movie', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
