const express = require('express');
const { authenticateJWT } = require('../middleware/auth');
const lightController = require('../controllers/light');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Light
 *     description: Light status and control
 */

/**
 * @swagger
 * /light/{deviceId}/status:
 *   get:
 *     summary: Get current light status
 *     tags: [Light]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: deviceId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The device ID
 *     responses:
 *       200:
 *         description: Light status (on/off, color, brightness)
 */
router.get('/:deviceId/status', authenticateJWT, lightController.status);

/**
 * @swagger
 * /light/{deviceId}/on:
 *   post:
 *     summary: Turn light on
 *     tags: [Light]
 *     security:
 *       - bearerAuth: []
 */
router.post('/:deviceId/on', authenticateJWT, lightController.turnOn);

/**
 * @swagger
 * /light/{deviceId}/off:
 *   post:
 *     summary: Turn light off
 *     tags: [Light]
 *     security:
 *       - bearerAuth: []
 */
router.post('/:deviceId/off', authenticateJWT, lightController.turnOff);

/**
 * @swagger
 * /light/{deviceId}/color:
 *   post:
 *     summary: Change the light color
 *     tags: [Light]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [color]
 *             properties:
 *               color:
 *                 type: string
 *                 example: '#FFFFFF'
 *     responses:
 *       200:
 *         description: Color changed
 */
router.post('/:deviceId/color', authenticateJWT, lightController.setColor);

/**
 * @swagger
 * /light/{deviceId}/brightness:
 *   post:
 *     summary: Adjust brightness
 *     tags: [Light]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [brightness]
 *             properties:
 *               brightness:
 *                 type: integer
 *                 minimum: 0
 *                 maximum: 100
 *                 example: 75
 *     responses:
 *       200:
 *         description: Brightness changed
 */
router.post('/:deviceId/brightness', authenticateJWT, lightController.setBrightness);

module.exports = router;
