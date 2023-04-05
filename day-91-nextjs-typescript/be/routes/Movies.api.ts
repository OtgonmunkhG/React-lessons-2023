import { Router } from "express";
import { getMovies } from "../controllers/MovieController";

const movieRouter = Router();

movieRouter.get("/pagination", getMovies);

movieRouter.get("/");

export default movieRouter;
