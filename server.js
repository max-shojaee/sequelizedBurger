var express = require('express');
var expressHbars = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./controllers/burgers_controller.js');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', expressHbars ({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/',routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
