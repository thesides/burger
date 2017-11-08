var connection = require("./connection.js");


var orm = {

	selectAll: function (){
		
					connection.query("SELECT * FROM burgers", function (error, data){
						if (error) throw error;

						//console.log(data);

						//res.json(data);
						
					});
		
				},

	createBurger: function (val){
		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [val], function (error, data){
				if (error) throw error;

				console.log(data);
				//res.send(data);

		});
	},

	eatBurger: function (burgerId){
		connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [burgerId], function (error, data){
			if (error) throw error;

			console.log(data);
			//res.send(data);
		});
	}
	
}	

module.exports = orm;