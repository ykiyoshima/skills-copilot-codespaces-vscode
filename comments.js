// Create web server
// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

// Load comments.json
const comments = JSON.parse(fs.readFileSync('comments.json'));

// Handle GET requests
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Handle POST requests
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started');
});