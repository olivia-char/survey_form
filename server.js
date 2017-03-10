var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("views",__dirname + "/views");

app.set("view engine", "ejs"); 


app.get('/', function (request, response){
	var survey = [];
	response.render('index', {index: survey});
});

app.post('/survey', function (request, response){
	var survey = {
		name: request.body.name,
		location: request.body.location,
		language: request.body.language,
		comment: request.body.comment
	};
	response.render('survey', {survey: survey});
	
	console.log('POST DATA \n\n', request.body);
	
});

app.listen('8000', function(){
	console.log('All Gooda port 8000: survey_form');
})