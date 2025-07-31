const lightService = require('../services/light');

// PUBLIC_INTERFACE
exports.status = async (req, res) => {
  /**
   * Get real-time status of the light (on/off, color, brightness).
   */
  try {
    const result = await lightService.getStatus(req.user.id, req.params.deviceId);
    return res.json(result);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.turnOn = async (req, res) => {
  /**
   * Switch the light ON.
   */
  try {
    const result = await lightService.turnOn(req.user.id, req.params.deviceId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.turnOff = async (req, res) => {
  /**
   * Switch the light OFF.
   */
  try {
    const result = await lightService.turnOff(req.user.id, req.params.deviceId);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.setColor = async (req, res) => {
  /**
   * Set the color of the light.
   */
  try {
    const { color } = req.body;
    if (!color) return res.status(400).json({ message: 'Color required' });
    const result = await lightService.setColor(req.user.id, req.params.deviceId, color);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.setBrightness = async (req, res) => {
  /**
   * Set the brightness of the light.
   */
  try {
    const { brightness } = req.body;
    if (typeof brightness !== 'number') {
      return res.status(400).json({ message: 'Brightness must be number' });
    }
    const result = await lightService.setBrightness(req.user.id, req.params.deviceId, brightness);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
