const express = require('express');
const healthController = require('../controllers/health');

const authRoutes = require('./auth');
const devicesRoutes = require('./devices');
const lightRoutes = require('./light');
const routinesRoutes = require('./routines');
const logsRoutes = require('./logs');

const router = express.Router();

// Health/Root endpoint
router.get('/', healthController.check.bind(healthController));

// Add all RESTful API endpoints
router.use('/auth', authRoutes);
router.use('/devices', devicesRoutes);
router.use('/light', lightRoutes);
router.use('/routines', routinesRoutes);
router.use('/logs', logsRoutes);

module.exports = router;
