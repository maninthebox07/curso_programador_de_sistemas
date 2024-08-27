// 11. Calcule a média de um array de números.
function mediaArray(array) {
	const initValue = 0;
	
	if(array.length == 0) return 0;
	return array.reduce((accum, curr) => accum + curr, initValue) / array.length;

	
}
// C1
console.log(mediaArray([1, 2, 3, 4, 5])); // 3
// C2
console.log(mediaArray([10, 20, 30, 40, 50])); // 30
// C3
console.log(mediaArray([5, 5, 5, 5, 5])); // 5
// C4
console.log(mediaArray([])); // 0