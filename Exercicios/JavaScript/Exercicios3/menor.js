// 2. Encontre o menor de três números

function encontrarMenor(x, y, z){
	let menor;

	x < y ? menor = x : menor = y;
	z < menor ? menor = z : menor = menor;

	return menor;
}

// C1
console.log(encontrarMenor(3, 7, 5));  // 3
// C2
console.log(encontrarMenor(-1, -5, -3));  // -5
// C3
console.log(encontrarMenor(8, 2, 10));  // 2