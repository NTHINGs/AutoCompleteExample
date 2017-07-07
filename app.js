var express = require('express');
var app = module.exports = express();

var app = express();

app.get("/api/:id", function(req, res, next) {
	var employees = [
		{employeeAndId: {
			name:'Alonso',
			id:'F0345'
		}},
		{employeeAndId: {
			name:'Juan',
			id:'F0343'
		}},
		{employeeAndId: {
			name:'Manuel',
			id:'F0976'
		}},
		{employeeAndId: {
			name:'Mauricio',
			id:'F0732'
		}},
		{employeeAndId: {
			name:'Alejandro',
			id:'F0768'
		}},
		{employeeAndId: {
			name:'Maria',
			id:'F0652'
		}}
	];

	var result = employees.filter(function(el) { 
      	return el.employeeAndId.id.includes(req.params.id.toUpperCase());
   	});
  	setTimeout(function () {
	  	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8887');
	  	console.log(result);
	  	res.send(result);
  	}, 3000)
});

app.listen(3000);
console.log("[ OK ] Listening on port 3000");