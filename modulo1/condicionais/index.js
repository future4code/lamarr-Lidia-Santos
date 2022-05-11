// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
// QUESTÃO 1
// a) Explique o que o código faz. Qual o teste que ele realiza? 
// imprime um resultado positivo, quaso o numero inserido pelo usuario seja
//  divisivel por  e o seu resto seja igual a zero. E imprime um resulado negativo
// caso o resto não seja igual a zero.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// numeros divisiveis por 2, ou seja, numeros pares.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// numeros ímpares.

//  QUESTÃO 2
// a) Para que serve o código acima?
// verifica os valores das frutas disponiveis

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// "o preço da fruta maçã é R$ 2,25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// "o preço da fruta Pêra é R$ 5,00"

// QUESTÃO 3
// a) O que a primeira linha está fazendo?
// declarando uma variavel por meio do prompt

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// "esse numero passou no teste"; não apareceria nada!
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// sim! a variavel 'mensagem' não foi chamada para nenhuma condicional

// EXERCICIO DE ESCRITA DE CÓDIGO
// QUESTÃO 1

let cnh = Number (prompt("olá, qual sua idade?"))
if (cnh >=18) {
    console.log("você pode dirigir.");

} else {
    console.log("você não pode dirigir.");
}

// QUESTÃO 2

let turno = prompt("qual turno você estuda? (M) matutino, (V) vespertino, (N) notuno")
if (turno === 'M'){
    console.log("Bom dia estudante")
} else {
 if (turno === 'V') {
    console.log("Boa tarde estudante")
 } else {
     console.log("Boa noite estudante")
 }
}

// QUESTÃO 3
let turno1 = prompt("qual turno você estuda? (M) matutino, (V) vespertino, (N) notuno")
switch (turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    default:
        console.log("Boa noite!")
        break
}

// QUESTÃO 4

let generoDoFilme = prompt("Qual o gênero do filme escolhido?")
let valorDoIngresso = Number (prompt ("Qual o valor do ingresso?"))
if ((generoDoFilme === 'fantasia') && (valorDoIngresso < 15)) {
    console.log("Bom filme pra você!")
} else {
    console.log("escolha outro filme :(")
}

