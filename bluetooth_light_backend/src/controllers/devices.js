const devicesService = require('../services/devices');

// PUBLIC_INTERFACE
exports.discover = async (req, res) => {
  /**
   * Discover Bluetooth devices available for pairing.
   */
  try {
    const result = await devicesService.discover(req.user.id);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  /**
   * List devices paired to authenticated user.
   */
  try {
    const result = await devicesService.getAll(req.user.id);
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.pair = async (req, res) => {
  /**
   * Pair a new Bluetooth device.
   */
  try {
    const { address, name } = req.body;
    if (!address || !name) {
      return res.status(400).json({ message: 'Missing address or name' });
    }
    const result = await devicesService.pair(req.user.id, address, name);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.get = async (req, res) => {
  /**
   * Get info for a specific paired device.
   */
  try {
    const result = await devicesService.get(req.user.id, req.params.deviceId);
    if (!result) return res.status(404).json({ message: 'Device not found' });
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.unpair = async (req, res) => {
  /**
   * Remove a paired device.
   */
  try {
    await devicesService.unpair(req.user.id, req.params.deviceId);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
