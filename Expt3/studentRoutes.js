const express = require('express');
const router = express.Router();
const controller = require('./studentController');

router.get('/', controller.getAllStudents);
router.post('/add', controller.createStudent);
router.get('/edit/:id', controller.getEditForm);
router.post('/update/:id', controller.updateStudent);
router.get('/delete/:id', controller.deleteStudent);

module.exports = router;
