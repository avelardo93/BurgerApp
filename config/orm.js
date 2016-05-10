// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection.js');

// ORM 
// =============================================================

var tableName = "burgers";

var orm = {

	// Here our ORM is creating a simple method for performing a query of the entire table.
	// We make use of the callback to ensure that data is returned only once the query is done.
	allBurger: function(callback){
		var s = 'SELECT * FROM ' + tableName;

		connection.query(s, function(err, result) {
	 
            callback(result);

        });
	},



	addBurger: function(burger, callback){

		// Creating a routeName so its easy to search. 
		//var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		//console.log(routeName);

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";

		connection.query(s,[burger], function(err, result) {
            
            callback(result);

        });

	}

	devourBurger: function(burger, callback){

		// Creating a routeName so its easy to search. 
		//var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		//console.log(routeName);

		var s = "UPDATE " + tableName + " SET devoured = 1 WHERE id = ?";

		connection.query(s,[devoured], function(err, result) {
            
            callback(result);

        });

	}	


};

module.exports = orm;

