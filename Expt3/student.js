const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNumber: { type: String, unique: true },
    name: String,
    email: String,
    course: String
});

module.exports = mongoose.model('Student', studentSchema);
