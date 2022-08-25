require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Listen for requests on the specified port
app.listen(port, () => {
  console.log("Listening for request on port ", port);
});
