// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let prompt = require('prompt-sync')();

let sum = 0;
let num = 1;

while (num <= 100) {
    sum += num;
    num++;  
}
console.log("A soma dos números de 1 a 100 é:", sum);

