const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3000;

const execute_app = express();

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connect with MongoDB");
  })
  .catch((err) => console.error(err));

const userSchemaRoutes = require("./routes/user_routes.js");

execute_app.use(express.json());

execute_app.use("/api", userSchemaRoutes);

execute_app.listen(port, () =>
  console.log(`Listening on http://localhost:${port}`)
);

execute_app.get("/home", (req, res) => res.send("Programación III beibe"));
