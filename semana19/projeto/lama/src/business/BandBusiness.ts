import {BandDatabase} from '../data/BandDatabase';
import { CreateBandInputDTO } from '../model/Band';
import { IdGenerator } from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { BaseError } from '../error/BaseError';
import { UnauthorizedError } from '../error/UnauthorizedError';

class BandBusiness{
  async createBand(band: CreateBandInputDTO, token: string) {

    const validedToken = new Authenticator().getData(token)

    if(validedToken.role != 'ADMIN'){
      throw new UnauthorizedError('Unauthorized.')
    } 
    
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const bandDatabase = new BandDatabase();
    await bandDatabase.createBand(id, band.name, band.musicGenre, band.responsible)
  }
}

export{BandBusiness}