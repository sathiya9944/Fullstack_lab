require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routes = require('./studentRoutes');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("MongoDB Connected");
  app.listen(process.env.PORT || 3000, () =>
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}`)
  );
}).catch(err => console.log(err));
