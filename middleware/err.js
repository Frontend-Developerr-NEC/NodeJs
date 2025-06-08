const { logFile } = require("./eventEmitter");

const loggererr = async (err, req, res, next) => {
  logFile(
    "Error","Error",
    `${req.headers.origin}\t${req.method}\t${err.name}\t${err.message}`,
    "error"
  );
  console.log(err.stack);
  res.status(500).send(err.message);
  next();
};

module.exports = { loggererr };
