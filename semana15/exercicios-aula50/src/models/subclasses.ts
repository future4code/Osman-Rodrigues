import Place from './entities/Place';

export class Residence extends Place{
  constructor(
    protected residentsQuantity: number,
    cep: number
    ) {
    super(cep);
  };
  //3.
  public getResidentsQuantity =()=> this.residentsQuantity; 
};
export class Commerce extends Place{
  constructor(
    protected floorsQuantity: number,
    cep: number
  ){
    super(cep);
  };
  //3.
  public getFloorsQuantity = () => this.floorsQuantity;
};
export class Industry extends Place{
  constructor(
    protected machinesQuantity: number,
    cep: number
  ){
    super(cep);
  };
  //3.
  public getMachinesQuantity = () => this.machinesQuantity;
};
