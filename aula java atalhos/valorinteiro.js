/*
  Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
*/
 
var lerValor1
var lerValor2
var diferenca
 
lerValor1 = parseInt(prompt("Digite um Valor: "))
lerValor2 = parseInt(prompt("Digite outro Valor: "))
 
diferenca = lerValor1 - lerValor2
 
if (lerValor2 > lerValor1) {
  diferença = lerValor2 - lerValor1
}
 
alert (`A diferença dos Valores é ${diferenca}`)
alert ("A diferença dos Valores é " + diferenca)