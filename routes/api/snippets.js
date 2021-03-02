const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
// Load  model
const Snippet = require('../../models/Snippet');

// @route GET api/snips/test
// @description tests snip route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/all', (req, res) => {
  Snippet.find()
    .then(snips => res.json(snips))
    .catch(err => res.status(404).json({ nosnipsfound: 'No snips found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Snippet.findById(req.params.id)
    .then(snip => res.json(snip))
    .catch(err => res.status(404).json({ nosnipsfound: 'No snips found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/',jsonParser, (req, res) => {
	console.log(req.body);
  Snippet.create(req.body)
    .then(snip => res.json({ msg: 'Snip added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this snip' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Snippet.findByIdAndUpdate(req.params.id, req.body)
    .then(snip => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Snippet.findByIdAndRemove(req.params.id, req.body)
    .then(snip => res.json({ mgs: 'Snip entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a snip' }));
});

module.exports = router;
