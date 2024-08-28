// 11. Desafio Verifique se um ano é bissexto

function anoBissexto(ano) {
	if(ano % 400 == 0) return true;
	if(ano % 100 == 0) return false;
	if(ano % 4 == 0) return true;
	
	return false;
}

// C1
console.log(anoBissexto(2020));  // true
// C2
console.log(anoBissexto(2024));  // true
// C3
console.log(anoBissexto(1999));  // false
// C4
console.log(anoBissexto(2014));  // false
// C5
console.log(anoBissexto(2025));  // false
// C6
console.log(anoBissexto(1900));  // false
// C7
console.log(anoBissexto(2000));  // true
// C8
console.log(anoBissexto(2100));  // false