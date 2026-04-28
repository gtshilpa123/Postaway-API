import { ApplicationError } from "../../error-handler/applicationError.js";

const users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    password: "password1",
  },
];

export default class UserModel {
  constructor(name, email, password, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.id = id;
  }
  static signUp(name, email, password) {
    const newUser = new UserModel(name, email, password);
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }
  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    if (!user) throw new ApplicationError("Invalid credentials", 400);
    return user;
  }
}
