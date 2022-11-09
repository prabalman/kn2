const express = require('express')
let app = express.Router()

//initialize knex
// *** reinitializing due to missing error. There should be a better way to do this ***
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])


// Users Landing Page
app.get('/', function (req, res) {
    res.send(' Users Page ');
});

// users/all lists all userid and names as json object 
app.get('/all', (req, res) => {
    knex('users')
    .select({
      userid: 'userid',
      name: 'name'
    })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.json({success: false, message: 'An error occurred, please try again later.'});
    })
  });

// /user/:userid returns all info about user eg. /user/1
app.get('/:userid', function (req, res) {
    knex('users')
    .select('*')
    .where ('userid', req.params.userid)
    
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.json({success: false, message: 'An error occurred, please try again later.'});
    })
});
/*
app.get('/:id', function (req, res) {
    res.send('User Detail: ' + req.params.id);
});
*/
module.exports = app