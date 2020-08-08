import { Request, Response } from "express";
import { S3Service } from "../services/S3Service";

export class FileController{
  async fileUpload(req: Request, res: Response): Promise<void>{
    try{
      const file = req.files && req.files.file as any
      if(! file){
        throw new Error('Must have send a file')
      }

      const s3service = new S3Service();
      const result = await s3service.uploadFile({
        name: file.name,
        file: file.data
      })

      res.status(200).send(result)
    }catch(e){
      res.status(400).send({
        message: e.message
      })
    }
  }

}