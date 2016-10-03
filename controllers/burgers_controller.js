var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');


router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burgers.showAll(function(data){
		var  burgersObject = {burgers:data};
		res.render('index',burgersObject);
	})
});




//FOCUS ON THIS TOMO
// THE CREATE STRING PART WONT ACCEPT CERTAIN CHARACTERS PLS ASK TA
router.post('/burgers/create', function (req, res) {
	console.log(req.body.name);
	burgers.create('burger_name',req.body.name,function () {
		res.redirect('/burgers');
	});
});




router.put('/burgers/modify/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burgers.modify('devoured',req.body.devoured,condition, function () {
		res.redirect('/burgers');
	});
});




module.exports = router;