//dependencies

var express = require("express");
var bodyParser = require("body-parser");

//sets express to a variable
var app = express();

//sets variable PORT to be whatever is available in the environment or
//if nothing than to 8080
var PORT = process.env.PORT || 8080;

//parses the JSON for readability for devs
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//below points the server to different "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts our server with a listener 
app.listen(PORT, function(){
	console.log("App listen on PORT " + PORT);
})

