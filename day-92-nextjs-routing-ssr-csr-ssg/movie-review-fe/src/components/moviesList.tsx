import { useState, useEffect } from "react";
import React from "react";
import moment from "moment";
import Pagination from "./pagination";

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
  lastUpdated: string;
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
  year: number;
  imdb: IImdb;
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
  postion: number[];
}

export default function MoviesList(): JSX.Element {
  const URL = "http://localhost:8181/movies/list";
  const [movie, setMovie] = useState<IMovie[]>([]);

  async function fetchedAll(url: string) {
    const response = await fetch(url);
    const result = await response.json();
    setMovie(result);
  }

  useEffect(() => {
    fetchedAll(URL);
  }, []);
  return (
    <div className=" text-black grid md:grid-cols-6 gap-3 sm:grid-cols-2 justify-between container mx-auto lg:max-w-6xl">
      {movie.map((element, index) =>
        element.poster ? (
          <div key={index} className="mx-auto px-1	text-center">
            <img
              className="hover:opacity-75 rounded-lg h-96  shadow-xl w-72 md:h-60"
              src={element.poster}
              alt=""
            />
            <div className="text-black grid md:grid-cols-4 gap-3  sm:grid-cols-4 justify-between container mx-auto">
              <div className="grid md:grid-cols-2 sm:grid-cols-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/278px-Rotten_Tomatoes.svg.png?20180311145654"
                  alt=""
                  className="h-5 w-5"
                />
                <span>{element.tomatoes.viewer.rating}</span>
              </div>
              <div className="grid md:grid-cols-2 sm:grid-cols-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/212px-Rotten_Tomatoes_positive_audience.svg.png?20200101015220"
                  alt=""
                  className="h-5 w-5"
                />{" "}
                <span>{element.tomatoes.viewer.meter}%</span>
              </div>
            </div>
            <h6 className="text-sm font-serif text-black">{element.title}</h6>
            <p className="text-black text-sm">
              Opened{" "}
              {moment(element.tomatoes.lastUpdated).format("MMM Do YYYY")}
            </p>
          </div>
        ) : (
          <div className="mx-auto px-1	">
            <img
              className="hover:opacity-75 rounded-lg h-96  shadow-2xl w-72 md:h-60"
              src="https://www.take5reviews.ca/uploads/9/7/5/5/97557460/super-mario-bros-23_2.png"
              alt=""
            />
          </div>
        )
      )}

      <Pagination setMovie={setMovie} />
    </div>
  );
}
