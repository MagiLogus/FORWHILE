// 4.Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let prompt = require('prompt-sync')();

let tabuada = parseInt(prompt("Digite o numero da tabuada desejada: "));

if (!isNaN(tabuada)) {
    for (let num = 0; num <= 10; num++) {
        console.log(`${tabuada} x ${num} =  ${(tabuada * num)}`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}