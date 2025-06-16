import jwt from "jsonwebtoken"
import crypto from "crypto"

const {

  JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET,
  ACCESS_EXPIRES_IN = "15m",
  REFRESH_EXPIRES_IN = "30d",
}=process.env


class Authentication {



signAccessToken(user) {
  return jwt.sign(
    { sub: user._id.toString(), username: user.username },
    JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_EXPIRES_IN },
  );
}

signRefreshToken(user, deviceId) {
  return jwt.sign(
    { sub: user._id.toString(), deviceId },
    JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_EXPIRES_IN },
  );
}

 verifyAccess(token) {
  return jwt.verify(token, JWT_ACCESS_SECRET);
}

verifyRefresh(token) {
  return jwt.verify(token, JWT_REFRESH_SECRET);
}

sha256(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}




}

export default new Authentication()