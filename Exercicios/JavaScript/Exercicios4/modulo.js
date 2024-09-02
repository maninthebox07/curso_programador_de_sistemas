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

// 13. Encontre o maior número em um array.
function maiorArray(array) {
	return Math.max(...array);
}

// 14. Remova todos os espaços de uma string.
function removerEspacos(str) {
	return str.replace(/\s/g, '');
}

// 15. Inverta uma string.
function inverterString(str) {
	return Array.from(str).reverse().join("");

}

// 16. Desafio Verifique se uma string é um palíndromo.
function verificarPalindromo(str) {
	strInverse = Array.from(str).reverse().join("");

	return strInverse === str ? true : false;
}

// 17. Desafio Verifique se uma string contém apenas números.
function apenasNumeros(str) {
	return str == Number(str) ? true : false;
}

// 18. Desafio Conte o número de vogais em uma string.
function contarVogais(str) {
    let count = 0;

    for(let i=0; i<str.length; i++) {
        switch(str.charAt(i)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u": count++;
        }
    }

    return count;
}

// 19. Desafio Verifique se uma string é um anagrama de outra.
function verificarAnagrama(str, str2) {
	if(str.length != str2.length) return false;

    let a = str.split('').sort().join('');
    let b = str2.split('').sort().join('');

    return a == b ? true : false;
}

module.exports = {
	somaArray,
	somaPares, 
	mediaArray,
	somaDigitos,
	maiorArray,
	removerEspacos,
	inverterString,
	verificarPalindromo,
	apenasNumeros,
	contarVogais,
	verificarAnagrama,
};