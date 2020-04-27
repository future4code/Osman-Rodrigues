import React from 'react';
import styled from 'styled-components'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import SendForms from './components/SendForms'

const AppView = styled.main `
  min-width: 600px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    actualSection: 'SEC1'

  }

  toSection2 = () =>{
    this.setState({actualSection: 'SEC2'})
    console.log(this.state.actualSection)
  }
  toSection3 = () =>{
    this.setState({actualSection: 'SEC3'})
    console.log(this.state.actualSection)
  }
  toSection4 = () =>{
    this.setState({actualSection: 'SEC4'})
    console.log(this.state.actualSection)
  }
  render(){
      switch (this.state.actualSection){
        
        case 'SEC2':
          return(
            <AppView>
              <Section2/>
              <SendForms
                ButtonName = 'Próxima Etapa'
                OnSubmit = {this.toSection3} 
              />
            </AppView>
          )
        case 'SEC3':
          return(
            <AppView>
              <Section3/>
              <SendForms
                ButtonName = 'Finalizar Formulário'
                OnSubmit = {this.toSection4} 
              />
            </AppView>
          )
          case 'SEC4':
          return(
            <AppView>
             <h2>Formulário Enviado!</h2>
             <p>Obrigado por sua submissão! Nós entraremos em contato.</p>
            </AppView>
          ) 
        default:
          return(
            <AppView>
              <Section1/>
              <SendForms
                ButtonName = 'Próxima Etapa'
                OnSubmit = {this.toSection2} 
              />
            </AppView>
          )
      }
  }
}

export default App;
