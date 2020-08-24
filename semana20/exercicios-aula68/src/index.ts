import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import {postsRouter} from './router/PostsRouter'; 
import {userRouter} from './router/UserRouter';
import { feedRouter } from "./router/FeedRouter";
import cors from "cors";

dotenv.config();

export const app = express();

app.use(cors({origin: true}))
app.use(express.json());

app.use('/user', userRouter);
app.use('/post', postsRouter);
app.use('/feed', feedRouter);

/* const server = app.listen(process.env.PORT || 3000, ()=>{
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
}); */