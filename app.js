require("dotenv").config();
const express = require("express");
const { startConnection } = require("./Database");
const app = express();
const port = process.env.PORT || 8080;

// Listen for requests on the specified port
app.listen(port, async () => {
  await startConnection();
  console.log("Listening for requests on port", port);
});
