import express from "express";
import { PostsController } from "../controller/PostsController";

export const postsRouter = express.Router();

postsRouter.post("/create", new PostsController().createPost);

postsRouter.get("/:id", new PostsController().getPostById);

