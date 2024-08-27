// 14. Remova todos os espaços de uma string.
function removerEspacos(str) {
	return str.replace(/\s/g, '');
}
// C1
console.log(removerEspacos("hello world")); // "helloworld"
// C2
console.log(removerEspacos(" a b c ")); // "abc"
// C3
console.log(removerEspacos(" ")); // ""