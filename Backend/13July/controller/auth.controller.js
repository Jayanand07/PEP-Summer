const { statusCodes, errMessage } = require("../utils/utils");
const jwt = require("jsonwebtoken");
const User = require("../model/user.schema");
const bcrypt = require("bcrypt");

const authLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );
    const isUserValid =
      isPasswordValid && existingUser && email == existingUser.email;

    if (isUserValid) {
      const token = jwt.sign(
        {
          id: existingUser._id,
          username: existingUser.name,
          status: existingUser.isActive,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.status(statusCodes.SUCCESS).json({
        status: "SUCCESS",
        message: "Login Successfull",
        token,
      });
    } else {
      res.status(statusCodes.LOGIN).json({
        status: "SUCCESS",
        message: "LOGIN FAILED",
        token,
      });
    }
  } catch (err) {
    const error = new Error(err.message);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.LOGIN;
    next(error);
  }
};

const authSignUp = async (req, res, next) => {
  try {
    let { name, email, mobile, age, city, isActive, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: "ERROR",
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const newUser = await User.create({
      name,
      email,
      mobile,
      age,
      city,
      isActive,
      password,
    });

    res.status(201).json({
      status: "SUCCESS",
      message: "User Created successfully in MongoDB",
      data: newUser,
    });
  } catch (err) {
    const error = new Error(err.message);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.SIGNUP;
    next(error);
  }
};

const authError = (req, res) => {
  res.json("Error Page");
};

module.exports = {
  authSignUp,
  authError,
  authLogin,
};

