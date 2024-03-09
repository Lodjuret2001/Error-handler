import AppError from "../AppError.js";

const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    console.log(error.details[0].message);
    res.status(400).send(error.details[0].message);
  }
  if (error instanceof AppError) {
    console.log(error.message);
    res.status(error.statusCode).send(error.message);
  } else {
    console.log(error.message);
    return res.status(400).send(error.message);
  }
};

export default errorHandler;
