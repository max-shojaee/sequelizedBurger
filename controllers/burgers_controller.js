var express = require('express');
var router = express.Router()
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req,res){
	burger.getAll(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
});


router.put('/burgers/update', function(req,res){
	burger.updateOne(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});


router.post('/burgers/addOne', function(req,res){
	burger.addOne(req.body.burger_name, function(result){
		console.log(result);
		res.redirect('/');
	});
});


module.exports = router;