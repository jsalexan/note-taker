const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3003;
const app = express();
const api = require('./routes/htmlRoutes.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static("public"));

// Port for local server
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
