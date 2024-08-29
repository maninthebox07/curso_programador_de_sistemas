// 19. Desafio Verifique se uma string é um anagrama de outra.
function verificarAnagrama(str, str2) {
	if(str.length != str2.length) return false;

    let a = str.split('').sort().join('');
    let b = str2.split('').sort().join('');

    return a == b ? true : false;
}
// C1
console.log(verificarAnagrama("listen", "silent")); // true
// C2
console.log(verificarAnagrama("hello", "world")); // false
// C3
console.log(verificarAnagrama("evil", "vile")); // true