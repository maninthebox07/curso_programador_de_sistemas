// 1. Verifique se um número é positivo, negativo ou zero
function verificarNumero(x) {
	if(x == 0) return "Zero";

	return Number(x > 0) ? "Positivo" : "Negativo";
}

// C1
console.log(verificarNumero(5));  // Positivo
// C2
console.log(verificarNumero(-3));  // Negativo
// C3
console.log(verificarNumero(0));  // Zero
// C4
console.log(verificarNumero("1110"));  // Positivo
// C5
console.log(verificarNumero("-987654321"));  // Negativo