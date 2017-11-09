var orm = require("../config/orm.js");

var burger = {
	selectAll: function (callback){
		orm.selectAll(function (result){
			console.log(result);
			callback(result);
		});
	},

	createBurger: function (val, callback){
		orm.createBurger(val, function (result){
			callback(result);
		});
	},

	eatBurger: function (burgerId){
		orm.eatBurger(burgerId);
	}
};

module.exports = burger;



