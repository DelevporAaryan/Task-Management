const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// ✅ Route to create a task
router.post('/', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
});

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

// Update a task
router.put('/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(task);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.send({ message: 'Task deleted' });
});

module.exports = router;
