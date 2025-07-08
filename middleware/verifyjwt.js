

import jwtServices from "../shared/utils/jwt.utils.js"; // Adjust path based on your folder

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Access token missing" });

  try {
    const payload = jwtServices.verifyAccess(token);  
    req.user = payload;  // { sub: userId, username: "..." }
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired access token" });
  }
};

export default verifyToken