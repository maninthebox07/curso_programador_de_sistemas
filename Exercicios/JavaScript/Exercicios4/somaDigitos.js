// 12. Calcule a soma dos dígitos de um número.
function somaDigitos(num) {
	let arrayNumber = String(num).split("").map((num)=>{return Number(num)});

	return arrayNumber.reduce((accum, curr) => accum + curr);
}
// C1
console.log(somaDigitos(123)); // 6
// C2
console.log(somaDigitos(456)); // 15
// C3
console.log(somaDigitos(789)); // 24