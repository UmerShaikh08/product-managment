import bcrypt from "bcrypt";
import { User } from "../model/User.js";

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    let hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ email: email, password: hashPassword });

    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "failed",
      });
    }

    console.log(newUser);
    newUser.password = null;
    return res.status(200).json({
      success: true,
      message: "success",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "failed",
    });
  }
};
