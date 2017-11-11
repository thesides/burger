var connection = require("./connection.js");

var orm = {

	selectAll: function (callback){
		
					connection.query("SELECT * FROM burgers", function (error, data){
						if (error) throw error;


						callback(data);
						
					});
		
				},

	createBurger: function (val, callback){
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [val], function (error, data){
				if (error) throw error;

				callback(data);
		});
	},

	eatBurger: function (burgerId, callBack){
		connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burgerId], function (error, data){
			if (error) throw error;


			callback(data);
		});
	}
	
}	

module.exports = orm;