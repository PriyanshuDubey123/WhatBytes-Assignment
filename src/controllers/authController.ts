import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Services from "../services";
import Utils from "../utils";

const AuthController = {
  async register(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body;

    try {
      const existingUser = await Services.UserService.getUserByEmail(email);
      if (existingUser) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await Services.UserService.createUser({
        name,
        email,
        password:hashedPassword,
      });

      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    try {
      const user = await Services.UserService.getUserByEmail(email);
      if (!user) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
      }

      const token = Utils.JWTUtils.generateToken({ id: user.id, email });

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default AuthController;
