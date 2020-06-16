import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Board from './components/Board';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Board/>
    </AppContainer>
  );
}
export default App;
