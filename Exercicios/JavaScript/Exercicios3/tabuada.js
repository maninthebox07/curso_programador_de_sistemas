// 12. Crie um procedimento que, dado um número, imprima a tabuada da multiplicação

function tabuada(x) {
	for(let i=0; i<=10; i++) {
		console.log(x + " x " + i + " = " + (x * i));
	}
	console.log("");
}

// C1
tabuada(2);
// C2
tabuada(10);