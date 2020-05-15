import React, {useState} from 'react';

import {
  MyTheme, MyThemeCustomized, AppContainer, 
  LoggedBackground, ChangeSectionIconButton, ChatIcon,
  ExploringIcon, SearchBar, SearchCamp, ActionBar,
  UserHeader, UserAvatar, MenuButton,AppMenuIcon,
} from './AppMainStyles'
import LoginSection, {sendData} from './components/LoginSection/LoginSection';
import ExploreSection from './components/ExploreSection/ExploreSection';
import ChatSection from './components/ChatSection/ChatSection'

function App() {

  const [loggedOn, setLoggedOn] = useState(true);
  const [currentSection, setCurrentSection] = useState('');
  const [userObject, setUserObject] = useState({});
  
  const onClickLogin =()=>{
    setLoggedOn(true);
    setCurrentSection('EXPLORE');
    setUserObject(sendData())
  }
  const onClickLogout =()=>{
    setCurrentSection('');
    setLoggedOn(false);

  }

  const mountSection = ()=>{
    if(loggedOn === true && currentSection !== ''){
      const sectionMounted =()=>{
        switch(currentSection){
          case 'EXPLORE':
            return( 
              <ExploreSection
              UserInfos = {userObject}
              />
            );
          case 'CHAT':
            return(
              <ChatSection
              UserInfos = {userObject}
              />
            );
        }
      }
      return(
        <LoggedBackground>

          <ActionBar>
            <MenuButton 
            color='primary'
            onClick={onClickLogout}
            >
              <AppMenuIcon>
              </AppMenuIcon>
            </MenuButton>

            <SearchBar
              size='small'
              id="combo-box-demo"
              options={['']}
              getOptionLabel={(option) => option}
              style={{
                width: '70%',
              }}
              renderInput={(params) =>
                <SearchCamp
                  {...params} placeholder="Buscar" variant="outlined"
                  style={{
                    backgroundColor:'#f5f5f5', 
                    opacity:'0.5'
                  }} 
                />}
            />

            <ChangeSectionIconButton
              onClick={()=>{
                setCurrentSection(
                  currentSection === 'EXPLORE' ?
                  'CHAT': 'EXPLORE' 
                )
              }} 
              color='primary'
            >

              {
              currentSection === 'EXPLORE'?
              <ChatIcon/>:<ExploringIcon/>
              }

            </ChangeSectionIconButton>
          </ActionBar>

          <UserHeader
            style={{
              color:'#f5f5f5'
            }}
            avatar={
                <UserAvatar 
                style={{
                  width: '50px',
                  height: '50px'
                }}
                src={
                  `https://picsum.photos/50/50?random=${
                  userObject.userPassword !== 0?
                  userObject.userPassword : 1
                  }`
                }/>
            }
            title={
              `Hey, ${userObject.userName}!\n
              Temos novidades para você!`
            }
          />
       
          {sectionMounted()}

        </LoggedBackground>
      )
    }else{
      return(
        <LoginSection
        OnClickLogin = {onClickLogin}
        />
      );
    }
  }

  return (
    <MyThemeCustomized theme={MyTheme}>

      <AppContainer>

        {mountSection()}

      </AppContainer>

    </MyThemeCustomized>
    
  );
}

export default App;
