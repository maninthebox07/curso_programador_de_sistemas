// 16. Desafio Verifique se uma string é um palíndromo.
function verificarPalindromo(str) {
	strInverse = Array.from(str).reverse().join("");

	return strInverse === str ? true : false;
}
// C1
console.log(verificarPalindromo("racecar")); // true
// C2
console.log(verificarPalindromo("hello")); // false
// C3
console.log(verificarPalindromo("madam")); // true