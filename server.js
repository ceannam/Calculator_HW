const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the direct name directory
app.use(express.static(__dirname));

// Serve the index.html file for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);});

  