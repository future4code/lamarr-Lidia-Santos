// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// AULA DE STRING E ARRAY
// EXERCICIO 1
let userName = (prompt("Olá, qual sem nome?"))
let emailDoUsuario = (prompt("Qual sem email?"))
console.log("O email", emailDoUsuario, "foi cadastrado com sucesso. Seja bem vindo(a)", userName)

// EXERCICIO 2
let comidasFavoritas = ['vatapá paraense','coxinha', 'bolo', 'pizza', 'x tudo'  ]
console.log ("Essas são as minhas comidas preferidas:", comidasFavoritas)
let pergunta =console.log(prompt("qual sua comida favorita?"))
comidasFavoritas.splice (1,1, pergunta)

// EXERCICIO 3
let listaDeTarefas =[]
let taferasDoUsuario1 = [prompt("ola, qual a primeira tarefa do seu dia?")]
let taferasDoUsuario2 = [prompt("qual a segunda tarefa do seu dia?")]
let taferasDoUsuario3 = [prompt("qual a terceira tarefa do seu dia?")]
console.log(taferasDoUsuario1)
console.log(taferasDoUsuario2)
console.log(taferasDoUsuario3)
let removaDaLista =(prompt("agora remova uma tafera do indice. Ex: 0, 1 ou 2"))
listaDeTarefas.splice (1,0, removaDaLista) 
