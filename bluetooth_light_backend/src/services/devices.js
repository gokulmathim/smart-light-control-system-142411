// Handles Bluetooth device discovery, management, and persistence via DB
const db = require('./db');

// PUBLIC_INTERFACE
exports.discover = async (userId) => {
  // Simulate discovery - DB/device communication should replace this
  return [
    { address: 'AB:CD:EF:12:34', name: 'Living Room Light' },
    { address: 'FE:DC:BA:43:21', name: 'Bedroom Light' }
  ];
};

// PUBLIC_INTERFACE
exports.getAll = async (userId) => {
  return await db.devices.findAllByUser(userId);
};

// PUBLIC_INTERFACE
exports.pair = async (userId, address, name) => {
  return await db.devices.create({ userId, address, name, pairedAt: new Date() });
};

// PUBLIC_INTERFACE
exports.get = async (userId, deviceId) => {
  return await db.devices.findByIdAndUser(deviceId, userId);
};

// PUBLIC_INTERFACE
exports.unpair = async (userId, deviceId) => {
  return await db.devices.removeByIdAndUser(deviceId, userId);
};
