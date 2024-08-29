const fs = require('fs');

var input = require('fs').readFileSync('./input.txt').toString();
var lines = input.split('\n');

//////////

let A = Number(lines[0]);
let B = Number(lines[1]);

console.log("X =", A + B);