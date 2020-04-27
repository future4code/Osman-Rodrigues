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
    tasksArray: [],
    lastTypedTask: '',
    lastListLen: 0
    //haveTask: false
  }
  insertTask = (event) =>{
    this.setState({lastTypedTask: event.target.value}) 
  }
  sendTask = () =>{
    const locaList = this.state.tasksArray;
    const inputValue = this.state.lastTypedTask;

    inputValue.trim() === '' ? alert('Insira um nome válido para sua tarefa'): 
    this.state.tasksArray.push({

      id: Date.now(),
      text: inputValue,
      complete: false
      
    })

    this.setState({lastTypedTask: ''})
    this.state.lastListLen ++
    console.log(this.state.tasksArray, this.state.lastListLen)

  }

  componentDidMount(){
    localStorage.setItem('LocalTasksList', JSON.stringify(this.state.tasksArray))
    //this.setState({ tasksArray: localStorage.setItem('tasks', JSON.stringify(this.state.tasksArray)) })
    //console.log(this.state.tasksArray)
  }

  componentDidUpdate(){
    const storedListLen = localStorage.getItem('LocalTasksList') !== null ? 
    localStorage.getItem('LocalTasksList').length : 0;
    
    if( storedListLen <= this.state.lastListLen ){
      
      console.log('lista local atualizada')
      console.log(storedListLen)
    }else{
      //localStorage.setItem('tasksList', JSON.stringify(this.state.tasksArray))
    }

  }
  componentWillUnmount(){
    /* const locaListLen = 
    localStorage.setItem('tasksList', JSON.stringify(this.state.tasksArray))
    console.log('atualizou o pai') */
  }

  render () {

    let ActualList


    return (
      <AppContainer>
        <AppTitle>Lista de Tarefas</AppTitle>
        <TasksGen
          InsertTask ={this.insertTask}
          DadTaskValue = {this.state.lastTypedTask}
          SendTask = {this.sendTask}
        />

        <TasksFilter
        
        />

        <TasksView
         ListView /* = {ActualList} */

        />
        
      </AppContainer>
    );
  }
}

export default App;
