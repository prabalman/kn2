const crypto = require("crypto")
const express = require('express')
let app = express.Router()

let algorithm = "sha256"

app.get('/', function (req, res) {
    res.render('login', { title: 'Login To Grandmas Kitchen Book' });
});

// METHOD TO RUN WHEN SOMEONE SUBMITS LOGIN FORM
app.post('/', function (req, res) {
    // get data from post request
    let userData = req.body; 

    // TO DO: build knex query to retrieve username + hashed pw from database
    data = knex('users')
            .where({email: userData.user.username, deleted: 0})
            .select("pwd")
            .then(function(rows){
                //res.json(rows)
                // IF username found in db { 
                    // hash user's entered pw to compare against retrieved user/pw from db
                    // using this tutorial https://www.geeksforgeeks.org/node-js-hash-digest-method/
                    // Creating the digest in base64 encoding
                    let digest2 = crypto.createHash(algorithm).update(userData.user.password).digest("base64");

                    // TO DO: now compare against pw

                // }

                // res.send ('success' or 'error');
            });
    
});

module.exports = app