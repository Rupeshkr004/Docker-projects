const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "assets" folder (CSS, JS, images)
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Serve the index.html file for the home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
