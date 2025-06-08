const asyncFS = require("fs/promises");
const FS = require("fs");
const path = require("path");
const { v7: uuid } = require("uuid");
const { format: date } = require("date-fns");

const morgan = require('morgan');

const logFile = async (status, message, filename) => {
  const Cdate = date(new Date(), "dd-mm-yyyy\thh:mmaaa");
  const log = `[${status}] [ ${uuid()}\t${Cdate} ]\t${message}\n`;

  try {
    if (!FS.existsSync(path.join(__dirname, "..", "logs"))) {
      await asyncFS.mkdir(path.join(__dirname, "..", "logs"));
    }
    await asyncFS.appendFile(
      path.join(__dirname, "..", "logs", `${filename}.log`),
      log
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { logFile };
