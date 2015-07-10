#!/usr/bin/env node

"use strict";


var app = require('commander');
var codes = require('./codes').codes;


app
	.version('0.1.0')
	.parse(process.argv);


function isValidStatusCode(sc){
	if(codes[sc]){
		return true;
	}else{
		return false;
	}
}


function scInfo(sc){
	return codes[sc];
}


if(!app.args.length) {
	console.log("bad command");
}else{
	for (var i in app.args){
		if(isValidStatusCode(app.args[i])){
			console.warn("\n" + app.args[i] + " "+ scInfo(app.args[i]).minidef);
			console.log("\n" + scInfo(app.args[i]).maxidef);
		}else{
			console.log("\n invalide status code \n");
		}
	}
}
