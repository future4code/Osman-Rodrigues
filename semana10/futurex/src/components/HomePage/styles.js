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
    backgroud-image:url('https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F03b944d0-9121-4032-9d0d-be54d6f7cb84%2Ffuturex.png?table=block&id=ef125c81-424b-435c-b5f1-be8fee35cbf7&width=770&cache=v2');    
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