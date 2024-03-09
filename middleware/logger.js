const beforeLogger = (req, res, next) => {
  console.log("Request sent...");
  return next();
};

const afterLogger = (req, res) => {
  console.log("Request succsessfully handled...");
};

export { beforeLogger, afterLogger };
