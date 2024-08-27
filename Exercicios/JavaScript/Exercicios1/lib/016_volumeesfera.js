function volumeEsfera(r) {
	let vol = (4 * 3.14159 * r**3)/3;
	let volArrendondado = vol.toFixed(4);

	return volArrendondado;
}
c1 = volumeEsfera(3);
console.log(c1);
c2 = volumeEsfera(5);
console.log(c2);
c3 = volumeEsfera(1.5);
console.log(c3);