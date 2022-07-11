const mongoose = require('mongoose');
// define the models
const todoSchema = new mongoose.Schema({
    who: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    task: {
        type: String,
        required: true,
        trim: true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    created_at    : { type: Date, required: true, default: Date.now },
    updatedAt: Date,

}, { timestamps: true });

module.exports = mongoose.model('todo', todoSchema);