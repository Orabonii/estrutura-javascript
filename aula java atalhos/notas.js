/*
  Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
  dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
  média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
  Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
  aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
  condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.
*/
 
let lerNota1
let lerNota2
let lerNota3
let lerNota4
 
let notasMedia
let novaMedia
let lerNotaExame
 
lerNota1 = parseFloat(prompt("Digite a 1º Nota: "))
lerNota2 = parseFloat(prompt("Digite a 2º Nota: "))
lerNota3 = parseFloat(prompt("Digite a 3º Nota: "))
lerNota4 = parseFloat(prompt("Digite a 4º Nota: "))
 
notasMedia = (lerNota1 + lerNota2 + lerNota3 + lerNota4) / 4
 
if (notasMedia >=  7) {
  alert (`O aluno foi Aprovado com a média de: ${notasMedia.toFixed(2)}`)
} else if (notasMedia < 7) {
  lerNotaExame = parseFloat(prompt("Digite a Nota do Exame: "))
  novaMedia = (notasMedia + lerNotaExame) / 2
  if (novaMedia >= 5) {
    alert (`O Aluno foi Aprovado por Exame. Nota da Media ${novaMedia.toFixed(2)}!`)
  } else {
    alert (`O Aluno foi Reprovado. Nota da Media ${novaMedia.toFixed(2)}!`)
  }
}