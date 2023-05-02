const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
fb.get('/', (req, res) => {
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
fb.post('/', (req, res) => {
console.log('post');
const { email, feedbackType, feedback } = req.body;

// If all the required properties are present
if (email && feedbackType && feedback) {
  // Variable for the object we will save
  const newFeedback = {
    email,
    feedbackType,
    feedback,
    feedback_id: uuid(),
  };
  readAndAppend(newFeedback, './db/feedback.json');
}
});

fb.delete('/', (req, res) => {
console.log('delete');
});

module.exports = fb;
