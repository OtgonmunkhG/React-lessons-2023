const jwt = require("jsonwebtoken");

const verifyToken = (request, response, next) => {
  const token =
    request.body.token ||
    request.quirey.token ||
    request.headers["x-access-token"];
  if (!token) {
    return request.status(403).json({
      success: false,
      message: "Insert user token",
    });
  }

  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
    request.user = decoded;
  } catch (error) {
    return request.status(401).json({
      success: false,
      message: "Doesn't exit token",
    });
  }
  return next();
};

module.exports = verifyToken;
