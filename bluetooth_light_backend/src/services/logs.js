// Handles light usage logs/history
const db = require('./db');

// PUBLIC_INTERFACE
exports.getAll = async (userId) => {
  return await db.logs.findAllByUser(userId);
};
