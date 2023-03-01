const SiswaModel = require("../models").siswa;
var jwt = require("jsonwebtoken");

async function loginSiswa(req, res) {
  try {
    const payload = req.body;
    const { nisn, nis } = payload;
    let siswa = await SiswaModel.findOne({
      where: {
        nisn,
      },
    });
    console.log(siswa);
    if (siswa === null) {
      return res.status(400).json({
        status: "Fail",
        message: "siswa you mentioned is not exist",
      });
    }
    if (nis === null) {
      return res.status(400).json({
        status: "Fail",
        message: "nis is not correct",
      });
    }
    const token = jwt.sign(
      {
        nisn: siswa?.nisn,
        nis: siswa?.nis,
        nama: siswa?.nama,
        idSpp: siswa?.idSpp,
        idKelas: siswa?.idKelas,
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
      data: siswa,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      message: "there something wrong",
    });
  }
}

async function registerSiswa(req, res) {
  try {
    const payload = req.body;
    const { nisn, nis, nama, alamat, noTelp } = payload;
    await SiswaModel.create({
      nisn,
      nis,
      nama,
      alamat,
      noTelp,
    });
    res.status(201).json({
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
    loginSiswa,
    registerSiswa
};
