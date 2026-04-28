import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const payload = jwt.verify(
      token,
      "ZZT7jBL5HJAd0kL8zT4FsgzohkSDsnyMDhDoDrWqIu8",
    );
    req.userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).send("Unauthorized");
  }
  // next();
};
export default jwtAuth;
