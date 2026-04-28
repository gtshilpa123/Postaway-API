import express from "express";
import { CommentsController } from "./comments.controller.js";

export const commentsRouter = express.Router();
const commentsController = new CommentsController();

commentsRouter.get("/:id", commentsController.getAllComments);
commentsRouter.post("/:id", commentsController.createComment);
commentsRouter.delete("/:id", commentsController.deleteComment);
commentsRouter.put("/:id", commentsController.updateComment);
