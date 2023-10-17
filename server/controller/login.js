import { User } from "../model/User.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = await User.create({ email: email, password: password });

    if (!newUser) {
      console.log("jo");
      return res.status(400).json({
        success: false,
        message: "failed",
      });
    }

    console.log(newUser);

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
