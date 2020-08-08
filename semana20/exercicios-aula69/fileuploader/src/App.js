import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
  const [img, setImg] = useState(null)
  const mainLogo = 'https://futurumresearch.com/wp-content/uploads/2020/01/aws-logo.png'
  const handleUploadFile = async (event) =>{
    try{
      const data = new FormData()
      data.append('file', event.target.files[0])
      
      const res = await axios.put('http://localhost:3002/file/upload', data)
      setImg(res.data.link)
    }catch(e){
      window.alert(e.message)
    }
  }

  return (
    <AppWrapper>
      <Title>
       Aws S3 Fileloader
      </Title>

      <Img
        src={img != null ? img : mainLogo}
        alt='Img preview'
      />

      <InputBox>
        <Label>
          <Input onChange={handleUploadFile} type='file'/>
        </Label>
      </InputBox>

      <p>
        <a href={img != null && img}>
        {img != null ? 'Fazer download da imagem' : 'Insira a imagem para habilitar o download'}
        </a>
      </p>
    </AppWrapper>
  );
}

export default App;
