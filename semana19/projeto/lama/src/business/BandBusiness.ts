import {BandDatabase} from '../data/BandDatabase';
import { CreateBandInputDTO } from '../model/Band';
import { IdGenerator } from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';
import { UnauthorizedError } from '../error/UnauthorizedError';
import { NotFoundError } from '../error/NotFoundError';

class BandBusiness{
  async createBand(band: CreateBandInputDTO, token: string) {

    const validedToken = new Authenticator().getData(token)

    if(validedToken.role != 'ADMIN'){
      throw new UnauthorizedError('Unauthorized. Only Admins can register bands.')
    } 

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const bandDatabase = new BandDatabase();
    await bandDatabase.createBand(id, band.name, band.musicGenre.toUpperCase(), band.responsible)
  }

  async getBandByIdOrName(input: string, token: string){
    const validedToken = new Authenticator().getData(token)

    if(!validedToken){
      throw new UnauthorizedError('This operation needs a token.')
    }

    const bandDatabase = new BandDatabase();
    const bandInfos = await bandDatabase.getBandByIdOrName(input)

    if(!bandInfos){
      throw new NotFoundError('Band not found. Check if query string params.')
    }

    return bandInfos
  }
}

export{BandBusiness}