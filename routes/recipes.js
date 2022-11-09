const express = require('express')
let app = express.Router()


//initialize knex
// *** reinitializing due to missing error. There should be a better way to do this ***
const knexConfig = require('../knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])

// /recipes Recipes landing page 
app.get('/', function (req, res) {
    res.send('All Recipes');
});


// /recipes/all lists all userid and names as json object 
app.get('/all', (req, res) => {
    knex('recipes')
    .select({
      userid: 'skey',
      recipe: 'recipe'
    })
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      console.error(err);
      res.json({success: false, message: 'An error occurred, please try again later.'});
    })
  });

// /recipes/:skey returns all info about user eg. /recipes/bluepanda
app.get('/:skey', function (req, res) {
    knex('recipes')
    .select('*')
    .where ('skey', req.params.skey)
    
    .then((recipes) => {
      res.json(recipes);
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