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
      req.idPetugas = decoded.idPetugas;
      req.level = decoded.level;
      req.namaPetugas = decoded.namaPetugas;
      req.username = decoded.username;
      next()
    }
  });
};

module.exports = jwtValidateMiddleware;
