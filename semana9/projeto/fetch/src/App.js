import React, {useState, useEffect} from 'react';

import {
  MyTheme, MyThemeCustomized, AppContainer, 
  LoggedBackground, ChangeSectionIconButton, ChatIcon,
  ExploringIcon
} from './AppMainStyles'
import LoginSection, {sendData} from './components/LoginSection/LoginSection';
import ExploreSection from './components/ExploreSection/ExploreSection';
import ChatSection from './components/ChatSection/ChatSection'

function App() {

  const [loggedOn, setLoggedOn] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [userObject, setUserObject] = useState({});
  
  const onClickLogin =()=>{
    setLoggedOn(true);
    setCurrentSection('EXPLORE');
    setUserObject(sendData())
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
          {sectionMounted()}

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

  useEffect(()=>{
    //console.log(loggedOn, currentSection) 
  }, [loggedOn, currentSection])

  return (
    <MyThemeCustomized theme={MyTheme}>

      <AppContainer>

        {mountSection()}

      </AppContainer>

    </MyThemeCustomized>
    
  );
}

export default App;
