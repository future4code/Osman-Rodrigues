


import { BaseError } from "./BaseError";

export class NotAcceptableError extends BaseError{
  constructor(message:string){
    super(message, 406)
  }  
}