// 10. Desafio Verifique se um caractere é uma vogal ou consoante

function vogalOuConsoante(letra){
	let vogal = ["a", "e", "i", "o", "u"];

	return vogal.includes(letra) ? "Vogal" : "Consoante";
}

// C1
console.log(vogalOuConsoante("a"));  // Vogal
// C2
console.log(vogalOuConsoante("b"));  // Consoante
// C3
console.log(vogalOuConsoante("e"));  // Vogal
// C4
console.log(vogalOuConsoante("x"));  // Consoante
// C5
console.log(vogalOuConsoante("y"));  // Consoante