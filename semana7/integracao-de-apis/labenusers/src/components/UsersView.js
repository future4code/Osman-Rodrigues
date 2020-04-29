import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const UsersViewSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`
const UsersViewTitle = styled.h2`

`
const UserList = styled.ul`
    list-style: none;
    font-size: large;
      
`
const User = styled.li`

`
const UserRemove = styled.span`
    margin-left: 10px;
    :hover{color: red};
    }
    font-size: small; 
`
const LogoffButton = styled.button`

`

class UsersView extends React.Component{

    state={
        token: 'osman-rodrigues-julian',
        usersList: [] 
    }

    componentDidMount(){

        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
            headers:{
                Authorization: this.state.token
            }
            }).then((response) =>{
            window.alert(`Seja bem-vindo!`)
            this.setState({ usersList: response.data })
            }).catch((error)=>{
                window.alert(`Erro na montagem do banco de usuários\n${error}`) 
            })
    }

    onClickUserRemove=(e)=>{
        const parentId = e.target.parentNode.id

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${parentId}`,{
            headers:{
                Authorization: this.state.token
            }
        }).then((response) =>{
            axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
            headers:{
                Authorization: this.state.token
            }
            }).then((response) =>{
            this.setState({ usersList: response.data })
            window.alert(`Usuario removido`)
            }).catch((error)=>{
                window.alert(`Erro na atualização da lista após remoção do usuário\n${error}`) 
        })
        }).catch((error)=>{
            window.alert(`Erro na remoção do usuário\n${error}`) 
        })   
    }

    render(){

        return (
            <UsersViewSection>
                <UsersViewTitle>Lista de Usuários</UsersViewTitle>

                <UserList>
                    {this.state.usersList.map(user=>{
                        return(
                            <User
                            key={user.id}
                            id={user.id}
                            >{user.name}
                            <UserRemove id={user.id} onClick={this.onClickUserRemove}>remover</UserRemove>
                            </User>
                        )
                    })}
                </UserList>

                <LogoffButton onClick={this.props.onClickLogoff}>Logoff</LogoffButton>

            </UsersViewSection>
        )
    }
}

export default UsersView;