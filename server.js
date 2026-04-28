// npm install express cors cookie-parser swagger-ui-express jsonwebtoken multer
// npm install nodemon --save-dev

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swagger from "swagger-ui-express";

import jwtAuth from "./src/middlewares/jwt.middleware.js";
import apiDocs from "./swagger.json" assert { type: "json" };
import { loggerMiddleware } from "./src/middlewares/logger.middleware.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";

import { postRouter } from "./src/features/posts/posts.route.js";
import { userRouter } from "./src/features/users/user.route.js";
import { commentsRouter } from "./src/features/comments/comments.route.js";
import { likesRouter } from "./src/features/likes/likes.route.js";

const server = express();

var corsOptions = {
  origin: "http://localhost:3000",
  allowedHeaders: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
server.use(cors(corsOptions));
server.use(express.json());
server.use(cookieParser());

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
server.use(loggerMiddleware);

server.use("/api", userRouter);
server.use("/api/posts", loggerMiddleware, jwtAuth, postRouter);
server.use("/api/comments", loggerMiddleware, jwtAuth, commentsRouter);
server.use("/api/likes", loggerMiddleware, jwtAuth, likesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Postaway social media project");
});

server.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }
  res.status(500).send("Something went wrong, please try later");
});

server.use((req, res) => {
  res.status(404).send("API not found.");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
