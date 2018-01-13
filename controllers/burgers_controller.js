var express = require('express');
var router = express.Router()
var Burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req,res){
	Burger.findAll({}).then(function(burger_data) {
	  res.render('index', {burger_data});
    });
});


router.put('/burgers/update', function(req,res){
	if (req.body.burger_id) {
      Burger.update({
      	devoured: true
      },{
        where: {
          id: req.body.burger_id
        }
      }).then(function(results) {
		res.redirect('/');
      });
    }
});

router.post('/burgers/addOne', function(req,res){
	Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function(results) {
		res.redirect('/');
    });
});

module.exports = router;