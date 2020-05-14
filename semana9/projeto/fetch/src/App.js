import React, {useState, useEffect} from 'react';

import {MyTheme, MyThemeCustomized, AppContainer, LoggedBackground} from './AppMainStyles'
import LoginSection, {sendData} from './components/LoginSection/LoginSection';
import ExploreSection from './components/ExploreSection/ExploreSection';
import ChatSection from './components/ChatSection/ChatSection'

function App() {

  const [loggedOn, setLoggedOn] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [userObject, setUserObject] = useState({});
  
  const onClickLogin =()=>{
    setLoggedOn(! loggedOn);
    setCurrentSection('EXPLORE');
    setUserObject(sendData())
  }

  const mountSection = ()=>{
    if(currentSection !== ''){
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
