const express = require("express");
const { loginPetugas, registerPetugas, } = require("../src/controller/petugasController");
const { loginSiswa, registerSiswa } = require("../src/controller/siswaController");
const jwtValidateMiddleware = require("../src/middleware/JwtPetugasMiddleware");
const routers = express.Router();

//login pteugas
routers.post("/login-petugas", loginPetugas)
routers.put("/register-petugas", registerPetugas)

// login siswa
routers.post("/login-siswa", loginSiswa)
routers.put("/register-siswa", registerSiswa)

//jwt
// routers.use(jwtValidateMiddleware)



module.exports = routers
