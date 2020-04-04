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
   
   const startU = confirm('Vamo iniciar uma nova rodada?'+('\n')+('\n'))
   let cUser = '';
   let cBot = '';
   let sbut = startU;

   while(sbut){
      buser1 = comprarCarta(); buser2 = comprarCarta(); buser3= comprarCarta();
      let cUser = [' '+buser1.texto,' '+buser2.texto,' '+buser3.texto]
      let pUser = buser1.valor+buser2.valor+buser3.valor
      bbot1 = comprarCarta(); bbot2 = comprarCarta(); bbot3 = comprarCarta();
      let cBot = [' '+bbot1.texto, ' '+bbot2.texto, ' '+bbot3.texto]
      let pBot = bbot1.valor+bbot2.valor+bbot3.valor
      
      uAce = 'teste1' //buser.texto[0]
      bAce = 'teste2'//bbot.texto[0]

      const mBlack = 'Suas duas primeiras cartas são: '+cUser[0]+' e '+cUser[1]+
      '\n'+'A primeira carta do computador foi revelada: '+ cBot[0]+
      "\n"+ 
      "Deseja comprar mais uma carta?";
      const mUser = 'Suas cartas: '+cUser+' - pontuação '+pUser;
      const mBot = 'Cartas do Computador: '+cBot+' - pontuação '+pBot;
      const mAll = mUser+('\n')+mBot+('\n')
      

      const jack = confirm(mBlack)
      if(jack){
         if(pUser>pBot){
            confirm(mAll+'Você ganhou, parcêr@!!!')
         }else if(bbot1.valor===11 && buser1.valor===11){
            sbut = confirm(mAll+'Opa! Não pode haver empate entre Dois Ases. Tente novamente!')
         }else if(pUser===pBot){
            confirm(mAll+'Empate, parcêr@!')
         }else{
            confirm(mAll+'Tu perdeu, parcêr@...')
         } sbut = confirm('Gostaria de tentar novamente?'+('\n')+('\n'));
      }else{
      }
   }confirm('Aaaah...Que pena! Valeu e até a próxima!'+('\n')+('\n'))
}