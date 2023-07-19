// 10. Faça um menu que leve aos exercicios anterior

let prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite o numero do exercicio desejado: \n1-Imprime 1 a 10 \n2-Imprime os pares de 1 a 10\n3-Imprime os numeros impar de 0 a 50 \n4-Tabuada \n5-Fibonnaci \n6-Pares de 0 a 20 \n7-Soma de 0 a 100 \n8-Maioridade \n9-Contagem regressiva \n10-Adivinhe o numero \nSua escolha: '));

switch (numero) {
  case 1:
    for (let contador = 1; contador <= 10; contador++) {
      console.log(contador);
    }
    break;

  case 2:
    for (let par = 2; par <= 10; par += 2) {
      console.log(par);
    }
    break;

  case 3:
    for (let contador = 1; contador < 50; contador += 2) {
      console.log(contador);
    }
    break;

  case 4:
    let tabuada = parseInt(prompt("Digite o numero da tabuada desejada: "));

    if (!isNaN(tabuada)) {
      for (let num = 0; num <= 10; num++) {
        console.log(`${tabuada} x ${num} =  ${(tabuada * num)}`);
      }
    } else {
      console.log("Por favor, digite um número válido.");
    }
    break;

  case 5:
    let a = 0;
    let b = 1;

    for (let i = 1; i <= 10; i++) {
      console.log(a);
      let proximo = a + b;
      a = b;
      b = proximo;
    }
    break;

  case 6:
    let num = 0;

    while (num < 20) {
      num += 2;
      console.log(num);
    }
    break;

  case 7:
    let sum = 0;
    let num1 = 1;

    while (num <= 100) {
      sum += num1;
      num1++;
    }
    console.log("A soma dos números de 1 a 100 é:", sum);
    break;

  case 8:
    let idade = parseInt(prompt("Digite a sua idade: "));

    while (idade < 18) {
      console.log("Digite uma idade válida! ");
      idade = parseInt(prompt("Digite a sua idade: "));
    }

    console.log("Você é maior que 18 anos.");
    break;

  case 9:
    let num2 = parseInt(prompt("Digite um número: "));

    while (num >= 0) {
      console.log(num2);
      num--;
    }
    console.log("Contagem regressiva concluída!");
    break;

  case 10:
    let numero;

    while (numero !== 0) {
      numero = parseInt(prompt("Digite um número ou 0 para sair: "));
    }
    break;

  default:
    console.log("Digite um dia valído !")
    break;
}