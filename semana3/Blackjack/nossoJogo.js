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

console.log('Bem vindo ao jogo de Blackjack d@s Parcêr@!'+('\n')
+'Para começar, clique em "Iniciar Rodada".');
function startGame(){
   const startU = confirm('Iniciar uma nova rodada?')
   let cUser = '';
   let cBot = '';
   let sbut = startU;

   while(sbut){
      buser = comprarCarta()
      cUser = buser.texto
      pUser = buser.valor
      bbot = comprarCarta()
      cBot = bbot.texto
      pBot = bbot.valor
      const muser = 'Sua carta: '+cUser+' - pontuação '+pUser;
      const mbot = 'Carta do Computador: '+cBot+' - pontuação '+pBot;
      console.log(muser)
      console.log(mbot)

      if(pUser>pBot){
         console.log('Você ganhou, parcêr@!!!')
      }else if(pUser===pBot){
         console.log('Empate, parcêr@!')
      }else{
         console.log('Tu perdeu, parcêr@...')
      } sbut = confirm('Gostaria de tentar novamente?');
   }console.log('Aaaah...Que pena! Valeu e até a próxima!')
}



