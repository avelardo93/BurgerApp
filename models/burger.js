var orm = require('../config/orm.js');


// App that creates the burger
var burgers = {
	allBurger: function(callback) {
		orm.selectAll('burgers', function(res){
			cb(res)
		});
	},
	addBurger: function(nameInput, callback) {
        orm.insertOne("burgers", nameInput, callback);
    },
    devourBurger: function(inputId, cb) {
        orm.updateOne("burgers", inputId, callback);
    },
};


module.exports = burgers;