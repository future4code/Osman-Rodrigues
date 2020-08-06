import React, {useState} from 'react';
import styled from 'styled-components';

const AppWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`

`;
const Button = styled.button`

`;
const Label = styled.label`

`;
const InputBox = styled.form`

`;
const Img = styled.img`
  max-width: 365px;
  max-height: 365px;
`;
const Title = styled.h1`

`;

function App() {
  const [img, setImg] = useState()

  const handleUploadFile = (event) =>{
    console.log(event.target.value)
    setImg(event.target.value)
  }

  

  return (
    <AppWrapper>
      <Title>
       Aws S3 Fileloader
      </Title>

      <Img
        src={img}
        alt='Img preview'
      />

      <InputBox>
        <Label>
          <Input onChange={handleUploadFile} type='file'/>
          <Button>Send</Button>
        </Label>
      </InputBox>
    </AppWrapper>
  );
}

export default App;
