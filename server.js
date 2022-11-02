const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3003;
const app = express();
const api = require('./routes/index.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static("public"));

// Get Route: Homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Get Route: Notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

//  Wildcard Route: Directs to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

// Port for local server
app.listen(PORT, () => 
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
