/**
 * @swagger
 * tags:
 *   name: Applications
 *   description: Job application management
 */

/**
 * @swagger
 * /api/applications:
 *   post:
 *     summary: Apply to a job
 *     tags: [Applications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               jobPostId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Application created
 */

/**
 * @swagger
 * /api/applications:
 *   get:
 *     summary: Get all job applications
 *     tags: [Applications]
 *     responses:
 *       200:
 *         description: List of applications
 */

/**
 * @swagger
 * /api/applications/{id}:
 *   get:
 *     summary: Get application by ID
 *     tags: [Applications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Application found
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/applications/{id}:
 *   delete:
 *     summary: Delete an application
 *     tags: [Applications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Application deleted
 */


// repositories/tests/api/applicationRoutes.js
const express = require('express');
const ApplicationService = require('../services/ApplicationService');

const router = express.Router();
const applicationService = new ApplicationService();

// Apply to a job
router.post('/', (req, res) => {
  try {
    const application = applicationService.applyToJob(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get application by ID
router.get('/:id', (req, res) => {
  try {
    const app = applicationService.getApplicationById(req.params.id);
    res.json(app);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Get all applications
router.get('/', (req, res) => {
  res.json(applicationService.getAllApplications());
});

// Delete application
router.delete('/:id', (req, res) => {
  try {
    applicationService.deleteApplication(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
