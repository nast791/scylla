const express = require('express');
const mongoose = require('mongoose');
const config = require('config');


const PORT = config.get('PORT');
const MONGODB_URL = config.get('MONGODB_URL');


const app = express();

async function start() {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  } catch(e) {
    console.log(e.message);
    process.exit(1);
  }
}
start();