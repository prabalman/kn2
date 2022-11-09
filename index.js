var path = require('path');
var bodyParser = require('body-parser'); // required to parse url parameters, needed for our REST apis
var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();

// view engine setup - tell our app to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set up the /public path to work properly
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// specify where to find our knex (database) configuration file
//const knexConfig = require('./knexfile');

// initialize knex

/*const environment = process.env.ENVIRONMENT || 'development'
const config = require('./knexfile.js')[environment];
module.exports = require('knex')(config);
*/

const knexConfig = require('./knexfile');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

//module.exports = require('knex')(config);

// set up additional routes
const login = require('./routes/login')
const register = require('./routes/register')
const recipes = require('./routes/recipes')
const users = require('./routes/users')
app.use('/login',login)
app.use('/register',register)
app.use('/recipes',recipes)
app.use('/users',users)



// Display on home page; this will need to be replaced with a res.render('index',...)

app.get('/', function (req, res) {
    res.send('Welcome to Grandma\'s Kitchen Book!');
});



// In case URL is not found
app.use((req, res, next) => {
    res.status(404).send("Err 404: Sorry can't find that!");
});

// In case of server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Err 500: Something broke!');
});

// use port 8000 for our app
app.listen(8000, function () {
    console.log('Listening to Port 8000');
});