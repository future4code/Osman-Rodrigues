import React from 'react';
import styled from 'styled-components'
import TasksGen from './components/TasksGen'
import TasksFilter from './components/TasksFilter'
import TasksView from './components/TasksView'


const AppContainer = styled.main ` 
  margin = 0;
  width = 100vw;
  height = 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const AppTitle = styled.h2 `

`

class App extends React.Component{
  state = {

  }

  render () {
    return (
      <AppContainer>
        <AppTitle>Lista de Tarefas</AppTitle>
        <TasksGen
        
        />

        <TasksFilter
        
        />

        <TasksView
        
        />
        
      </AppContainer>
    );
  }
}

export default App;
