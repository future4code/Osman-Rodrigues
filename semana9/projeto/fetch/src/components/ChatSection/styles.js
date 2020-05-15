import styled from 'styled-components'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SubjectIcon from '@material-ui/icons/Subject';
import Button from '@material-ui/core/Button'

export const ChatCard = styled(Card)`
    grid-row: 3 / 4 ;
    grid-column: 1 / 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;      
`;
export const ChatCardRow = styled(CardHeader)`
     
`; 
export const ChatCardMedia = styled(CardMedia)`
    width: 100%;
    height: 70%; 
`;
export const ChatWaitMedia = styled.img`
    display: flex;
    align-self: center;
     
`;
export const ChatCardContent = styled.p`
    font-family: Roboto;
    margin: 0;
    text-align: justify;
    width: 100%;
    height: 70%; 
`;
export const ChatCardActions = styled(CardActions)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`;

export const ChatCardAvatar = styled(Avatar)`
    border: 1px solid black;
    
`;
export const ChatCardIconButton = styled(IconButton)`

`;
export const ChatCardLikeIcon = styled(FavoriteIcon)`

`;
export const ChatCardRejectIcon = styled(HighlightOffIcon)`

`;
export const ChatCardBioIcon = styled(SubjectIcon)`

`;
export const ChatCardClearMatchesButton = styled(Button)`
    align-self: center;
    position: fixed;   
`;