import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Componentes aparecem na tela',()=>{
  test('Aparecem subcomponentes do header', ()=>{
    const {getByText, getByPlaceholderText} = render(<App/>);

    const plannerTitle = getByText(/Planner/i);
    const headerInput = getByPlaceholderText(/Descrição da tarefa/i);
    const labelInput = getByText(/Crie uma tarefa/i);
    const headerSelectDay = getByText(/Selecione o dia/i);
    const headerButton = getByText(/Criar tarefa/i);
    const headerSelectFilter = getByText(/Selecione um filtro/i);

    expect(plannerTitle).toHaveTextContent('Planner');
    expect(headerInput).toBeInTheDocument('Descrição da tarefa');
    expect(labelInput).toHaveTextContent('Crie uma tarefa');
    expect(headerSelectDay).toHaveTextContent('Selecione o dia');
    expect(headerButton).toHaveTextContent('Criar tarefa');
    expect(headerSelectFilter).toHaveTextContent('Selecione um filtro');
  });

  test('Aparecem subcomponentes do board',()=>{
    const {getByText, getByTestId} = render(<App/>);

    const mondayCol = getByText(/segunda-feira/i);
    const tuesdayCol = getByText(/terça-feira/i);
    const wednesdayCol = getByText(/quarta-feira/i);
    const thursdayCol = getByText(/quinta-feira/i);
    const fridayCol = getByText(/sexta-feira/i);
    const saturdayCol = getByTestId('saturday');
    const sundayCol = getByTestId('sunday');

    expect(mondayCol).toHaveTextContent('Segunda-feira');
    expect(tuesdayCol).toHaveTextContent('Terça-feira');
    expect(wednesdayCol).toHaveTextContent('Quarta-feira');
    expect(thursdayCol).toHaveTextContent('Quinta-feira');
    expect(fridayCol).toHaveTextContent('Sexta-feira');
    expect(saturdayCol).toHaveTextContent('Sábado');
    expect(sundayCol).toHaveTextContent('Domingo');
  });

  test('Aparecem as tarefas', async ()=>{
    const {findByTitle} = render(<App/>);

    const tasksTitle = findByTitle('Clique para marcar ou desmarcar a tarefa como conluída');

    expect(await tasksTitle).toBeInTheDocument();
  });
});
