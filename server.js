const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.static("public"));





















app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
