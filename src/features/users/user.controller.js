import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export const signup = (req, res, next) => {
  const { name, email, password } = req.body;
  if (req.body) {
    let user = UserModel.signUp(name, email, password);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "Invalid user details" });
  }
};

export const signin = (req, res) => {
  const { email, password } = req.body;
  const result = UserModel.signIn(email, password);
  if (result) {
    const token = jwt.sign(
      { userId: result.id, email: result.email },
      "ZZT7jBL5HJAd0kL8zT4FsgzohkSDsnyMDhDoDrWqIu8",
      { expiresIn: "1h" },
    );
    return res
      .status(201)
      .cookie("tokenCookie", token, { maxAge: 900000, httpOnly: false })
      .cookie("userId", result.id, { maxAge: 900000, httpOnly: false })
      .json({ status: "success", msg: "Login successful", token });
  } else {
    res
      .status(400)
      .json({ status: "failure", msg: "Invalid login credentials" });
  }
};
