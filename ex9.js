// 9. Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.

let prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

while (num >= 0) {
  console.log(num);
  num--; 
}
console.log("Contagem regressiva concluída!");
