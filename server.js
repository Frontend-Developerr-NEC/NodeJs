const path = require("path");
const express = require("express");
const Port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 8000;
const app = express();
const fs = require("fs");

const { loggerreq } = require("./middleware/logs");

const { loggererr } = require("./middleware/err");

app.use(express.json());

app.use(express.urlencoded(true));

// const cors = require("cors");

// app.use(cors);

app.use(loggerreq);

app.use(express.static(path.join(__dirname, "Static")));

// Open Website Automatically redirect To Signup Page
app.get("/", (req, res) => {
  try {
    const pathSignup = path.join(__dirname, "Pages", "Signup.html");
    if (!fs.existsSync(pathSignup)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathSignup);
  } catch (error) {
    console.log(error);
  }
});

app.get("/index", (req, res) => {
  try {
    const pathIndex = path.join(__dirname, "index.html");
    if (!fs.existsSync(pathIndex)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathIndex);
  } catch (error) {
    console.log(error);
  }
});

app.get("/projects", (req, res) => {
  try {
    const pathWorking = path.join(
      __dirname,
      "Pages",
      "Custompages",
      "pageWorking.html"
    );
    if (!fs.existsSync(pathWorking)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathWorking);
  } catch (error) {
    console.log(error);
  }
});

app.get("/links", (req, res) => {
  try {
    const pathLinks = path.join(__dirname, "Pages", "links.html");
    if (!fs.existsSync(pathLinks)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathLinks);
  } catch (error) {
    console.log(error);
  }
});

app.get("/about", (req, res) => {
  try {
    const pathAbout = path.join(__dirname, "Pages", "About.html");
    if (!fs.existsSync(pathAbout)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathAbout);
  } catch (error) {
    console.log(error);
  }
});

app.get("/signup", (req, res) => {
  try {
    const pathSignup = path.join(__dirname, "Pages", "Signup.html");
    if (!fs.existsSync(pathSignup)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathSignup);
  } catch (error) {
    console.log(error);
  }
});

app.get("/signin", (req, res) => {
  try {
    const pathSignin = path.join(__dirname, "Pages", "Signin.html");
    if (!fs.existsSync(pathSignin)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathSignin);
  } catch (error) {
    console.log(error);
  }
});

app.get("/adminsudo", (req, res) => {
  try {
    const pathAdmin = path.join(__dirname, "Pages", "Admin.html");
    if (!fs.existsSync(pathAdmin)) {
      return res.status(404).send("File Not Found");
    }
    res.sendFile(pathAdmin);
  } catch (error) {
    console.log(error);
  }
});

app.get("/logdata", (req, res) => {
  const logFilePath = path.join(__dirname, "logs", "log.log");
  fs.readFile(logFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading logs");
    res.type("text/plain").send(data);
  });
});

app.get("/errordata", (req, res) => {
  const ErrorlogFilePath = path.join(__dirname, "logs", "error.log");
  fs.readFile(ErrorlogFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).send("Error reading error logs");
    res.type("text/plain").send(data);
  });
});

app.get("/download-logdata", (req, res) => {
  const logFilePath = path.join(__dirname, "logs", "log.log");

  if (!fs.existsSync(logFilePath)) {
    return res.status(404).send("No logs found");
  }

  res.download(logFilePath, "server-logs.log");
});

app.get("/download-errordata", (req, res) => {
  const logFilePath = path.join(__dirname, "logs", "error.log");

  if (!fs.existsSync(logFilePath)) {
    return res.status(404).send("No Error logs found");
  }

  res.download(logFilePath, "server-error-logs.log");
});

app.use(loggererr);
app.listen(Port, () => {
  console.log(`Web Server is Running On\nhttp://localhost:${Port}`);
});
