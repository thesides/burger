var express = require("express");
var app = express();
var body = require("body-parser");

var burger = require("../models/burger.js");


app.get("/", function (req, res){
	burger.selectAll(function (result){
		res.json(result)
		res.render("index", result)
		console.log(result)
	});
});

app.post("/api/burger", function (req, res){
	burger.createBurger(req.body.newBurger, function (result){
		console.log(result);
		res.end();
	});
});

