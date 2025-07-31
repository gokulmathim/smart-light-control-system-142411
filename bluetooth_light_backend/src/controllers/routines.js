const routinesService = require('../services/routines');

// PUBLIC_INTERFACE
exports.list = async (req, res) => {
  /**
   * Get all routines for the user.
   */
  try {
    const result = await routinesService.getAll(req.user.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.create = async (req, res) => {
  /**
   * Create a new routine.
   */
  try {
    const data = req.body;
    const created = await routinesService.create(req.user.id, data);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.get = async (req, res) => {
  /**
   * Get a single routine.
   */
  try {
    const found = await routinesService.get(req.user.id, req.params.routineId);
    if (!found) return res.status(404).json({ message: 'Routine not found' });
    res.json(found);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.update = async (req, res) => {
  /**
   * Update a routine.
   */
  try {
    const updated = await routinesService.update(req.user.id, req.params.routineId, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUBLIC_INTERFACE
exports.remove = async (req, res) => {
  /**
   * Delete a routine.
   */
  try {
    await routinesService.remove(req.user.id, req.params.routineId);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
