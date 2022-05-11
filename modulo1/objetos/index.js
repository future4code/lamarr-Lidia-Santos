// EXERCICIO DE ANÁLISE DE CÓDIGO
// QUESTÃO 1
// a) O que vai ser impresso no console?
// 'Matheus Nachtergaele'
// 'Virginia Cavendish'
// canal: "Globo", horario: "14h"

// QUESTÃO 2
// a) O que vai ser impresso no console?
// nome: "Jubo", idade: 3, raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// pega toda a informaão contida no objeto e, modifica ou adciona.

// EXERCICIO 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// imprimirá a a informação 'false'

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?.
// porque não foi definido nenhuma informação dentro do objeto chamado 'altura'.


// EXERCICIO DE ESCRITA DE CÓDIGO
// QUESTÃO 1
// a)
const pessoa = {
    nome: "Nero", 
    apelidos: ["Nerinho" , "bebê" , "molequinho"]
 }
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)

//   b)
const pessoa1 ={...pessoa, apelidos: ["insetinho" , "neném" , "taturugo"]

}
console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}`);

// QUESTÃO 2
// a)
const formulario = {
    nome: "lidia",
    idade: 26,
    profissão: "desenvolvedora web"
}
const formulario1 = {
    nome: "edson",
    idade: 26,
    profissão: "operador de empilhadeira"
}
// b)
function leitura(formulario, formulario1) {
 return leitura(formulario, formulario1)

}
console.log([(formulario.nome), (formulario.nome.length),(formulario.idade), (formulario.profissão), (formulario.profissão.length)]);
 console.log([(formulario1.nome), (formulario1.nome.length),(formulario1.idade), (formulario1 .profissão), (formulario1.profissão.length)]);

//  EXERCICIO 3
// a)
let carrinho = ([])
// b)
const fruta1 = {
    nome: "pitaya",
    disponibilidade: true
}
const fruta2 = {
    nome: "fruta do conde",
    disponibilidade: true
}
const fruta3 = {
    nome: "abacate",
    disponibilidade: true
}
// c)
console.log(carrinho.push(fruta1, fruta2, fruta3))
console.log(carrinho)