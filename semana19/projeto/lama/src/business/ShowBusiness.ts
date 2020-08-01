import { CreateShowInputDTO, Show } from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { ConflictError } from "../error/ConflictError";
import { NotAcceptableError } from "../error/NotAcceptableError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Authenticator } from "../services/Authenticator";

export class ShowBusiness{
  async createShow(input: CreateShowInputDTO, token: string): Promise<void>{
    for(const key in input){
      if(! input[key as keyof CreateShowInputDTO]){
        throw new NotAcceptableError(
          `Invalid body entry. Check if ${key} was provided.` 
        )
      }
    }
    const validedToken = new Authenticator().getData(token)

    if(validedToken.role != 'ADMIN'){
      throw new UnauthorizedError('Unauthorized. Only Admins can register shows.')
    }

    if(
      input.startTime.toString().length > 2 || 
      input.endTime.toString().length > 2
      ){
        throw new NotAcceptableError(
          'Invalid start or end time. Must have two digits format.'
          )
        }else if(input.startTime >= input.endTime){
          throw new NotAcceptableError(
            'Start time cannot be after or same that end time.'
          )
        }else if(
          input.startTime < 8 || input.startTime > 22 ||
          input.endTime < 9 || input.endTime > 23
          ){
            throw new NotAcceptableError(
              'Invalid time interval. Must be between 8 and 23 h.'
            )
        }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    
    const newShowInfos = new Show(
      id, 
      input.weekDay, 
      input.startTime, 
      input.endTime, 
      input.bandId
    )
    
    const showDatabase = new ShowDatabase()

    const checkDateCollided = await showDatabase.getByTime(
      newShowInfos.getWeekDay(),
      newShowInfos.getStartTime(),
      newShowInfos.getEndTime()
    )
    
    if(checkDateCollided){
      throw new ConflictError('Week day, start time and end time already scheduled by another show.')
    }

    await showDatabase.createShow(
      newShowInfos.getId(),
      newShowInfos.getWeekDay(),
      newShowInfos.getStartTime(),
      newShowInfos.getEndTime(),
      newShowInfos.getBandId()
    )
  }

  async getAll(day:string, token: string){
    const validedToken = new Authenticator().getData(token)

    if(!validedToken.role){
      throw new UnauthorizedError('Not allowed.')
    }
    
    const showDatabase = new ShowDatabase()
    
    const showsOfDay = await showDatabase.getAll(Show.stringToShowWeekDay(day))

    return showsOfDay
  }
}