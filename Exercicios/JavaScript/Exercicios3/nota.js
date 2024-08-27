// 8. Determine o valor de uma nota utilizando o sistema alfabético (A-F) à partir da
// porcentagem de aproveitamento de um aluno (0 a 100%), conforme ilustrado na tabela
// abaixo:
// Porcentagem de acerto | Nota alfabética
// maior ou igual a 90%  | A
// entre 80 e 89%        | B
// entre 70 e 79%        | C
// entre 60 e 69%        | D
// menor que 60%         | F

function valorNota(x) {
	if(x >= 90) return "A";
	if(x >= 80) return "B";
	if(x >= 70) return "C";
	if(x >= 60) return "D";
	
	return "F";
}

// C1
console.log(valorNota(90));  // A
// C2
console.log(valorNota(75));  // C
// C3
console.log(valorNota(60));  // D
// C4
console.log(valorNota(0));  // F
// C5
console.log(valorNota(59));  // F
// C6
console.log(valorNota(89));  // B
// C7
console.log(valorNota(69));  // D
// C8
console.log(valorNota(79));  // C
// C9
console.log(valorNota(99));  // A
