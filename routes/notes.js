const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET Route for retrieving all the feedback
fb.get('/', (req, res) => {
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
fb.post('/', (req, res) => {
console.log('post');
const { title, text} = req.body;

// If all the required properties are present
if (title && text) {
  // Variable for the object we will save
  const newNote = {
    title,
    text,
  };
  readAndAppend(newNote, './db/db.json');
  res.json(`Tip added successfully 🚀`);
}
});

fb.delete('/', (req, res) => {
console.log('delete');
});

module.exports = fb;
