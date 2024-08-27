// 4. Verifique se um número é ímpar ou par

function parOuImpar(x) {
	return x % 2 ? "Impar" : "Par";
}

// C1
console.log(parOuImpar(4));  // Par
// C2
console.log(parOuImpar(7));  // Impar
// C3
console.log(parOuImpar(0));  // Par
// C4
console.log(parOuImpar(-5));  // Impar