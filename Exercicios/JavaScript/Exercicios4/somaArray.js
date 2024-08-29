// 9. Calcule a soma dos números de um array.
function somaArray(array) {
	const initValue = 0;
	
	return array.reduce((accum, curr) => accum + curr, initValue);
}
// C1
console.log(somaArray([1, 2, 3, 4, 5]) == 15); // 15
// C2
console.log(somaArray([2, 4, 6, 8]) == 20); // 20
// C3
console.log(somaArray([1, 3, 5, 7]) == 16); // 16
// C4
console.log(somaArray([0]) == 0); // 0
// C5
console.log(somaArray([]) == 0); // 0