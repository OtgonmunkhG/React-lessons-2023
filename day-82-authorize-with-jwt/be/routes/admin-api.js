const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();

adminRouter.post("/register", async (request, response) => {
  const { email, password } = request.body;
  console.log(email);
  if (email && password) {
    const oldUser = await Users.findOne({ email: email });
    if (oldUser) {
      return response.json({
        message: "User is already registed",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    Users.create({ email: email, password: hashedPassword })
      .then((data) => {
        response.status(201).json({
          message: "Successfull create user",
          email: data.email,
        });
        return;
      })
      .catch((error) => {
        response.status(500).json({
          success: false,
          error,
        });
      });
  } else {
    return response.json({
      error: "Input field is empty",
    });
  }
});

adminRouter.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    if (email && password) {
      const user = await Users.findOne({ email: email });
      if (user) {
        const isMatch = await bcrypt.compare(password, user?.password);
        if (user && isMatch) {
          const jwtBody = { user_id: user._id, email: email };
          const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
            expiresIn: "24h",
          });

          response.status(200).json({
            success: true,
            token: token,
          });
          return;
        }
      } else {
        response.status(400).json({
          success: false,
          status: "Doesn't matched password",
        });
      }
    } else {
      response.status(500).json({
        message: "password or user name doesn't exist",
      });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = adminRouter;
