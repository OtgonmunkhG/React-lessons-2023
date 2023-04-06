import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

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

export default function NavigationBar(): JSX.Element {
  const URL = "http://localhost:8080/movies/list";
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
    <div className={styles.main_root}>
      <div className="bg-red-600 lg:max-w-6xl mx-auto px-4">
        <div className={styles.header}>
          {/* <h1>Navigation Bar</h1> */}
          <h5>What's the Tomatometer®?</h5>
          <h5>Critics</h5>
          <div className={styles.root}>
            <button className={styles.add}>LOGIN</button>
            <button className={styles.add}>/SIGNUP</button>
          </div>
        </div>
        <div className={styles.search}>
          <img
            className={styles.image}
            src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
            alt=""
          />
          <form action="" className={styles.form}>
            <input
              className={styles.input}
              type="search"
              name="search"
              id=""
              placeholder=" 🔍 Search movies, TV, actors, more..."
            />
          </form>
          <div className={styles.button}>
            <button className={styles.item}>MOVIES</button>
            <button className={styles.item}>TV SHOWS</button>
            <button className={styles.item}>NEWS</button>
            <button className={styles.item}>SHOWTIMES</button>
          </div>
        </div>
        <div className="text-amber-300 bg-neutral-400">
          TRENDING ON RT
          <span className="text-stone-50">
            Everything We Know About Guardians Of The Galaxy Vol. 3
          </span>
        </div>
      </div>
      <div className=" bg-whie text-tahiti grid gap-5  sm:grid-cols-2 md:grid-cols-6 2xl:grid-cols-6 justify-between container mx-auto px-4 my-7">
        {movie.map((element, index) =>
          element.poster ? (
            <div key={index} className="mx-auto px-4	text-center">
              <img src={element.poster} alt="" />
              <h6>{element.title}</h6>
            </div>
          ) : (
           <div className="mx-auto px-4	">
             <img
              src="https://m.media-amazon.com/images/M/MV5BNTY0ODRmZDktMzM2MC00NThmLWEyMDMtODQzNWEyMjMxYTYzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg"
              alt=""
            />
           </div>
          )
        )}
      </div>
      {/* <button onClick={() => setNavigate(true)}>Contact</button> */}
    </div>
  );
}
