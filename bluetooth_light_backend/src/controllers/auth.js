const authService = require('../services/auth');

// PUBLIC_INTERFACE
exports.register = async (req, res) => {
  /**
   * Register a new user.
   */
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' });
    }
    const user = await authService.register(username, password);
    return res.status(201).json({ user });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.login = async (req, res) => {
  /**
   * Log in an existing user.
   */
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
