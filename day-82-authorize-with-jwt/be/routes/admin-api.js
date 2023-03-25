const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserRole = require("../models/UserRole");

const adminRouter = express.Router();

adminRouter.post("/register", async (request, response) => {
  const data = request.body;
  // console.log(data);
  // console.log(email);
  if (data) {
    console.log(data);
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return response.json({
        message: "User is already registed",
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      const result = await user.populate("userrole");
      response.status(201).json({
        message: "Successfull create user",
        data: result,
      });
      return;
    } catch (error) {
      response.status(500).json({
        success: false,
        error: error,
      });
    }

    //   Users.create({
    //     firstname,
    //     lastname,
    //     userrole,
    //     address,
    //     email: email,
    //     password: hashedPassword,
    //   })
    //     .then((data) => {
    //       response.status(201).json({
    //         message: "Successfull create user",
    //         email: data.email,
    //       });
    //       return;
    //     })
    //     .catch((error) => {
    //       response.status(500).json({
    //         success: false,
    //         error,
    //       });
    //     });
    //
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

adminRouter.post("/role/create", async (req, res) => {
  const { name } = req.body;
  const result = await UserRole.create({ name });
  res.status(200).json({
    data: result,
  });
});
adminRouter.get("/role/list", async (req, res) => {
  const result = await UserRole.find({});
  res.status(200).json({
    data: result,
  });
});

module.exports = adminRouter;
