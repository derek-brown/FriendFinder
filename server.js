var waitList = [];

//localhost:3000/api/tables should see a JSON of table data

//dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

var reserve = [
	{
		id: "1",
		name: "Derek",
		email: "browntown49@hotmail.com",
		phone: "3309045829"
	}
];

app.get("/all", function (req, res){
	res.json(reserve);
});

app.post("/api/new", function(req, res){
	var newReserve = req.body;

	newReserve.id = newReserve.name.replace(/\s+/g, "").toLowerCase();

	console.log(newReserve);

	reserve.push(newReserve);

	res.json(newReserve);
});

app.listen(PORT, function(){
	console.log("App listen on PORT " + PORT);
})

