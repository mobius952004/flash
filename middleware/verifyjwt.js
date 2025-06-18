// Protects private REST APIs. Keep it framework‑agnostic so we can
// reuse inside Socket.IO later.
import jwtservices from "../shared/utils.js/jwt.uils"

export function verifyJWT(req, res, next) {
  const header = req.headers.authorization || "";          // Expect "Bearer <token>"
  const token  = header.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) return res.sendStatus(401);

  try {
    req.user = jwtservices.verifyAccess(token);   // payload = { sub, username, iat, exp }
    next();
  } catch {
    res.sendStatus(401);
  }
}