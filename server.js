const express = require('express');

// Express server
const app = express();

// Routes
const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js');

// Port
const PORT = process.env.PORT || 4001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/api', api);
app.use('/', html);


// Port for local server
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
