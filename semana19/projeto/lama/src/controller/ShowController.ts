import { Request, Response } from "express"
import { CreateShowInputDTO } from "../model/Show"
import { ShowBusiness } from "../business/ShowBusiness"
import { BaseDatabase } from "../data/BaseDatabase"

export class ShowController{
  async createShow(req: Request, res: Response){
    try{
      const body = req.body
      const token = req.headers.authorization as string

      const input: CreateShowInputDTO = {
        weekDay: body.weekDay,
        startTime: body.startTime,
        endTime: body.endTime,
        bandId: body.bandId
      }
      
      const bandDatabase = new ShowBusiness()
      await bandDatabase.createShow(input, token)

      res.send({message:`Show successfully created!`}).status(200)

      await BaseDatabase.destroyConnection()
    }catch(e){
      res.status(e.code || 400).send({ message: e.message })
    }

  }
}