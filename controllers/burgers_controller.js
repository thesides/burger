var express = require("express");
var app = express();

var burger = require("../models/burger.js");


app.get("/", function (req, res){
	burger.selectAll(function (result){
		res.json(result)
		console.log(result)
	});
});

app.post("/api/burgers", function (req, res){
	burger.createBurger(req.body, function (result){
		console.log(result);
	});
});

