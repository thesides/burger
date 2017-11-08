var orm = require("../config/orm.js");

var burger = {
	selectAll: function (){
		orm.selectAll(function (res){
			console.log(res);
		});
	},

	createBurger: function (val){
		orm.createBurger(val);
	},

	eatBurger: function (burgerId){
		orm.eatBurger(burgerId);
	}
};

module.exports = burger;



