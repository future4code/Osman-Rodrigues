import styled from 'styled-components'

import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button'

export const ChatCard = styled(Card)`
    grid-row: 3 / 4 ;
    grid-column: 1 / 5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const ChatWaitMedia = styled.img`
    display: flex;
    align-self: center;   
`;

export const ChatCardAvatar = styled(Avatar)`
    border: 1px solid black;  
`;
export const ChatCardIconButton = styled(IconButton)`

`;

export const ChatCardClearMatchesButton = styled(Button)`
    align-self: center;
    position: fixed;
`;