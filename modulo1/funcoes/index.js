// EXERCICIO DE FUNÇOES
// 1
// a) aparece no console os valores de "variável" multiplicados por 5
// b) não apareceria nada, pois a opção de imprimir no console foi apagada

// 2
// a) vai imprimir tudo minusculo e colalizar uma frase
// b) I - console.log(resposta.toLowerCase())
//   II - console.log(resposta.toUpperCase(cenoura))
//  III - console.log(resposta.replaseAll(cenoura,CENOURAS))

// ESCRITA DE CÓDIGO
// exercicio 1 
 const nome = "lidia lee"
 const idade = "26 anos"
 const cidadeNatal = "Belém PA"
 function mensagem (){

     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidadeNatal} e sou estudante.`)
    
 }
mensagem()

const nome1 = "lidia lee"
const idade1 = Number (26)
const endereço = "residencial Quinta Br Cedro Ananindeua"
const profissão = "desenvolverora web"
function mensagem1 () {
 console.log(`Eu sou ${nome1}, tenho ${idade1} anos, moro no ${endereço} e sou ${profissão}.`)
}
mensagem1()

// EXERCICIO 2
function soma (valor1 , valor2) {
 console.log(valor1 + valor2)
}
soma (1,7)

function comparação (num1 , num2){
console.log(num1 >= num2)
}
comparação (1,7)

const par = (numero1)=> {
 console.log(numero1 % 2 == 0)
}
par (3)

const mensagemString = (frase) => {
 console.log(frase.length , frase.toUpperCase())
}
mensagemString ('Turma Lamarr, melhor não há!')

// EXERCICIO 3
function operaçoesMatematicas () {
let numero1 = Number(prompt("diga um numero"))
let numero2 = Number(prompt("diga outro numero"))
const soma = numero1 + numero2
const subtração = numero1 - numero2
const multiplicação = numero1 * numero2
const divisão = numero1 / numero2

console.log(`Números inseridos: ${numero1},${numero2}
 Soma: ${soma}
 Diferença: ${subtração}
 Multiplicação: ${multiplicação}
 Divisão: ${divisão}`)
}
operaçoesMatematicas ()