import { BaseError } from "./BaseError";

export class ConflictError extends BaseError{
  constructor(message:string){
    super(message, 409)
  }  
}