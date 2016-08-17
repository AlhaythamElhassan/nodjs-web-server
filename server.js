var express = require('express');
var app = express();
var PORT = 3000;

var midlleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit!');
		next();
	}, 
	logger: function (req, res, next){
		
		console.log('Request: ' + new Date().toString() + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(midlleware.logger);

app.get('/about', midlleware.requireAuthentication,function (req, res){
	res.send('About us... ');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started! in port: ' + PORT);
});
