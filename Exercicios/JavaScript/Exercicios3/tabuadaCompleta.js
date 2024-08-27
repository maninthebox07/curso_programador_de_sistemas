// 13. Desafio Crie um procedimento que imprima a TODA tabuada da multiplicação

function tabuadaCompleta() {
	for(let i=1; i<=10; i++) {
		for(k=0; k<=10; k++) {
			console.log(i + " x " + k + " = " + (i * k));
		}
		console.log("");
		}
	}
tabuadaCompleta();