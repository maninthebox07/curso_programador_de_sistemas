// 15. Inverta uma string.
function inverterString(str) {
	return Array.from(str).reverse().join("");

}
// C1
console.log(inverterString("hello")); // "olleh"
// C2
console.log(inverterString("world")); // "dlrow"
// C3
console.log(inverterString("abc")); // "cba"