// 9. Calcule a soma dos números de um array.
function somaArray(array) {
	const initValue = 0;
	
	return array.reduce((accum, curr) => accum + curr, initValue);
}

// 10. Calcule a soma dos números pares de um array.
function somaPares(array) {
	let arrayPar = array.filter(value => value % 2 == 0)

	const initValue = 0;
	
	return arrayPar.reduce((accum, curr) => accum + curr, initValue);
}



// 11. Calcule a média de um array de números.
function mediaArray(array) {
	const initValue = 0;
	
	if(array.length == 0) return 0;
	return array.reduce((accum, curr) => accum + curr, initValue) / array.length;
	
}

// 12. Calcule a soma dos dígitos de um número.
function somaDigitos(num) {
	let arrayNumber = String(num).split("").map((num)=>{return Number(num)});

	return arrayNumber.reduce((accum, curr) => accum + curr);
}

module.exports = {
	somaArray,
	somaPares, 
	mediaArray,
	somaDigitos,
};