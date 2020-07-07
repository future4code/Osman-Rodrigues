abstract class Place{
  constructor(protected cep: number) {};
  public getCep =() : number => this.cep; 
};
export default Place;