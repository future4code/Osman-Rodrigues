import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { fileRouter } from './router/FileRouter'

dotenv.config()

export const app = express()

app.use(cors())
app.use(express.json())
app.use(fileUpload())

app.use('/file', fileRouter)

