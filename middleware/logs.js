const { logFile } = require("./eventEmitter");

// req.headers.host = localhost:8000
// req.hostname = 	localhost
// req.ip = 	::1

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

let device = "Not Specify";

if (isMobile()) {
  device = "Mobile";
} else {
  device = "Desktop";
}

const platform = navigator.platform.toUpperCase();

const loggerreq = async (req, res, next) => {
  logFile(
    "Log", // Specify log or error
    `[ ${platform} ]\t[ ${req.method}\t${req.path} ]`, // request Specify
    "log" // Filename Specify
  );
  next();
};

module.exports = { loggerreq };
// module.exports = { loggerreq, width };
