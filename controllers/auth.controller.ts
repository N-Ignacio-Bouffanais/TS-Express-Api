import User from "../models/User";

export const signUp = async (req: any, res: any) => {
  const { username, email, password, roles } = req.body;
  const newUser = new User({
    username,
    email,
    password: User.encryptPassword(password)
  })
  res.json("singup");
};
export const signIn = async (req: any, res: any) => {
  res.json("signIn");
};
