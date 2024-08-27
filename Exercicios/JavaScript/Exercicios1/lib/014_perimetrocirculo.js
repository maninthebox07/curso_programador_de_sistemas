function perimetroCirculo(r) {
	let calcPerimetro = 2 * 3.14159 * r;
	let calcPerimetroArredondado = calcPerimetro.toFixed(4);

	return calcPerimetroArredondado;
}
c1 = perimetroCirculo(7);
console.log(c1);
c2 = perimetroCirculo(10);
console.log(c2);
c3 = perimetroCirculo(3.5);
console.log(c3);