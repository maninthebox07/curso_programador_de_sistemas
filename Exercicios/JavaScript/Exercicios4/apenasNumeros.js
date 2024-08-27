// 17. Desafio Verifique se uma string contém apenas números.
function apenasNumeros(str) {
	return str == Number(str) ? true : false;
}
// C1
console.log(apenasNumeros("12345")); // true
// C2
console.log(apenasNumeros("abc123")); // false
// C3
console.log(apenasNumeros("67890")); // true