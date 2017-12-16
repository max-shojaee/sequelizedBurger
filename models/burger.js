var orm = require('../config/orm.js');

var burger = {
	getAll: function(res){
		orm.getAll('burgers', function(result) {
			res(result);
		})
	},

	updateOne: function(id, res){
		orm.updateOne('burgers', id, res);
	},

	addOne: function(item, res){
		orm.addOne('burgers', item, res);
	}
}

module.exports = burger;