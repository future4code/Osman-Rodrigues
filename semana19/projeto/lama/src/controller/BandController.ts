import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { CreateBandInputDTO } from "../model/Band";
import { BaseDatabase } from "../data/BaseDatabase";

class BandController{
  async createBand(req: Request, res: Response){
    try{
      const token = req.headers.authorization as string
      const input: CreateBandInputDTO = {
        name: req.body.name ,
        musicGenre: req.body.musicGenre,
        responsible: req.body.responsible
      }

      const bandDatabase = new BandBusiness()
      await bandDatabase.createBand(input, token)

      res.send({message:`Band ${input.name} successfully created!`}).status(200)

      await BaseDatabase.destroyConnection()
    }catch(e){
      res.status(e.code || 400).send({ message: e.message })
    }
  }

  async getBandByIdOrName(req: Request, res: Response){
    try{
      const token = req.headers.authorization as string
      const queryStr = req.query
      const getInput = String(queryStr.id || queryStr.name)
      
      const bandDatabase = new BandBusiness()
      const result = await bandDatabase.getBandByIdOrName(getInput, token)

      res.send(result).status(200)

      await BaseDatabase.destroyConnection()
    }catch(e){
      res.status(e.code || 400).send({ message: e.message })
    }
  }
}

export{BandController}