const logsService = require('../services/logs');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  /**
   * Get usage logs for user.
   */
  try {
    const result = await logsService.getAll(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
