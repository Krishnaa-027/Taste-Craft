const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Mongo Error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Models
require('./Category');
require('./Recipe');