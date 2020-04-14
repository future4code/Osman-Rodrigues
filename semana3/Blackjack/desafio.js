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

//Function que é acionada pelo 'onclick' do botão startH e da início ao jogo de Blackjack
function startHardGame(){
   
   const startU = confirm('Vamo iniciar uma nova rodada?'+('\n')+('\n'))//Inicia a cadeia de validacao que estrutura o flow do jogo
   let sbut = startU;
   //Bloco de loop while que valida o start do jogo
   while(sbut){

      //Escopo de definição da mão inicial
      let stCardUser = comprarCarta(); 
      let ndCardUser = comprarCarta(); //2ª(2nd) carta inicial do jogador
      let stCardBot = comprarCarta(); //1ª (1st) carta inicial do computador ou robo(bot)
      let ndCardBot = comprarCarta();

      //Escopo de armazenamento de informações
      let cUser = [stCardUser.texto, ndCardUser.texto]; //Array de cartas do jogador 
      let pUser = stCardUser.valor+ndCardUser.valor ; //Array de pontuação do jogador
      let cBot = [stCardBot.texto, ndCardBot.texto] ;
      let pBot = stCardBot.valor + ndCardBot.valor ;
      
      //Escopo de armazenamento do evento 'Dois Ases na mão inicial'
      uAces = cUser[0][0] + cUser[1][0];
      bAces = cBot[0][0] + cBot[1][0];

      //Escopo de armazenamento de mensagens para confirmação e/ou alertas
      let mBlack = 'Suas cartas são: '+cUser+
      '\n'+'A carta revelada do computador é: '+ cBot[Math.round(Math.random()*1)]+
      "\n"+ 
      "Deseja comprar mais uma carta?"; //Msg de mostra da mão inicial, com revelação de uma carta aleatória do bot

      function bjAlert(){
         let mUser = 'Suas cartas: '+cUser+' - pontuação '+pUser;
         let mBot = 'Cartas do Computador: '+cBot+' - pontuação '+pBot;
         let mAll = mUser+('\n')+mBot+('\n');
         return mAll
      } //Function de apresentação do resultado da rodada

      //Bloco de compra de cartas extras mediante validação de confirms e de decisão do resultado
      let jack = confirm(mBlack);
      if(jack && pUser <= 21){
         //Escopo de compra do jogador
         while(jack && pUser <= 21){
            bcard = comprarCarta();         
            pUser += bcard.valor;
            cUser.push(bcard.texto);
            mBlack = 'Carta comprada: '+bcard.texto+
                  "\n"+
                  'Suas cartas são: '+cUser+'\n';
            if(pUser < 21){
               jack = confirm(mBlack+'Deseja comprar mais uma carta?')
            }else{
               alert(mBlack+'Pontuação Máxima (21) atingida ou ultrapassada! Não é permitido comprar mais cartas.')
               jack = false
            }      
         }
         //Escopo de compra do bot
         while(pBot <= pUser){
            bcard = comprarCarta();         
            pBot += bcard.valor;
            cBot.push(bcard.texto);     
         }
         //Escopo de validação das pontuações e decisão dos resultados caso o jogador tenha optado por comprar mais cartas
         if(pUser > 21 || pBot <= 21 && pUser < pBot){
            alert(bjAlert()+'Tu perdeu, parcêr@...');
         }else if(uAces === 'AA' || bAces === 'AA'){
            alert(bjAlert()+'Opa! Dois Ases de início não é permitido. Vamos embaralhar e recomeçar a rodada!')
         }else if(pUser===pBot){
            alert(bjAlert()+'Empate, parcêr@!')
         }else if(pBot > 21){
            alert(bjAlert()+'Você ganhou, parcêr@!!!')
         }
         else{
            alert(bjAlert()+'Você ganhou, parcêr@!!!')
         }
         sbut = confirm('Jogar outra rodada?'+('\n')+('\n'));//Inicia nova rodada
      }
      
      else{
         //Escopo caso usuário tenha optado por manter a mão inicial
         if(pUser > 21 || pBot <= 21 && pUser < pBot){
            alert(bjAlert()+'Tu perdeu, parcêr@...');
         }else if(uAces === 'AA' || bAces === 'AA'){
            alert(bjAlert()+'Opa! Dois Ases de início não é permitido. Vamos embaralhar e recomeçar a rodada!')
         }else if(pUser === pBot){
            alert(bjAlert()+'Empate, parcêr@!')
         }else if(pBot > 21){
            alert(bjAlert()+'Você ganhou, parcêr@!!!')
         }
         else{
            alert(bjAlert()+'Você ganhou, parcêr@!!!')
         } 
         sbut = confirm('Jogar outra rodada?'+('\n')+('\n'));//Inicia nova rodada
      }
   }
   alert('Aaaah...Que pena! Valeu e até a próxima!'+('\n')+('\n'))//Encerra o jogo
}
