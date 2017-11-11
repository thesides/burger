var express = require("express");
//var app = express();
var body = require("body-parser");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function (req, res){
	burger.selectAll(function (result){
		res.json(result)
		res.render("index", result)
		console.log(result)
	});
});

router.post("/api/burger", function (req, res){
	burger.createBurger(req.body.newBurger, function (result){
		console.log(result);
		res.end();
	});
});

router.put("/api/burger/:id", function (req, res){
	burger.eatBurger(req.params.id, function (result){
		
		res.end();
	});
});

module.exports = router;

