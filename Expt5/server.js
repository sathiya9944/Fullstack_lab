const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const dataFile = path.join(__dirname, 'data.json');

// GET tasks
app.get('/tasks', (req, res) => {
    fs.readFile(dataFile, (err, data) => {
        if (err) return res.json([]);
        res.json(JSON.parse(data));
    });
});

// POST tasks
app.post('/tasks', (req, res) => {
    fs.writeFile(dataFile, JSON.stringify(req.body), err => {
        if (err) return res.status(500).send('Error saving tasks.');
        res.sendStatus(200);
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
