var express = require('express');
var app = express(); 
var fs= require('fs');

app.get('/list',function(req,res){
	//res.send('call listing users');
	fs.readFile('users.json','utf8',function(err,data){
		console.log('users.json opened');
		console.log(data); //users.json's data printed to console 
		res.end(data);
	});  
});

app.get('/add',function(req,res){
	//res.send('call adding user');
	//127.0.0.1:8000/add?name=harezmi&pass=999&email=harezmi@gmail.com
	var newusr = { 
		"usr4" : {
			"name" : req.query.name, 
			"pass" : req.query.pass,
			"email" : req.query.email
		}
	};
	fs.readFile('users.json','utf8',function(err,data){
		data = JSON.parse(data);
		data["usr4"] = newusr["usr4"];
		console.log(JSON.stringify(data));
		res.end(JSON.stringify(data));
		fs.writeFile('users.json',JSON.stringify(data),function(err){
			console.log('error on updating users.json');
		});
	}); 
	
});

app.get('/delete',function(req,res){
	//http://127.0.0.1:8000/delete?id=2
	fs.readFile('users.json','utf8',function(err,data){
		data = JSON.parse(data);
		var id = "usr" + req.query.id;
		delete data[id];
		console.log(JSON.stringify(data));
		res.end(JSON.stringify(data));
		fs.writeFile('users.json',JSON.stringify(data),function(err){
			console.log('error on updating users.json');
		});
	});

});

app.get('/search',function(req,res){
	//http://127.0.0.1:8000/search?id=2
	fs.readFile('users.json','utf8',function(err,data){
		data = JSON.parse(data);
		var id = "usr" + req.query.id;
		console.log(data[id]);
		console.log(JSON.stringify(data));
		res.end(JSON.stringify(data[id]));

	}); 
});


var server = app.listen(8000,function (){console.log('server working');});
