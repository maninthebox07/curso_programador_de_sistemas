// 6. Desafio Verifique se um número é primo

function primo(x){
	if(x <= 1) return false;
	if(x == 2) return true;

	for(let i=2; i<x; i++) {
		if(x % i === 0) return false;
	}
	return true;
}

// C1
console.log(primo(7));  // true
// C2
console.log(primo(10));  // false
// C3
console.log(primo(13));  // true
// C4
console.log(primo(0));  // false
// C5
console.log(primo(1));  // false
// C6
console.log(primo(2));  // true