// 17. Desafio Verifique se uma string contém apenas números.
const {apenasNumeros} = require("./modulo");
// C1
console.log(apenasNumeros("12345") === true); // true
// C2
console.log(apenasNumeros("abc123") === false); // false
// C3
console.log(apenasNumeros("67890") === true); // true