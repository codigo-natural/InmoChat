import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  // * has password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  // * create a new user and save to db
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
  try {
    console.log(newUser);

    res.status(201).json({ message: "user creted succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // * check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });
    // * check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });
    // * Generate cookie token and send to the user
    res.setHeader("Set-Cookie", "test=" + "myValue").json("succes")
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login user!" });
  }
};

export const logout = (req, res) => {
  // * db operations
};
