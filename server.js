const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

//  Create the Express app BEFORE using it
const app = express();
const PORT = 3000;

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for static files and form data
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes (now app is defined and usable)
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const newCustomer = req.body;

  fs.readFile('data.json', (err, data) => {
    const customers = err ? [] : JSON.parse(data);
    customers.push(newCustomer);

    fs.writeFile('data.json', JSON.stringify(customers, null, 2), () => {
      res.redirect('/customers');
    });
  });
});

app.get('/customers', (req, res) => {
  fs.readFile('data.json', (err, data) => {
    const customers = err ? [] : JSON.parse(data);
    res.render('customers', { customers });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(` ElectroMart server running at http://localhost:${PORT}`);
});
