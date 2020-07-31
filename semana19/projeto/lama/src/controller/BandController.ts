import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { CreateBandInputDTO } from "../model/Band";

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

      res.send({message:`Band ${input.name} successfull created!`}).status(200)

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
    }catch(e){
      res.status(e.code || 400).send({ message: e.message })
    }
  }
}

export{BandController}