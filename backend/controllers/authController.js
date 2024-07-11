const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, age, gender } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName, lastName, email, password: hashedPassword, age, gender
    });
    await user.save();
    const userId = user._id
    res.json({userId: userId})
    // res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
    const userId = user._id
    res.json({userId: userId})
    // res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getAllUsers = async (req, res) => {
  const {userId} = req.params
  try {
      const users = await User.findById(userId);
      console.log(users)
      res.json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};