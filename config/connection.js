var mysql = require("mysql");

	var connection = mysql.createConnection({
	  host: "localhost" || "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	  user: "root" || "xg63k7rowsc5gn66",
	  password: "" || "lxz51vtcnytbtyly",
	  database: "burgers_db"
	});

	connection.connect(function(err) {
	  if (err) {
	    console.error("error connecting: " + err.stack);
	    return;
	  }

	  console.log("connected as id " + connection.threadId);
	});

module.exports = connection;

