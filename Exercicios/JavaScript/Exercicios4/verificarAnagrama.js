// 19. Desafio Verifique se uma string é um anagrama de outra.
const {verificarAnagrama} = require("./modulo");
// C1
console.log(verificarAnagrama("listen", "silent") === true); // true
// C2
console.log(verificarAnagrama("hello", "world") === false); // false
// C3
console.log(verificarAnagrama("evil", "vile") === true); // true