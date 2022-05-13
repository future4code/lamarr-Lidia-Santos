// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
 return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a -b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter(x => x % 2 === 0)
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    const par = array.filter((array) => (array % 2 === 0))
    for (numero of par) {
        let elevado = numero*numero
        novoArray.push(elevado)
    } return novoArray
}console.log(novoArray)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(Math,array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNum 
let divisao
let dife 
if (num1 > num2) {
  maiorNum= num1
  divisao= num1 % num2 === 0
  dife= num1 - num2
}else {
  maiorNum= num2
  divisao= num2 % num1 === 0
  dife= num2 - num1
} 
objetoDeNumeros= {
  maiorNumero: maiorNum,
  maiorDivisivelPorMenor: divisao,
  diferenca: dife
}
return objetoDeNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; numerosPares.length < n; i++) {
      if (i % 2 == 0) {
          numerosPares.push(i)
      }
  }
  return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
   return ("Equilatero")
  } else {
   if  (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
   return ("Escaleno")
  } else {
    return ("Isorceles")
  }
 return classificaTriangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}