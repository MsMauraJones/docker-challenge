const express = require("express");
const app = express();
const cors = require("cors");

const connected = require("./connection.js");

connected.then(() => {
  console.log("    Mongo connected");
  // Starts the Server on port 4000
  const server = app.listen(4000, () => {
    console.log("... Listening on port 4000 ...\n");
  });
});
app.use(cors());

// Static Middleware - Public Folder
app.use(express.static("public"));

// Parses the body of the request and allows us to access this data as key, value pairs
app.use(express.urlencoded({ extended: true }));

// Parse Json Data sent from axios
app.use(express.json());

const router = require("./routes/index.js");
app.use("/api", router);
