import TheaterModel from "../models/theaters.model";
import { Request, Response } from "express";
export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const theaters = await TheaterModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    console.log(req.params.id);
    const theater = await TheaterModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theater);
  } catch (err) {
    res.status(404).json(err);
  }
};

export const searchTheaters = async (req: Request, res: Response) => {
  console.log(req.query.keyword);
  const define: string = String(req.query.keyword);

  try {
    const fields = ["state", "zipcode", "street1", "city"];
    const search = await TheaterModel.find(
      //     {
      //     $or: [{
      //         "location.address.street1": {$regex: define}},
      //         {"location.address.city": {$regex: define}},
      //         {"location.address.zipcode": {$regex: define}},
      //         {"location.address.state": {$regex: new RegExp(define, "i")}
      // }]
      // }
      {
        $or: fields.map((field) => ({
          [`location.address.${field}`]: { $regex: new RegExp(define, "i") },
        })),
      }
    );
    // const keyword: string = req.query.keyword

    res.status(200).json(search);
  } catch (err) {
    res.status(404).json(err);
  }
};
