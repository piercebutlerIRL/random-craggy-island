const express = require('express');
const router = express.Router();
const Quote = require('../models/quotes');

// Get All
router.get('/', async (req, res) => {
  const quotes = await Quote.find({});
  try {
    res.send(quotes);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

// Get Random
router.get('/random', async (req, res) => {
  const quotes = await Quote.find({});
  const count = await Quote.countDocuments({}, (err, count) => count);
  const randomNum = Math.floor(Math.random() * count);
  try {
    res.send(quotes[randomNum]);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const quote = new Quote({
    quote: req.body.quote,
    series: req.body.series,
    episode: req.body.episode,
    episode_name: req.body.episode_name,
    character: req.body.character,
    character_img: req.body.character_img,
    synopsis: req.body.synopsis,
    aired: req.body.aired,
  });
  try {
    //const myuser = new User(req.body);
    const me = await quote.save();
    //res.send(myuser);
    res.status(201).json(me);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
