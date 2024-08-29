function somaPares(array) {
	let arrayPar = array.filter(value => value % 2 == 0)

	const initValue = 0;
	
	return arrayPar.reduce((accum, curr) => accum + curr, initValue);
}
const lib = {somaPares};
module.exports = lib;