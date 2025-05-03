/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: Job post management
 */

/**
 * @swagger
 * /api/jobs:
 *   post:
 *     summary: Create a job post
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job post created
 */

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all job posts
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: List of job posts
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get job post by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Job post found
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     summary: Update a job post
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Job updated
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     summary: Delete job post
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Job deleted
 */


// repositories/tests/api/jobPostRoutes.js
const express = require('express');
const JobPostService = require('../services/JobPostService');

const router = express.Router();
const jobPostService = new JobPostService();

// Create a job post
router.post('/', (req, res) => {
  try {
    const jobPost = jobPostService.createJobPost(req.body);
    res.status(201).json(jobPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get job post by ID
router.get('/:id', (req, res) => {
  try {
    const jobPost = jobPostService.getJobPostById(req.params.id);
    res.json(jobPost);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Get all job posts
router.get('/', (req, res) => {
  res.json(jobPostService.getAllJobPosts());
});

// Delete job post
router.delete('/:id', (req, res) => {
  try {
    jobPostService.deleteJobPost(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

