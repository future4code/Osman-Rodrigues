import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars1.githubusercontent.com/u/55052153?s=460&u=50d329302cc7121e65d949cbbc0ec7c152ce4577&v=4" 
          nome="Osman Rodrigues" 
          descricao="Oi, eu sou o Osman! Sou estudante de Desenvolvimento Web pela Labenu, compondo o time de estrounautas da turma Julian! :)"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        <CardPequeno 
          imagem="https://i.dlpng.com/static/png/6342398_preview.png"
          endereco="Email:"
          referencia="osmancesar.mr@gmail.com"
        />
        <CardPequeno 
          imagem="https://paulacasimiro.adv.br/wp-content/uploads/2015/06/google-location-icon-16.png"
          endereco="Endereço:"
          referencia="Recife/PE"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Estudante de Desenvolvimento Web - Labenu" 
          descricao="Aprendendo a desenvolver aplicações em HTML, CSS e Javascript, utilizando React e Node. Progresso: 1º módulo concluído de 6." 
        />
        <CardPequeno 
          imagem="https://paulacasimiro.adv.br/wp-content/uploads/2015/06/google-location-icon-16.png"
          endereco="Endereço:"
          referencia="Rua Labenu"
        />
        <CardGrande
          ancora="https://drive.google.com/file/d/13xpK6s53mL7auDHAPKdOvn9yKlQv9Wkk/view" 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Galatic Problem-Solver - NASA" 
          descricao="Participação no maior hackathon do planeta, o Spaceapps Challenge 2019, organizado pela NASA e realizado pelo SEBRAE Labs." 
        />
        <CardPequeno 
          imagem="https://paulacasimiro.adv.br/wp-content/uploads/2015/06/google-location-icon-16.png"
          endereco="Endereço:"
          referencia="CESAR School - Recife/PE"
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
