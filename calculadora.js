const soma = require("./soma");
const subtracao = require("./subtracao");
const multiplicacao = require("./multiplicacao");
const divisao = require("./divisao");


let numero1 = 10;
let numero2 = 20;

console.log("Calculadora");
console.log("#############");

console.log("Soma: " + soma(numero1, numero2));
console.log("Subtração: " + subtracao(numero1, numero2));
console.log("Multiplicação: " + multiplicacao(numero1, numero2));
console.log("Divisão: " + divisao(numero1, numero2));
