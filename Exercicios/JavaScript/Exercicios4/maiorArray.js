// 13. Encontre o maior número em um array.
function maiorArray(array) {
	return Math.max(...array);
}
// C1
console.log(maiorArray([1, 2, 3, 4, 5])); // 5
// C2
console.log(maiorArray([-1, -2, -3, -4, -5])); // -1
// C3
console.log(maiorArray([10, 20, 30, 40, 50])); // 50
// C4
console.log(maiorArray([])); // -Infinity