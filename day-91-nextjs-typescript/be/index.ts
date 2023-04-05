import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import theaterRouter from "./routes/Theaters.api";
import movieRouter from "./routes/Movies.api";
dotenv.config();
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

const MONGO_CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";

let name: string = "<h1>Day - 91 Nextjs-Typescript</h1>";
// name = 12;
// let phoneNumber:number = 9999999;
// let isMarried:boolean = false
// let sheeps: Array<string> = ["sheep1", "sheep2"]
// let sheep: string[] = ["sheep1", "sheep2"]
// let sheepObject: {name: string; age: number} = {
//   name: "sheep1",
//   age: 1
// }
// sheepObject.name = "sheep3"
// sheepObject.age = 2

// interface Student {
//   name: string,
//   age: number,
//   isVerified: boolean,
// }

app.use(express());
app.use(cors());
app.use("/theaters", theaterRouter);
app.use("/movies", movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send(name);
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Service is running on http://localhost:${PORT}`);
});
