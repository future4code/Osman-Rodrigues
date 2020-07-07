import {Residence, Commerce, Industry} from './subclasses';
import {Client} from './interfaces';

export class ResidClt extends Residence implements Client {
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  tax = 0.75;
  constructor(
    private cpf: number,
    residentsQuantity: number,
    cep: number,
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    ){
      super(residentsQuantity, cep);
      this.name = name;
      this.registrationNumber = registrationNumber;
      this.consumedEnergy = consumedEnergy;
    };
    getCpf =(): number => this.cpf;
    calculateBill = (): number => this.consumedEnergy * this.tax;
};
export class ComercialClient extends Commerce implements Client{
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  tax = 0.53;
  constructor(
    private cnpj: number,
    floorsQuantity: number,
    cep: number,
    registrationNumber: number,
    consumedEnergy: number
  ){
    super(cep, floorsQuantity);
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
  }
  getCnpj = (): number => this.cnpj;
  calculateBill=(): number => this.consumedEnergy * this.tax ;
};
export class IndustrialClient extends Industry implements Client{
  name: string;
  registrationNumber: number;
  consumedEnergy: number;
  tax = 0.45;
  machineUse = 100;
  constructor(
    private industrialId: number,
    machinesQuantity: number,
    cep: number,
    registrationNumber: number,
    consumedEnergy: number,
  ){
    super(machinesQuantity, cep);
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
  };
  getIndustrialId = (): number => this.industrialId;
  calculateBill = (): number => this.consumedEnergy * this.tax + this.machineUse * this.machinesQuantity;
};