const express = require("express")
const app = express()
const routers = require("./routes/routers")
const { sequelize } = require("./src/models");
const cors = require('cors')
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(routers);

app.listen(port, async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      console.log("server is running");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  });