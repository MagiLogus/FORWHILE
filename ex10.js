// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

let prompt = require('prompt-sync')();

let numero;

while (numero !== 0) {
  numero = parseInt(prompt("Digite um número ou 0 para sair: "));
}