var express = require("express");
//var app = express();
var body = require("body-parser");

//var burger = require("../models/burger.js");

var router = express.Router();

var db = require("../models");

module.exports = function (app){

	app.get("/", function (req, res){
		db.Burger.findAll({}).then(function (data){
			res.render("index", data);
		});
	});

	app.post("/api/burger", function (req, res){
		db.Burger.create(req.body.newBurger).then(function (data) {
			res.render("index", data);
		});
	});

	app.put("/api/burger/:id", function (req, res){
		db.Burger.update(req.body, {where: {id: req.params.id}})
	}).then(function (data){
		res.end();
	});
}




