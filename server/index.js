import express from "express";
import cors from "cors";
import { postsRouter } from "./posts/routes.js";
import { phonesRouter } from "./phones/routes.js";
import { usersRouter } from "./users/routes.js";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts", postsRouter);
app.use("/phones", phonesRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("hello");
});
