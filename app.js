import express from "express";
import Joi from "joi";
import errorHandler from "./middleware/errorHandle.js";
import AppError from "./AppError.js";
import { beforeLogger, afterLogger } from "./middleware/logger.js";
import tryCatch from "./utils/tryCatch.js";
import { USERNAME_EXISTS } from "./constants/errorCodes.js";
const app = express();

app.use(express.json(), beforeLogger);

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const getPosts = () => undefined;
const getUser = () => {
  return { username: "Lodjuret2001", password: "ABC123456789" };
};

app.get(
  "/",
  tryCatch(async (req, res) => {
    const posts = getPosts();
    if (!posts) {
      throw new Error("Could not get homepage...");
    }
    console.log("Home page");
    res.send("Home page");
  })
);

app.get(
  "/posts",
  tryCatch(async (req, res) => {
    const posts = "POSTS XD";
    if (!posts) {
      throw new Error("Could not get any posts...");
    }
    console.log("Get Posts");
    res.send("Get Posts");
  })
);

app.post(
  "/login",
  tryCatch(async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    const user = getUser();
    if (error) {
      throw error;
    }
    if (user.username === req.body.username) {
      throw new AppError(USERNAME_EXISTS, "Username already exists", 400);
    } else {
      console.log("User created! :)");
      res.send("User created! :)");
    }
  })
);

app.use(errorHandler, afterLogger);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
