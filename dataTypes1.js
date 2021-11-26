var val;
var datatype1 = typeof val;

var val = 0;
var datatype2 = typeof val;

var val = 10n;
var datatype3 = typeof val;

var val = true;
var datatype4 = typeof val;

var val = "foo";
var datatype5 = typeof val;

var datatype6 = typeof Symbol("id");

var datatype7 = typeof Math;

var datatype8 = typeof null;

let sayHi = function() {
	console.log.apply("Say Hi");
};

var datatype9 = typeof sayHi;
console.log(datatype);

