// Handles light status and control commands
const db = require('./db');

// Simulated Bluetooth device light state for demonstration
const mockState = {};

function _getDeviceKey(userId, deviceId) {
  return `${userId}:${deviceId}`;
}

// PUBLIC_INTERFACE
exports.getStatus = async (userId, deviceId) => {
  // (In real system, fetch from BT hardware/device)
  const state = mockState[_getDeviceKey(userId, deviceId)] || {
    on: false,
    color: '#FFFFFF',
    brightness: 100,
  };
  return state;
};

// PUBLIC_INTERFACE
exports.turnOn = async (userId, deviceId) => {
  const key = _getDeviceKey(userId, deviceId);
  mockState[key] = mockState[key] || { color: '#FFFFFF', brightness: 100, on: false };
  mockState[key].on = true;
  return mockState[key];
};

// PUBLIC_INTERFACE
exports.turnOff = async (userId, deviceId) => {
  const key = _getDeviceKey(userId, deviceId);
  mockState[key] = mockState[key] || { color: '#FFFFFF', brightness: 100, on: false };
  mockState[key].on = false;
  return mockState[key];
};

// PUBLIC_INTERFACE
exports.setColor = async (userId, deviceId, color) => {
  const key = _getDeviceKey(userId, deviceId);
  mockState[key] = mockState[key] || { on: false, brightness: 100, color: '#FFFFFF' };
  mockState[key].color = color;
  return mockState[key];
};

// PUBLIC_INTERFACE
exports.setBrightness = async (userId, deviceId, brightness) => {
  const key = _getDeviceKey(userId, deviceId);
  mockState[key] = mockState[key] || { on: false, color: '#FFFFFF', brightness: 100 };
  mockState[key].brightness = brightness;
  return mockState[key];
};
