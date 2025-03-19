const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    user: String
});

module.exports = mongoose.model('Task', taskSchema);
