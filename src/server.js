const express = require("express");
const sqlConnection = require("./database/sqlite");

const api = express();

const PORT = 3333;
const routes = require("./routes")

sqlConnection()

api.use(express.json())
api.use(routes)



api.listen(PORT, () => {
    console.log("funcionando...")
})