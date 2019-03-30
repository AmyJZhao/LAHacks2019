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