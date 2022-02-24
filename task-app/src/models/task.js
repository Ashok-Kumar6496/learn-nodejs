const mongoose = require('mongoose');

const Task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    percentageOfCompletion: {
        type: Number
    }
})

module.exports = Task