console.log("Day - 80 multer upload file");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const PORT = 8181;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/", (request, response) => {
  response.send("<h1>Hello Day-80 Filupload Multer</h1>");
});

app.get("/files", async (request, response) => {
  const testFolder = "./uploads";
  const imgs = [];

  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
    const imgURL = `http://localhost:8181/uploads/${file}`;
    imgs.push(imgURL);
  });
  response.status(200).json({
    data: imgs,
  });
});
app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  // console.log(request.file);
  const imgs = [];
  fs.readdirSync("./uploads").forEach((file) => {
    console.log(file);
    const fileUrl = `http://localhost:8181/uploads${file}`;
    imgs.push(fileUrl);
  });
  response.json({
    data: imgs,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
