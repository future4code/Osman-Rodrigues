import { BaseError } from "./BaseError";

class UnauthorizedError extends BaseError{
  constructor(
    message: string
  ){
    super(message, 401)
  }
}

export{UnauthorizedError}