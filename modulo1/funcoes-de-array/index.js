// EXERCICIO DE INTERPRETAÇAO
// 1 QUESTÃO
// a) O que vai ser impresso no console?
// vai ser impresso o nome e o apelido de cada indice do arra

// 2 QUESTÃO
// a) O que vai ser impresso no console?
// vai ser impresso apenas os nomes da array

// 3 QUESTÃO
// a) O que vai ser impresso no console?
// vai imrimir somente os itens diferentes de "chijo".

// ESCRITA DE CÓDIGO
// 1 QUESTÃO
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos
function novoArrayDePets (listaAtual, index,array) {
    return listaAtual.nome
}
let resultado= pets.map (novoArrayDePets)
console.log(resultado)

// b) Crie um novo array apenas com os cachorros salsicha
function selecionaRaca (listaAtual, index,array) {
    return listaAtual.raca === 'Salsicha'
}
let resultadoRaca= pets.filter (selecionaRaca)
console.log(resultadoRaca)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//  A mensagem deve ser:"Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
let desconto = pets.filter ((item, index, array) =>{
    return item.raca === 'Poodle'
}) .map ((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(desconto)

// QUESTÃO 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a) Crie um novo array que contenha apenas o nome de cada item
let listaNova = produtos.map((item) =>{
    return item.nome
})
console.log(listaNova)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
//  aplicando 5% de desconto em todos eles
const arrayDesconto = produtos.map((item) => {
    return {
        nome: item.nome, preço: (item.preco - (item.preco * 0.95))
    }
})
console.log(arrayDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((item) => {
 return item.categoria === 'Bebidas'
})
console.log(bebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
const marcaYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
})
console.log(marcaYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]".
//  Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
let mensagemYpe = produtos.filter ((item, index, array) =>{
    return item.nome.includes ("Ypê")
}) .map ((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(mensagemYpe)
