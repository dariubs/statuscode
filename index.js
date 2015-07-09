#!/usr/bin/env node

"use strict";

var app = require('commander');
var codes = require('./codes').codes;

function isValidStatusCode(sc){
	return true;
}

function scInfo(sc){
	return codes[sc]
}

function help(){
	console.log("Usage: statuscode <httpStatusCode>")
}

app
	.version('0.1.0')
	.parse(process.argv);

if(!app.args.length) {
	
	console.log("bad command");
	
}else{
	for (var i in app.args){
		if(isValidStatusCode(app.args[i])){
			console.warn("\n" + app.args[i] + " "+ scInfo(app.args[i]).minidef)
			console.log("\n" + scInfo(app.args[i]).maxidef)
			
		}
	}
}

