import { User } from "../model/User.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

export const login = async (req, res) => {
  try {
    console.log("login body -->", req.body);

    dotenv.config({ path: ".env" });
    //get data from req body
    const { email, password } = req.body;

    // validate data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        massage: "All fields are required. Please try again",
      });
    }

    console.log("email -- > ", email);
    console.log("password -- > ", password);

    // finding object of email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        massage: "Please signUp first",
      });
    }
    console.log("user --- > ", user);
    // add role in token
    const payload = {
      email: user.email,
      id: user._id,
    };
    console.log("user passwrod -- > ", user.password);

    // generate JWT token after matching password
    if (await bcrypt.compare(password, user.password)) {
      //creating token
      console.log("same password");
      const token = JWT.sign(payload, "UMER78", {
        expiresIn: "72h",
      });

      user.token = token;
      user.password = undefined;

      const options = {
        expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      // adding token in cookie
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `Valid User`,
      });
    } else {
      return res.status(400).json({
        success: false,
        massage: "password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      massage: "Invalid User",
    });
  }
};
