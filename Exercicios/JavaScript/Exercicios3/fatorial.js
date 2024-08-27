// 9. Calcule o fatorial de um número

function calcularFatorial(x){
	let total = 1;

	for(let i=1; i<=x; i++) {
		total = total * i;
	}

	return total;
}

// C1
console.log(calcularFatorial(5));  // 120
// C2
console.log(calcularFatorial(0));  // 1
// C3
console.log(calcularFatorial(3));  // 6
// C4
console.log(calcularFatorial(12));  // 479001600