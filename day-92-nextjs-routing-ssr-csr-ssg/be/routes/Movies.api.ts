import { Router } from "express";
import { getMovies, getAllMovies } from "../controllers/MovieController";

const movieRouter = Router();

movieRouter.get("/pagination", getMovies);

movieRouter.get("/list", getAllMovies);

export default movieRouter;
