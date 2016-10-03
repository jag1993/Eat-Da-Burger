var orm = require('../config/orm.js');

var burger = {
	showAll: function(cb){
		orm.showAll('burgers',function(res){
			cb(res);
		})
	},
	create: function(column,values,cb){
		orm.create('burgers',column,values,function(res){
			cb(res);
		})
	},
	modify: function(column,newValue,condition, cb){
		orm.modify('burgers',column,newValue,condition,function(res){
			cb(res);
		})

	}

}




// --CREATE--
// burger.create('burger_name','Chicken Sandwich', function(data){
// 	console.log(data);
// })

//--MODIFY--
//  burger.modify('devoured','1','id=6', function(data){
// 	console.log(data);
// });

module.exports = burger;
