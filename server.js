require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Quote = require('./models/quotes');
const app = express();

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Middleware
app.use(express.json());

const quotesRouter = require('./routes/quotes');
app.use('/quotes', quotesRouter);

app.listen(3000, () => {
  console.log('Listening on 3000');
});
