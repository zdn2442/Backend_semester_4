const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtValidateMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  const bearerHeader = auth.split(" ");
  const token = bearerHeader[1];
  if (!auth) {
    return res.sendStatus(401).json({
      message: "token not exist",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "Fail",
        err: err,
      });
    } else {
      req.nisn = decoded.nisn;
      req.nis = decoded.nis;
      req.nama = decoded.nama;
      req.idSpp = decoded.idSpp;
      req.idKelas = decoded.idKelas;
      next()
    }
  });
};

module.exports = jwtValidateMiddleware;
