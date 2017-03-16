/**
 * New node file
 */

//var should = require('should'); 
var assert = require('assert');
var request = require('request');
var chai=require('chai');
var should=require("chai").should();
describe("Test First",function(){
	it("my first test",function(){
		var url="http://127.0.0.1:1337/";
		console.log("Hello mausham");
		request(url,function(err,res,body){
			if (err) {
	            throw err;
	          }
//			console.log(body)
			var data=JSON.parse(body);
			console.log(data.abc)
			console.log(res.statusCode)
	          // this is should.js syntax, very clear
	          res.statusCode.should.equal(200);
//	          done();
		})
	})
})
