import styled from 'styled-components';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';

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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;   
  export const LoggedBackground = styled.div`
  background-color: #000000;
  width:375px;
  min-height:812px;
  display: grid;
  grid-template: 0.2fr 0.5fr 3fr / repeat(4,1fr);
  column-gap: 10px;
`;   

  export const ActionBar = styled(CardActions)`
  grid-column:1/5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;   
  export const MenuButton = styled(IconButton)`
  &:active, &:hover{
        color: #f5f5f5; 
    }
`;   
  export const AppMenuIcon = styled(MenuIcon)`

`;   

  export const ChangeSectionIconButton = styled(IconButton)`
  &:active, &:hover{
        color: #f5f5f5; 
    }
`;   
  export const ChatIcon = styled(MailOutlineIcon)`

`;   
  export const ExploringIcon = styled(ExploreIcon)`

`;   
  export const SearchBar = styled(Autocomplete)`

`;   
  export const SearchCamp = styled(TextField)`

`;   
  export const UserHeader = styled(CardHeader)`
  grd-row: 1 / 2;
  grid-column: 1 / 5;
`;   
  export const UserAvatar = styled(Avatar)`

`;   