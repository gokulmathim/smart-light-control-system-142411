const express = require('express');
const { authenticateJWT } = require('../middleware/auth');
const logsController = require('../controllers/logs');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Logs
 *     description: Light usage history and logs
 */

/**
 * @swagger
 * /logs:
 *   get:
 *     summary: Get usage logs for the authenticated user
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of log entries
 */
router.get('/', authenticateJWT, logsController.list);

module.exports = router;
