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
    max-width: 500px;
    max-height: 50%;
    position: fixed;
    bottom: 64%;    
`;
export const WelcomeText = styled.h1`
    text-align: center;
`;
export const DialogText = styled.h3`
    margin: 5% 0;
    
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