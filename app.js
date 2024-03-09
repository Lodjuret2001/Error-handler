import express from "express";
import errorHandler from "./middleware/errorHandle.js";
import logger from "./middleware/logger.js";
import tryCatch from "./utils/tryCatch.js";
import loginValidation from "./middleware/loginValidation.js";
const app = express();

app.use(logger);

const getPosts = () => undefined;

app.get(
  "/",
  tryCatch(async (req, res) => {
    if (!req) {
      throw new Error("Could not get homepage...");
    }
    console.log("Home page");
    res.send("Home page");
  })
);


app.get(
  "/posts",
  tryCatch(async (req, res, next) => {
    const posts = await getPosts();
    if (!posts) {
      throw new Error("Could not get any posts...");
    }
    console.log("Get Posts");
    res.send("Get Posts");
  })
);

app.post(
  "/login",
  loginValidation,
  tryCatch(async (req, res) => {
    console.log('You logged in! :)');
    res.send('You logged in! :)')
  })
);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
