// Create web server
// Create a new comment
// Get all comments
// Get a comment by id
// Update a comment
// Delete a comment

// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create a new comment
var comments = [];

app.use(bodyParser.json());

app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.status(201).send(comment);
});

// Get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Get a comment by id
app.get('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = comments[id];
  if (comment) {
    res.send(comment);
  } else {
    res.status(404).send();
  }
});

// Update a comment
app.put('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = comments[id];
  var newComment = req.body;
  if (comment) {
    comments[id] = newComment;
    res.send(newComment);
  } else {
    res.status(404).send();
  }
});

// Delete a comment
app.delete('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = comments[id];
  if (comment) {
    comments.splice(id, 1);
    res.send(comment);
  } else {
    res.status(404).send();
  }
});

app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});