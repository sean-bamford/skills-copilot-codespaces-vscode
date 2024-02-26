// Create web server
// 1. Import express
// 2. Create an instance of express
// 3. Create a route for GET /comments
// 4. Create a route for POST /comments
// 5. Start the server

const express = require('express');
const app = express();
const { comments } = require('./data');

app.use(express.json());

app.get('/comments', (req, res) => {
  res.status(200).json(comments);
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  if (username && comment) {
    const newComment = {
      id: comments.length + 1,
      username,
      comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.status(400).json({ message: 'username and comment are required' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
