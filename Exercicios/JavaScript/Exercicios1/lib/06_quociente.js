function divisao(a,b) {
	resultado = (a - a % b) / b;

	return resultado;
}
c1 = divisao(10,3);
console.log(c1);
c2 = divisao(9,3);
console.log(c2);
c3 = divisao(9,2);
console.log(c3);
c4 = divisao(7,5);
console.log(c4);
c5 = divisao(0,5);
console.log(c5);