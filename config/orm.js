var connection = require('./connection.js');

var orm = {
	getAll: function(table, resp){
		connection.query('SELECT * FROM '+table+';', function(err, result){
			if (err)
				throw err;
			resp(result);
		})
	},
	
	updateOne: function(table, itemId, resp){
		connection.query('UPDATE '+table+' SET devoured=true WHERE id='+itemId+';', 
			function(err, result){
				if (err)
					throw err;
				resp(result);
		})
	},

	addOne: function(table, item, resp){
		connection.query('INSERT INTO '+table+" (burger_name) VALUES ('"+item+"');", 
			function(err, result){
				if (err)
					throw err;
				resp(result);
			})
		}

}

module.exports = orm;