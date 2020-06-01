import styled from 'styled-components'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import SubjectIcon from '@material-ui/icons/Subject';

export const ExploreCard = styled(Card)`
    grid-row: 3 / 5 ;
    grid-column: 1 / 5;
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;
export const ExploreCardHeader = styled(CardHeader)`
    max-width: 100%;
`; 
export const ExploreCardMedia = styled(CardMedia)`
    grid-column: 1 / 5;
    height: 70%; 
`;
export const ExploreWaitMedia = styled.img`
    display: flex;
    align-self: center;    
`;
export const ExploreCardContent = styled.p`
    margin: 0;
    align-self: center;
    font-family: Roboto;
    text-align: left;
    width: 70%;
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
    &:active, &:hover{
        color: #A30000; 
    }
`;
export const ExploreCardRejectIcon = styled(NotInterestedIcon)`
    &:active, &:hover{
        color: #e1ad01; 
    }
`;
export const ExploreCardBioIcon = styled(SubjectIcon)`
    &:active, &:hover{
        color: #ed8181; 
    }
`;