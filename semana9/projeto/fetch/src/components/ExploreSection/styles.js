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

export const ExploreCard = styled(Card)`
    grid-row: 3 / 4 ;
    grid-column: 1 / 5;
    display: flex;
    flex-direction: column;
    justify-content: center;      
`;
export const ExploreCardHeader = styled(CardHeader)`

`; 
export const ExploreCardMedia = styled(CardMedia)`
    width: 100%;
    height: 70%; 
`;
export const ExploreWaitMedia = styled.img`
    display: flex;
    
    align-self: center;
     
`;
export const ExploreCardContent = styled.p`
    font-family: Roboto;
    
    margin: 0;
    text-align: justify;
    width: 100%;
    height: 70%; 
`;
export const ExploreCardActions = styled(CardActions)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    
`;

export const ExploreCardAvatar = styled(Avatar)`

`;
export const ExploreCardIconButton = styled(IconButton)`

`;
export const ExploreCardLikeIcon = styled(FavoriteIcon)`

`;
export const ExploreCardRejectIcon = styled(HighlightOffIcon)`

`;
export const ExploreCardBioIcon = styled(SubjectIcon)`

`;