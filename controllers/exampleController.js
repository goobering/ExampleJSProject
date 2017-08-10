// Secondary routing file, pointed to by index.js
// Handles all requests arriving at [root address]/api/example

//Bring in express to provide access to the express.Router method
var express = require('express');
// Create a new express Router
var exampleRouter = express.Router();

// Brings in the database methods from client/db/exampleQuery.js
var ExampleQuery = require('../client/db/exampleQuery');
// Creates a new query object we can use to run the methods
var query = new ExampleQuery();

// When the browser hits [root address]/api/example...
exampleRouter.get('/', function(req, res){
    // Use the all function from exampleQuery.js to grab all the documents in the 
    // database collection called example
    query.all(function(results){
        // Send back a JSON formatted object with all the results in it as a
        // response to the request
        res.json(results);
    });
});

module.exports = exampleRouter;