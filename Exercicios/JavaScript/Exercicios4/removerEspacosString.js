// 14. Remova todos os espaços de uma string.
const {removerEspacos} = require("./modulo");
// C1
console.log(removerEspacos("hello world") === "helloworld"); // "helloworld"
// C2
console.log(removerEspacos(" a b c ") === "abc"); // "abc"
// C3
console.log(removerEspacos(" ") === ""); // ""