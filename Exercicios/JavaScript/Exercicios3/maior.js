// 7. Encontre o maior de três números

function encontrarMaior(x, y, z){
	let maior;

	if(x > y) {
		maior = x;
	} else {
		maior = y;
	}

	if(z > maior) {
		maior = z;
	}

	return maior;
}

// C1
console.log(encontrarMaior(3, 7, 5));  // 7
// C2
console.log(encontrarMaior(-1, -5, -3));  // -1
// C3
console.log(encontrarMaior(8, 2, 10));  // 10