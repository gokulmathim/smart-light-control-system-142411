// Handles routine and schedule CRUD
const db = require('./db');

// PUBLIC_INTERFACE
exports.getAll = async (userId) => {
  return await db.routines.findAllByUser(userId);
};

// PUBLIC_INTERFACE
exports.create = async (userId, data) => {
  return await db.routines.create({ ...data, userId });
};

// PUBLIC_INTERFACE
exports.get = async (userId, routineId) => {
  return await db.routines.findByIdAndUser(routineId, userId);
};

// PUBLIC_INTERFACE
exports.update = async (userId, routineId, data) => {
  return await db.routines.updateByIdAndUser(routineId, userId, data);
};

// PUBLIC_INTERFACE
exports.remove = async (userId, routineId) => {
  return await db.routines.removeByIdAndUser(routineId, userId);
};
