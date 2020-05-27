const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);
const csurf = require('csurf');

const PORT = config.PORT;
const PORT_LINK = process.env.NODE_ENV === 'production' ? PORT : `http://localhost:${PORT}`;
const MONGODB_URL = config.MONGODB_URL;


const app = express();
const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URL
});

app.use(express.json({extended: true}));
app.use(session({secret: config.SESSION_SECRET, resave: false, saveUninitialized: false, store}));
app.use('/api/auth', require('./server/routes/auth.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use(csurf());
  app.use('/', express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`Server is running on ${PORT_LINK}`));
  } catch(e) {
    console.log(e.message);
    process.exit(1);
  }
}
start();