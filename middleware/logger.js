const logger = (req, res, next) => {
  console.log("Before");
  next();
  console.log("After");
};

export default logger;
