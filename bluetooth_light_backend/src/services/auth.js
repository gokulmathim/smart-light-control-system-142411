// Handles user authentication and registration
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

// PUBLIC_INTERFACE
exports.register = async (username, password) => {
  // Check if username taken
  const existing = await db.users.findByUsername(username);
  if (existing) throw new Error('Username is taken');
  const hashed = await bcrypt.hash(password, 10);
  const user = await db.users.create({ username, password: hashed });
  return { id: user.id, username: user.username };
};

// PUBLIC_INTERFACE
exports.login = async (username, password) => {
  const user = await db.users.findByUsername(username);
  if (!user) throw new Error('Invalid credentials');
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');
  // Issue JWT
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { 
    expiresIn: '7d'
  });
  return { token };
};
