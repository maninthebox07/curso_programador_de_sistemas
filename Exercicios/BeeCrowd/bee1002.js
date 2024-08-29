const fs = require('fs');

var input = require('fs').readFileSync('./input.txt').toString();
var lines = input.split('\n');

//////////

let r = Number(lines[0]);
const n = 3.14159;
area =  n * (r*r);

console.log("A=" + area.toFixed(4));