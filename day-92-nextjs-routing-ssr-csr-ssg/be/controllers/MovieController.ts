import MovieModel from "../models/movies.model";
import { Request, Response } from "express";
export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;
  try {
    const movies = await MovieModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const allMovies = await MovieModel.find({}).limit(30);
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(404).json(error);
  }
};
