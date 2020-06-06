import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  //Sugeridos
  it("retorna true para 'arara'", ()=>{
    const ehPalindromo = checaPalindromo('arara');
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'asa'", ()=>{
    const ehPalindromo = checaPalindromo('asa');
    expect(ehPalindromo).toEqual(true);
  });
  it("retorna true para 'Socorram-me subi no onibus em marrocos'", ()=>{
    const ehPalindromo = checaPalindromo('Socorram-me subi no onibus em marrocos');
    expect(ehPalindromo).toEqual(true);
  });
  //Criado
  it("retorna true para 'ame o poema'", ()=>{
    const ehPalindromo = checaPalindromo('ame o poema');
    expect(ehPalindromo).toEqual(true);
  });
});

