var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
	console.log("Database created!");
	var dbo = db.db("music");
	dbo.createCollection("songs", function(err, res) {
		if(err) throw err;
		console.log("Collection created!");
	});
});

var express = require("express");

var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.listen(3000, (request, response) => {
	console.log("Server is listening on port 3000. Go to http://localhost:3000/");
});

app.get("/", (request, response) => {
	response.render("home", {
		title: "Insert Title Here",
		content: "Hello, World"
	})
});