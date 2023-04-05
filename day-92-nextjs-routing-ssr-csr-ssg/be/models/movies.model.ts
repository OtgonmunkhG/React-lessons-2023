import mongoose, { Schema } from "mongoose";

interface IGenre {
  genres: string[];
}
interface ICast {
  cast: string[];
}
interface ILanguage {
  languages: string[];
}
interface IDirector {
  directors: string[];
}

interface IWriter {
  writers: string[];
}

interface IAward {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
interface ITomatoes {
  viewer: IViewer;
  lastUpdated: Date;
}
interface IMovie {
  plot: string;
  genres: IGenre;
  cast: ICast;
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: ILanguage;
  released: Date;
  directors: IDirector;
  writers: IWriter;
  awards: IAward;
  lastupdated: Date;
  year: number;
  imdb: IImdb;
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
  postion: number[];
}

const MovieSchema: Schema = new Schema({});

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);

export default MovieModel;
