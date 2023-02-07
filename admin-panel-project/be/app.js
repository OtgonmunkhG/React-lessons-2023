console.log("it's my app.js");
//import necessary module

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { response } = require("express");
const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file error",
        data: [],
      });
    }

    const objectData = JSON.parse(readData);

    response.json({
      status: "success",
      data: objectData,
    });
  });
});

// app.post("/users", (requist, response) => {
//   const body = requist.body;
//   console.log(body);

//   const newUser = {
//     id: Date.now().toString(),
//     username: body.name,
//     age: body.age,
//     role: body.role,
//     phonenumber: body.phonenumber,
//   };

//   fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
//     if (readError) {
//       response.json({
//         status: "file error",
//         data: [],
//       });
//     }

//     let dataObject = JSON.parse(readData);
//     dataObject.push(newUser);
//     console.log(dataObject);

//     fs.writeFile(
//       "./data/users.json",
//       JSON.stringify(dataObject),
//       (writeError) => {
//         if (writeError) {
//           response.json({
//             status: "file error",
//             data: [],
//           });
//         }
//         response.json({
//           status: "success",
//           data: objectData,
//         });
//       }
//     );
//   });
// });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
