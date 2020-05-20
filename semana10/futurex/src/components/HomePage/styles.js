import styled from 'styled-components';
import Button  from '@material-ui/core/Button';

export const HomePageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    height: 100vh;
    width: 100vw;
`;
export const Logo = styled.img`
    height: 40%;
    max-width: 500px;
`;
export const WelcomeText = styled.h1`
 
`;
export const DialogText = styled.h3`
    text-align: center;
`;
export const HomeActionBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`; 
export const ToSectionButton = styled(Button)`

`;