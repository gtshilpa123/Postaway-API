import express from "express";
import { PostController } from "./post.controller.js";

export const postRouter = express.Router();
const postController = new PostController();

postRouter.get("/all", postController.getAllPosts);
postRouter.get("/:id", postController.getSinglePost);
postRouter.get("/", postController.getByUserId);
postRouter.post("/", postController.createPost);
postRouter.delete("/:id", postController.deletePost);
postRouter.put("/:id", postController.updatePost);
