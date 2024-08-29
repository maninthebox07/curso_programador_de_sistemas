// 10. Calcule a soma dos números pares de um array.
function somaPares(array) {
	let arrayPar = array.filter(value => value % 2 == 0)

	const initValue = 0;
	
	return arrayPar.reduce((accum, curr) => accum + curr, initValue);
}

// 9. Calcule a soma dos números de um array.
function somaArray(array) {
	const initValue = 0;
	
	return array.reduce((accum, curr) => accum + curr, initValue);
}

const lib = {somaPares, somaArray};
module.exports = lib;