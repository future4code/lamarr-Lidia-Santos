

// PROGRAMA DA LIDIA
 let nome = prompt("Qual seu nome?")
 let idade = prompt("qual sua idade?")

  console.log(typeof nome)
  console.log(typeof idade)
// APARECE A EXPRESSÃO "UNDEFINED",
// POIS A VARIÁVEL NÃO FOI DEFINIDA.

 console.log(prompt("Quantos anos você tem?"))
//  USANDO A VARIAVÉL "NULL" O COMANDO NÃO FICA ENGESSADO,
// PODE SER O COMENTÁRIO QUE O USUÁRIO QUISER COLOCAR.
 console.log("oi" ,nome, "você tem" ,idade, "anos")

 let acessorio
 let passaTempo
 let shield

 acessorio = prompt("você usa óculos? -Sim ou Nao")
 passaTempo = prompt("Você assiste séries de tv? -Sim ou Nao")
 shield = prompt("Você gostaria de participar da iniciativa VIGADORES? -Sim ou Nao")

 console.log(acessorio, passaTempo, shield)

let a = 10
let b = 25
let c = 10
a = b
b = c

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10