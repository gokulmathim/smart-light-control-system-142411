const express = require('express');
const { authenticateJWT } = require('../middleware/auth');
const deviceController = require('../controllers/devices');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Devices
 *     description: Bluetooth device discovery, pairing, and management
 */

// Device discovery (GET)
router.get('/discover', authenticateJWT, deviceController.discover);

/**
 * @swagger
 * /devices:
 *   get:
 *     summary: List user's paired Bluetooth devices
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Array of paired devices
 *   post:
 *     summary: Pair a new Bluetooth device
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Bluetooth device info to pair
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [address, name]
 *             properties:
 *               address:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Device paired
 */
router.get('/', authenticateJWT, deviceController.list);
router.post('/', authenticateJWT, deviceController.pair);

/**
 * @swagger
 * /devices/{deviceId}:
 *   get:
 *     summary: Get specific device info
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: deviceId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Device info
 *   delete:
 *     summary: Unpair/remove a device
 *     tags: [Devices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: deviceId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Device removed
 */
router.get('/:deviceId', authenticateJWT, deviceController.get);
router.delete('/:deviceId', authenticateJWT, deviceController.unpair);

module.exports = router;
