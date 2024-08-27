// 18. Desafio Conte o número de vogais em uma string.
function contarVogais(str) {
    let count = 0;

    for(let i=0; i<str.length; i++) {
        switch(str.charAt(i)) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u": count++;
        }
    }

    return count;
}
// C1
console.log(contarVogais("hello")); // 2
// C2
console.log(contarVogais("javascript")); // 3
// C3
console.log(contarVogais("aeiou")); // 5