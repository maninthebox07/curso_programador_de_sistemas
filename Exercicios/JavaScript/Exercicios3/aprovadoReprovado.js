// 3. Classifique um aluno como "Aprovado" ou "Reprovado" de acordo com sua média:

function aprovadoOuReprovado(media) {
	return media >= 7 ? "Aprovado" : "Reprovado";
}

// C1
console.log(aprovadoOuReprovado(10));  // Aprovado
// C2
console.log(aprovadoOuReprovado(7.0));  // Aprovado
// C3
console.log(aprovadoOuReprovado(6.95));  // Reprovado
// C4
console.log(aprovadoOuReprovado(8.8));  // Aprovado
// C5
console.log(aprovadoOuReprovado(0));  // Reprovado
// C6
console.log(aprovadoOuReprovado(2.725));  // Reprovado