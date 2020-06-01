import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    test("retorna true para array1", ()=>{
        const array1 = [1, 1];
        const resposta = checaItensDuplicados(array1);

        expect(resposta).toEqual(true);
    });

    test("retorna true para array2", ()=>{
        const array2 = [1,2];
        const resposta = checaItensDuplicados(array2);

        expect(resposta).toEqual(true);
    });

    test("retorna true para array3", ()=>{
        const array3 = [5,5,6,6];
        const resposta = checaItensDuplicados(array3);

        expect(resposta).toEqual(true);
    });

    test("retorna true para array4", ()=>{
        const array4 = [1,2,3,4,5];
        const resposta = checaItensDuplicados(array4);

        expect(resposta).toEqual(true);
    });

    test("retorna true para array5", ()=>{
        const array5 = [2.3, 2.1, 23, 21];
        const resposta = checaItensDuplicados(array5);

        expect(resposta).toEqual(true);
    });
    
});
