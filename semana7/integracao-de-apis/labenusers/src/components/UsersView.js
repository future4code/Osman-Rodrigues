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
const UserRemove = styled.text`
    margin-left: 10px;
    :hover{color: red};
    }
    font-size: small;
    
    
`
const LogoffButton = styled.button`

`

class UsersView extends React.Component{

    state={
        usersList: [{id:1, name:'Osman', age:27}, {id: 2, name:'Beatriz', age:25}] 
    }

    onClickUserRemove=(e)=>{
        alert(`Usuario ${e.target.id} removido`)
    }

    render(){


        return (
            <UsersViewSection>
                <UsersViewTitle>Lista de Usuários</UsersViewTitle>

                <UserList>
                    {this.state.usersList.map(user=>{
                        return(
                            <User
                            id={user.id}
                            >{user.name}
                            <UserRemove id={user.name} onClick={this.onClickUserRemove}>remover</UserRemove>
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