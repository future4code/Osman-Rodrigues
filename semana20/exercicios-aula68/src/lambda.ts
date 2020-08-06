import serverless from "serverless-http"
import { app } from "./index"
import "mysql"

export const handler = serverless(app);