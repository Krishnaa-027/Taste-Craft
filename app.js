const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3000;

// env config
require('dotenv').config();

require('./server/models/database');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
}));

// session + cookies
app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());

// EJS setup
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});