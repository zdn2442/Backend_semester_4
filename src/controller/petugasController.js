const PetugasModel = require("../models").petugas;
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function loginPetugas(req, res) {
  try {
    const payload = req.body;
    const { username, password, level } = payload;
    let petugas = await PetugasModel.findOne({
        where:{
            username
        }
    })
    
    if (petugas === null) {
        return res.status(400).json({
            status: "Fail",
            message: "petugas you mentioned is not exist"
        })
    }
    if (level === null) {
      return res.status(400).json({
          status: "Fail",
          message: "what role do you have?"
      })
  }
    if (password === null ) {
        return res.status(400).json({
            status: "Fail",
            message: "password doesn\'t match"
        })
    }
    const verify = await bcrypt.compareSync(password, petugas.password);
    if (verify === false ) {
      return res.status(400).json({
          status: "Fail",
          message: "password doesn\'t match"
      })
  }
    const token = jwt.sign(
        {
          idPetugas: petugas?.idPetugas,
          level: petugas?.level,
          namaPetugas: petugas?.namaPetugas,
          username: petugas?.username,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d", 
        }
      );
    res.status(200).json({
        status: "Success",
        message: "you are logged in",
        token: token,
        data: petugas
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
        status: "Fail",
        message: "there something wrong"
    })
  }
}

async function register(req, res) {
  try {
    const payload = req.body;
    const { username, namaPetugas, password, level,  } = payload;
    let hashPassword = await bcrypt.hashSync(password, 10);
    await PetugasModel.create({
      username,
      namaPetugas,
      password: hashPassword,
      level
    });
    res.json({
      status: "Success",
      message: "Register berhasil",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      message: "There is something wrong",
    });
  }
}

module.exports = {
    loginPetugas,
    register
};
