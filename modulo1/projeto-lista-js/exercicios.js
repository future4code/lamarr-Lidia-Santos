// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  soma= num1 + num2 
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// EXEMPLO 1
function calculaAreaRetangulo() {
  let altura1 =(prompt("você tem um retângulo, qual a altura dele?"))
  let largura1 =(prompt("qual a largura desse retângulo?"))
  altura1 = 3
  largura1 = 5
  const calculaAreaRetangulo = altura1 * largura1
  console.log(calculaAreaRetangulo)
 return altura1 * largura1

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("qual é o ano atual?"))
  let anoDeNascimento = Number(prompt("qual o ano que você nasceu?"))

console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(_peso, _altura) {
  let IMC = _peso /(_altura*_altura)
  console.log(IMC)

  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 let _nome =prompt("Olá, qual é o seu nome?")
 let _idade =Number(prompt("qual sua idade?"))
 let _email =prompt("e qual seu email?")

 console.log(`Meu nome é ${_nome}, tenho ${_idade} anos, e o meu email é ${_email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const _cor1 = prompt("qual sua cor favorita?")
  const _cor2 = prompt("qual sua segunda cor favorita?")
  const _cor3 = prompt("qual sua terceira cor favorita?")
  console.log([ _cor1, _cor2, _cor3 ])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(_string) {
  // implemente sua lógica aqui
  const novaString = _string.toUpperCase()
  console.log(novaString)

  return novaString

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(_custo, _valorIngresso) {
  // implemente sua lógica aqui
  let valorDoEspetáculo = (_custo / _valorIngresso)
  console.log(valorDoEspetáculo)
  return valorDoEspetáculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(_string1, _string2) {
  // implemente sua lógica aqui
 let comparação = _string1 >= _string2
 console.log(comparação)
 return comparação

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(_array) {
  // implemente sua lógica aqui
 let primeiroElemento = (_array[0])
 console.log(primeiroElemento)
 return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(_array) {
  // implemente sua lógica aqui
  let ultimoElemento = _array.pop()
  console.log(ultimoElemento)
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(_array) {
  // implemente sua lógica aqui
  let primeiro = _array[0]
  _array[0] = _array[_array.length-1]
 _array[_array.length-1] = primeiro
 console.log(_array)
  return _array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(_string1, _string2) {
  // implemente sua lógica aqui
 let retornaMinusculo = [_string1.toLowerCase(), _string2.toLowerCase()]
 console.log(retornaMinusculo)
 let comparação = _string1.toLowerCase() == _string2.toLowerCase()
return comparação
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("qual é o ano atual?")
  let anoDeNascimento = prompt("qual é o seu ano de nascimento?")
  let emissãoDoRg = prompt("qual o ano de emissão do seu RG?")
  

}

// EXERCÍCIO 14
function checaAnoBissexto(_ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}