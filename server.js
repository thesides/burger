var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var burgersController = require("./controllers/burgers_controller.js")
var burger = require("./models/burger.js")

var app = express();
var port = process.env.port || 8080 || 3306;

app.use(express.static("public"));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require("router");

app.get("/", function (req, res){
	burger.selectAll(function (data){
		console.log(data);
		res.render("index", {burger: data});
	})
});

app.post("/api/burger", function (req, res){
	burger.createBurger(req.body.newBurger, function (data){
		console.log(data);
		res.render("index", data);
	})
})


app.listen(port, function (){
	console.log("Listening on port " + port);
});