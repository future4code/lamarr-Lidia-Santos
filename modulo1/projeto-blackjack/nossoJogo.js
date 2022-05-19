/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 console.log("BEM VINDOS AO JOGO BLACKJACK!")
 let jogo = confirm("voce gostaria de iniciar uma nova rodada, jogador?")
 if (jogo) {
    let cartaDaPessoa = comprarCarta ()
    let cartaDaPessoa2 = comprarCarta()
       
      let cartaSistema = comprarCarta()
      let cartaSistema2 = comprarCarta()

      let pontosDaPessoa = cartaDaPessoa.valor + cartaDaPessoa2.valor
      console.log(`Jogador - cartas: ${cartaDaPessoa.texto} ${cartaDaPessoa2.texto} - ${pontosDaPessoa}`)

      let pontosDoSistema = cartaSistema.valor + cartaSistema2.valor
      console.log(`Sistema - cartas: ${cartaSistema.texto} ${cartaSistema2.texto} - ${pontosDoSistema}`)

      if (pontosDaPessoa > pontosDoSistema){
         console.log('Você ganhou, comemore!!')
      } else
      if (pontosDaPessoa<pontosDoSistema){
         console.log('aah! que pena, o sistema ganhou!')
      } else 
      if (pontosDaPessoa === pontosDoSistema) {
         console.log('Vocês empataram!')   
 }
}else{
    console.log("JOGADA ENCERRADA, ATÉ MAIS!")
 }
