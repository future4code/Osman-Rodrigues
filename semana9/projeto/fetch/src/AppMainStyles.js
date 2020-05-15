import styled from 'styled-components';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExploreIcon from '@material-ui/icons/Explore';

export const MyTheme = createMuiTheme({
  palette:{
    primary:{main: '#A30000'},
    secondary:{main: '#f5f5f5'},
  },
});
export const MyThemeCustomized = styled(MuiThemeProvider)`

`
export const AppContainer = styled.main`
  height: 100%;
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    
`;
export const LoggedBackground = styled.div`
  background-color: #000000;
  width:375px;
  height:100%;
  display: grid;
  grid-template: 0.5fr 0.2fr 3fr / repeat(4,1fr);
  column-gap: 10px;
`;

export const ChangeSectionIconButton = styled(IconButton)`
  position: fixed;
  
`;
export const ChatIcon = styled(MailOutlineIcon)`

`;
export const ExploringIcon = styled(ExploreIcon)`

`;