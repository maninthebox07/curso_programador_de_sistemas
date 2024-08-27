// 5. Calcule a soma de todos os números até N

function numerosAteN(n) {
	let total = 0;

	for(let i=1; i<=n; i++) {
		total = total + i;
	}

	return total;
}

// C1
console.log(numerosAteN(5));  // 15
// C2
console.log(numerosAteN(10));  // 55
// C3
console.log(numerosAteN(1));  // 1
// C4
console.log(numerosAteN(64));  // 2080
