import {Router} from 'express'
import { FileController } from '../controller/FileController'

export const fileRouter = Router()

fileRouter.put('/upload', new FileController().fileUpload)