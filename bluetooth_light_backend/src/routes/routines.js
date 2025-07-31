const express = require('express');
const { authenticateJWT } = require('../middleware/auth');
const routinesController = require('../controllers/routines');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Routines
 *     description: Routines and schedule management
 */

/**
 * @swagger
 * /routines:
 *   get:
 *     summary: Get all routines for the user
 *     tags: [Routines]
 *     security:
 *       - bearerAuth: []
 *   post:
 *     summary: Create a new routine
 *     tags: [Routines]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', authenticateJWT, routinesController.list);
router.post('/', authenticateJWT, routinesController.create);

/**
 * @swagger
 * /routines/{routineId}:
 *   get:
 *     summary: Get specific routine details
 *     tags: [Routines]
 *     security:
 *       - bearerAuth: []
 *   put:
 *     summary: Update a routine
 *     tags: [Routines]
 *     security:
 *       - bearerAuth: []
 *   delete:
 *     summary: Delete a routine
 *     tags: [Routines]
 *     security:
 *       - bearerAuth: []
 */
router.get('/:routineId', authenticateJWT, routinesController.get);
router.put('/:routineId', authenticateJWT, routinesController.update);
router.delete('/:routineId', authenticateJWT, routinesController.remove);

module.exports = router;
