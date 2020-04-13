import React from 'react';
import './App.css';

function App() {
  const titulo = 'Título do Vídeo';

  function reproduzVideo(){
    alert("O vídeo está sendo reproduzido")
  }
  function criarVideo(){
    alert("Redirecionando para criação de vídeo")
  }
  return (
    <div>
      <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Pequisar" id="campoDeBusca" />
          <img className="icone-navegacao" onClick={criarVideo}
           src="https://cdn0.iconfinder.com/data/icons/interaction-7/70/video__filmstrip__edit__create__media-512.png" alt=""/>
          
      </header>

      <main>
          <nav className="menu-vertical">
              <ul>
                  <li className="botoes-meunu-vertical">Início</li>
                  <li className="botoes-meunu-vertical">Em alta</li>
                  <li className="botoes-meunu-vertical">Inscrições</li>
                  <hr />
                  <li className="botoes-meunu-vertical">Originais</li>
                  <li className="botoes-meunu-vertical">Histórico</li>
              </ul>
          </nav>
          
          <section className="painel-de-videos">
              <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=1 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=2 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=3 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=4 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=5 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=6 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=7 " alt="" />
                  <h4>{titulo}</h4>
              </div>
              <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                  <img src="https://picsum.photos/400/400?a=8 " alt="" />
                  <h4>{titulo}</h4>
              </div>
          </section>
      </main>

      <footer>
          <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
  );
}

export default App;
