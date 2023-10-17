import dotenv from "dotenv";
import Jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    dotenv.config();

    // get token
    const token =
      req.body.token ||
      req.cookies.token ||
      (req.headers.authorization &&
        req.headers.authorization.replace("Bearer ", ""));

    console.log("token---->", token);

    // check token empty or not
    if (!token) {
      return res.status(400).json({
        success: false,
        massage: "token not found",
      });
    }

    // extract payload data from token like account type
    const decode = await Jwt.verify(token, "UMER78");
    console.log("decode --> ", decode);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      massage: "Something went wrong while verifying token",
    });
  }
};
