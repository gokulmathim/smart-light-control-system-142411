/**
 * Stub DB service. Replace with real DB implementation.
 * Provides interface for users, devices, routines, and logs.
 * All methods must be implemented by the actual persistence backend.
 */

exports.users = {
  findByUsername: async (username) => {
    // TODO: Query bluetooth_light_database for user by username
    return null;
  },
  create: async (user) => {
    // TODO: Insert user into bluetooth_light_database
    return { id: 'user1', ...user };
  },
};

exports.devices = {
  findAllByUser: async (userId) => {
    // TODO: Query bluetooth_light_database for user's devices
    return [];
  },
  create: async (device) => {
    // TODO: Insert device into bluetooth_light_database
    return { id: 'dev1', ...device };
  },
  findByIdAndUser: async (deviceId, userId) => {
    // TODO: Query bluetooth_light_database for device by id/user
    return null;
  },
  removeByIdAndUser: async (deviceId, userId) => {
    // TODO: Remove pairing in bluetooth_light_database
    return true;
  }
};

exports.routines = {
  findAllByUser: async (userId) => [],
  create: async (routine) => ({ id: 'routine1', ...routine }),
  findByIdAndUser: async (routineId, userId) => null,
  updateByIdAndUser: async (routineId, userId, data) => ({ id: routineId, ...data }),
  removeByIdAndUser: async (routineId, userId) => true,
};

exports.logs = {
  findAllByUser: async (userId) => [],
};
