import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'
//styled components
const AppContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around
`;
const TimelineMain = styled.main`

`;
const FormsSection = styled.section`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-end
`;
const InputForms = styled.input`

`;
const SendFormsButton = styled.button`

`;

//state class components
class App extends React.Component {
  state = {
    postsInfos: [
      { nomeUsuario: 'paulinha', fotoUsuario: 'https://picsum.photos/50/50?a=1', fotoPost: 'https://picsum.photos/200/150?a=2'}, 
      { nomeUsuario: 'darvas', fotoUsuario: 'https://picsum.photos/50/50?a=3', fotoPost: 'https://picsum.photos/200/150?a=4'}, 
      { nomeUsuario: 'severo', fotoUsuario: 'https://picsum.photos/50/50?a=5', fotoPost: 'https://picsum.photos/200/150?a=6'}
    ],
    userNameValue:'',
    userProfilePhotoUrl:'',
    userPostPhotoUrl:''
  };
  
  onChangeUserName = (event) =>{
    this.setState({ userNameValue: event.target.value })
  };

  onChangeUserProfilePhoto = (event) =>{
    this.setState({ userProfilePhotoUrl: event.target.value })
  };

  onChangePostPhoto = (event) =>{
    this.setState({ userPostPhotoUrl: event.target.value })
  };

  onClickSendPostForms = () =>{
    const newPost = { nomeUsuario: this.state.userNameValue, fotoUsuario: this.state.userProfilePhotoUrl, 
      fotoPost: this.state.userPostPhotoUrl };
      
    this.state.postsInfos.push(newPost)

    this.setState({ 
      userNameValue: '',
      userProfilePhotoUrl: '',
      userPostPhotoUrl: ''
    })

    console.log(newPost, this.state.postsInfos)
  };

  render() {
    const timelinePosts = this.state.postsInfos.map(postUsuario =>{
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

          <InputForms onChange={this.onChangeUserName} value={this.state.userNameValue} type={'text'} placeholder={'Seu Nome'}/>

          <InputForms onChange={this.onChangeUserProfilePhoto} value={this.state.userProfilePhotoUrl} type={'url'} placeholder={'Foto do perfil'}/>

          <InputForms onChange={this.onChangePostPhoto} value={this.state.userPostPhotoUrl} type={'url'} placeholder={'Foto do post'}/>

          <SendFormsButton onClick={this.onClickSendPostForms}>Postar</SendFormsButton>

        </FormsSection>

        <TimelineMain>

          {timelinePosts}

        </TimelineMain> 
      </AppContainer>
    );
  }
}

export default App;
