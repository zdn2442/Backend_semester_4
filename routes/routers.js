const express = require("express");
const { loginPetugas, register, } = require("../src/controller/petugasController");
const jwtValidateMiddleware = require("../src/middleware/JwtMiddleware");
const routers = express.Router();

//login pteugas
routers.post("/login", loginPetugas)
routers.put("/register", register)

//jwt
// routers.use(jwtValidateMiddleware)



module.exports = routers
