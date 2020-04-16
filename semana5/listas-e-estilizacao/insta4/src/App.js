import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'
//styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-items: flex-start;
  justify-content: space-around
`;
const TimelineMain = styled.main`

`;
const FormsSection = styled.section`

`;
const InputForms = styled.input`

`;
const SendFormsButton = styled.button`

`;

//state class components
class App extends React.Component {
  state = {
    infosPosts: [
      { nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50?a=1', fotoPost: 'https://picsum.photos/200/150?a=2'}, 
      { nomeUsuario: 'darvas', fotoUsuario: 'https://picsum.photos/50/50?a=3', fotoPost: 'https://picsum.photos/200/150?a=4'}, 
      { nomeUsuario: 'severo', fotoUsuario: 'https://picsum.photos/50/50?a=5', fotoPost: 'https://picsum.photos/200/150?a=6'}
    ]
  };
  getUserName = () =>{

  };
  getUserProfilePhoto = () =>{
    
  };
  getPostPhoto = () =>{
    
  };

  render() {
    const timelinePosts = this.state.infosPosts.map(postUsuario =>{
      return(
      <Post
        nomeUsuario={postUsuario.nomeUsuario}
        fotoUsuario={postUsuario.fotoUsuario}
        fotoPost={postUsuario.fotoPost}
      />
      )
    }) ;
    return (
      <AppContainer>
        <FormsSection>
          <InputForms onChange={this.getUserName} value={''} type={'text'} placeholder={'Seu Nome'}/>
          <InputForms onChange={this.getUserProfilePhoto} value={''} type={'url'} placeholder={'Foto do perfil'}/>
          <InputForms onChange={this.getPostPhoto} value={''} type={'url'} placeholder={'Foto do post'}/>
          <SendFormsButton>Postar</SendFormsButton>
        </FormsSection>

        <TimelineMain>
          {timelinePosts}
        </TimelineMain> 
      </AppContainer>
    );
  }
}

export default App;
