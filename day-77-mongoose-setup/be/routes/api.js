const { response } = require("express");
const express = require("express");
const User = require("../models/Users");
const Router = express.Router();
Router.get("/users", async (request, response) => {
  const result = await User.find({});
  console.log(result);
  response.json({ data: result });
});

Router.get("/user", async (request, response) => {
  const userId = request.query.id;
  console.log(userId);
  const user = await User.findOne({ _id: userId });

  response.json({
    data: user,
  });
});

Router.get("/userGetEmail", async (request, response) => {
  const userEmail = request.query.email;
  const foundUser = await User.findByUserEmail(userEmail);
  response.json({
    data: foundUser,
  });
});

Router.get("/userByEmail", async (request, response) => {
  const userEmail = request.query.email;
  console.log(userEmail);
  const foundUser = await User.find({ email: userEmail }, "_id name email", {
    sort: "createdOn",
  }).exec();

  response.json({
    data: foundUser,
  });
});

Router.post("/user", async (request, response) => {
  const body = request.body;
  console.log(body);

  const newUser = new User(body);
  const result = await newUser.save();
  console.log(result);
  response.json({
    data: result,
  });
});

Router.delete("/user", async (request, response) => {
  const body = request.body;
  console.log(body);
  const result = await User.findOneAndDelete({ _id: body.id });
  response.json({
    data: result,
  });
});

Router.put("/updateOneUser", async (request, response) => {
  const result = await User.updateOne(
    { email: "g.otgonmunkh@gmail.com" },
    { $set: { lastLogin: Date.now() } }
  );
  response.json({
    date: result,
  });
});

module.exports = Router;
