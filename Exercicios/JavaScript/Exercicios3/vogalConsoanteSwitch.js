function vogalOuConsoante(char) {
	switch(char) {
		case "a":
		case "e":
		case "i":
		case "o":
		case "u":
			return "Vogal";
			break;
	}
	return "Consoante";
}

// C1
console.log(vogalOuConsoante("a"));  // Vogal
// C2
console.log(vogalOuConsoante("b"));  // Consoante
// C3
console.log(vogalOuConsoante("e"));  // Vogal
// C4
console.log(vogalOuConsoante("x"));  // Consoante
// C5
console.log(vogalOuConsoante("y"));  // Consoante