console.log("Day- 62 - User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 8080;
const SALT_ROUNDS = 10;

app.use(cors());
app.use(express.json());

//API user register

app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);
    console.log(objectData);

    fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file doesn't exist",
          data: [],
        });
      }

      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];

      const userPassword = body.password;

      bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
          response.json({
            status: "generating salt error",
          });
        }
        bcrypt.hash(userPassword, salt, (hashError, hashData) => {
          if (hashError) {
            response.json({
              status: "hashing has error",
              data: [],
            });
          }
          console.log("hashed data", hashData);
          const newUser = {
            firstname: body.firstName,
            lastname: body.lastName,
            email: body.email,
            password: hashData,
            address: body.address,
            role: roleName,
          };

          objectData.push(newUser);

          fs.writeFile(
            "./data/users.json",
            JSON.stringify(objectData),
            (writeError) => {
              if (writeError) {
                response.json({
                  status: "write error",
                });
              }
              response.json({
                status: "success",
                data: objectData,
              });
            }
          );
        });
      });
    });
  });
});
//API
app.post("/login", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    //хэрвээ файл уншихаар амжилтгүй болвол
    if (readError) {
      response.json({
        status: "file not find",
        data: [],
      });
    }

    const userArrayObject = JSON.parse(readData);
    const foundUser = userArrayObject.filter(
      (user) => body.email === user.email
    );
    if (foundUser.length === 0) {
      response.json({
        status: "user not found",
        data: [],
      });
    } else {
      const foundUserObj = foundUser[0];
      console.log(foundUserObj);
      const plainPassword = body.password;
      const savedPassword = foundUserObj.password;

      bcrypt.compare(
        plainPassword,
        savedPassword,
        (compareError, compareResult) => {
          if (compareError) {
            response.json({
              status: "User name or password do not match",
              data: [],
            });
          }
          if (compareResult) {
            console.log("it matches");
            response.json({
              status: "success",
              data: {
                email: foundUserObj.email,
                firstName: foundUserObj.firstName,
                lastName: foundUserObj.lastName,
              },
            });
          } else {
            console.log("Invalid password");
            response.json({
              status: "username or password do not match !",
              data: [],
            });
          }
        }
      );
    }
  });
});

//API get all users

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

//API get all user roles

app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userrole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file doesn't exist",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
