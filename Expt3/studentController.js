const Student = require('./Student');
const fs = require('fs');
const path = require('path');

exports.getAllStudents = async (req, res) => {
    const students = await Student.find();
    let html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    const studentRows = students.map(s => `
        <tr>
            <td>${s.rollNumber}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
            <td>${s.course}</td>
            <td>
                <a href="/edit/${s._id}" class="btn edit">Edit</a>
                <a href="/delete/${s._id}" class="btn delete" onclick="return confirm('Delete?')">Delete</a>
            </td>
        </tr>
    `).join('');
    html = html.replace('{{students}}', studentRows);
    res.send(html);
};

exports.createStudent = async (req, res) => {
    const { rollNumber, name, email, course } = req.body;
    await Student.create({ rollNumber, name, email, course });
    res.redirect('/');
};

exports.getEditForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    let html = fs.readFileSync(path.join(__dirname, 'update.html'), 'utf-8');
    html = html.replace('{{id}}', student._id)
        .replace('{{rollNumber}}', student.rollNumber)
        .replace('{{name}}', student.name)
        .replace('{{email}}', student.email)
        .replace('{{course}}', student.course);
    res.send(html);
};

exports.updateStudent = async (req, res) => {
    const { rollNumber, name, email, course } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { rollNumber, name, email, course });
    res.redirect('/');
};

exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
};
