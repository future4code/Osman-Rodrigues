import React from "react";
import { render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe('Funcionalidades para criação de posts',()=>{
    test('Ao renderizar pela primeira vez, aparece o input "Novo post" e o botão "Adicionar"',()=>{
        const {getByPlaceholderText, getByText} = render(<App/>);

        const newPostInput = getByPlaceholderText(/Novo post/i);
        const addButton = getByText(/Adicionar/i);

        expect(newPostInput).toBeInTheDocument('Novo post');
        expect(addButton).toHaveTextContent('Adicionar');
    });
    //Repeti os get para exercitar
    test('Ao clicar no botão "Novo post" cria um post',()=>{
        const {getByText} = render(<App/>);
        
        const addButton = getByText(/Adicionar/i);

        fireEvent.click(addButton);
    });
});
describe('Funcionalidades para curtir e descurtir posts',()=>{
    test('Ao clicar aciona o interruptor Curtir/Descurtir',()=>{
        const {getByText, getByTestId, getByPlaceholderText} = render(<App/>);

        const newPostInput = getByPlaceholderText(/Novo post/i);
        fireEvent.change(newPostInput, {
            target:{
                value: 'Post1'
            }
        });

        const addButton = getByText(/Adicionar/i);
        fireEvent.click(addButton);

        const switchButton = getByTestId("like-button");
        fireEvent.click(switchButton);

    });
});
describe('Funcionalidade para apagar um post',()=>{
    test('Ao clicar no botão Apagar o post deve sumir da tela',()=>{
        const {getByText, getByPlaceholderText} = render(<App/>);

        const newPostInput = getByPlaceholderText(/Novo post/i);
        fireEvent.change(newPostInput, {
            target:{
                value: 'Post2'
            }
        });

        const addButton = getByText(/Adicionar/i);
        fireEvent.click(addButton);

        const deleteButton = getByText(/Apagar/i);
        fireEvent.click(deleteButton);
    });
});
describe('Funcionalidades extras', ()=>{
    test('Após criar um post, o input "Novo post" deve ser limpo',()=>{
        const {getByPlaceholderText, getByText} = render(<App/>);

        const newPostInput = getByPlaceholderText(/Novo post/i);
        fireEvent.change(newPostInput, {
            target:{
                value: 'Post3'
            }
        });

        const addButton = getByText(/Adicionar/i);
        fireEvent.click(addButton);

        fireEvent.change(newPostInput, {
            target:{
                value: ''
            }
        });

    });
    test('Enquanto a lista de posts estiver vazia, a mensagem "Nenhum post" deve ser printada',()=>{
        const {getByText} = render(<App/>);

        const emptyList = getByText(/Nenhum post/i);

        expect(emptyList).toHaveTextContent('Nenhum post');
    });
    test('Quantidade de posts deve ser mostrada',()=>{
        const{getByTestId}=render(<App/>);

        const postsCounter = getByTestId('posts-counter');

        expect(postsCounter).toBeInTheDocument('posts-counter');
    });
    test('Se o usuário tentar criar um post com texto vazio, a mensagem "Não é permitido criar post com nome vazio"',()=>{
        const{getByText, getByPlaceholderText} = render(<App/>);

        const newPostInput = getByPlaceholderText(/Novo post/i);
        fireEvent.change(newPostInput, {
            target:{
                value:''
            }
        });

        const addButton = getByText(/Adicionar/i);
        fireEvent.click(addButton);

        const warningMsg = getByText(/Não é permitido criar post sem um nome/i);

        expect(warningMsg).toHaveTextContent('Não é permitido criar post sem um nome');

    });
});