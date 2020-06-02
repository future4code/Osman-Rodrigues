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