const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const path = require('path');


const PORT = config.PORT;
const MONGODB_URL = config.MONGODB_URL;


const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// async function start() {
//   try {
//     await mongoose.connect(MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     });
//     app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
//   } catch(e) {
//     console.log(e.message);
//     process.exit(1);
//   }
// }
// start();

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));