import TheaterModel from "../models/theaters.model";
import { Request, Response } from "express";
export const getTheaters = async (req: Request, res: Response) => {
    try {
        const theaters = await TheaterModel.find()
        res.status(200).json(theaters)
    }
    catch(error) {
        res.status(404).json({data: []})
    }
}

export const getTheaterById = async (req:Request, res:Response) => {

    try {
        console.log(req.params.id)
        const theater = await TheaterModel.find({theaterId: Number(req.params.id)})
        res.status(200).json(theater)
    }
    catch(err) {
        res.status(404).json(err)
    }
}

export const searchTheaters = async (req: Request, res: Response) => {
    console.log(req.query.keyword)
    const define = {$regex: req.query.keyword}

    try {
        const search = await TheaterModel.findOne({"location.address.street1": define})
        // const keyword: string = req.query.keyword

        

        res.status(200).json(search)
    }
    catch(err) {
        res.status(404).json(err)
    }

}