//AULA DE VARIÁVEIS
let minhaIdade = Number(prompt("Olá, qual sua idade?"))
let idadeDoAmigo = Number(prompt("e qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade idade é maior que a do seu melhor amigo(a)?")
console.log(minhaIdade > idadeDoAmigo)

let subtraçao = minhaIdade - idadeDoAmigo
console.log (subtraçao, "anos")

let numeroPar = Number(prompt("Olá, digite aqui um número par"))
let resto = numeroPar % 2
console.log(resto)
// sempre quando é um número par, o resulado é "zero". e quando é impar, o resultado é "um"

let idadeEmAnos = Number(prompt("Olá, qual sua idade?"))

const idadeMeses = idadeEmAnos * 12
const idadeDias = idadeMeses * 30
const idadeHoras = idadeDias * 24

console.log(idadeMeses, "meses")
console.log(idadeDias, "dias")
console.log(idadeHoras, "horas")

let numero1 = Number(prompt("Olá, esolha um número"))
let numero2 = Number(prompt("agora escolha outro número"))

console.log("O primeiro número um é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número um é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo número", numero1 / numero2 === 0)
console.log("O segundo número é divisível pelo primeiro número", numero2 / numero1 === 0)