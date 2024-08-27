// 10. Calcule a soma dos números pares de um array.
function somaPares(array) {
    let par = array.filter(value => value % 2 == 0);

    let total = 0;

    for(let i=0; i<par.length; i++) {
        total += par[i];
    }

    return total;
}
// C1
console.log(somaPares([1, 2, 3, 4, 5])); // 6
// C2
console.log(somaPares([2, 4, 6, 8])); // 20
// C3
console.log(somaPares([1, 3, 5, 7])); // 0