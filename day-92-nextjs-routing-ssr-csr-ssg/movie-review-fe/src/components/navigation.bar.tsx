import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import moment from "moment";

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
    <div className="bg-white">
      <div className="bg-red lg:max-w-6xl mx-auto">
        <div className="sm:hidden md:block flex">
          {/* <h1>Navigation Bar</h1> */}
          <h5>What's the Tomatometer®?</h5>
          <h5>Critics</h5>

          <button className={styles.add}>LOGIN</button>
          <button className={styles.add}>/SIGNUP</button>
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
              placeholder=" 🔍 Search"
            />
          </form>
          <div className="sm:hidden md:block">
            <button className={styles.item}>MOVIES</button>
            <button className={styles.item}>TV SHOWS</button>
            <button className={styles.item}>NEWS</button>
            <button className={styles.item}>SHOWTIMES</button>
          </div>
        </div>
        <div className="text-amber-300 bg-slate-500 h-5 md:h-6  sm:hidden md:block ">
          <div className="flex justify-between">
            <div>
              <span className="mx-1">TRENDING ON RT</span>
              <span className="text-stone-50">
                Everything We Know About Guardians Of The Galaxy Vol. 3
              </span>
            </div>

            <div className="flex gap-5 mx-2 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="bi bi-facebook"
                width="15"
                height="15"
                fill="white"
                viewBox="0 0 30 30"
              >
                <path d="M0 24.576V7.424q0-2.112 1.504-3.616t3.648-1.536h17.12q2.144 0 3.648 1.536t1.504 3.616v17.152q0 2.112-1.504 3.616t-3.648 1.536h-3.424v-10.88h3.648l.512-4h-4.16v-2.56q0-.96.512-1.472t1.696-.512l2.368-.032v-3.68q-1.696-.16-3.2-.16-2.432 0-3.904 1.44t-1.472 4.032v2.944h-4v4h4v10.88H5.152q-2.144 0-3.648-1.536T0 24.576z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="bi bi-instagram"
                fill="white"
                width="15"
                height="15"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/200/svg"
                width="16"
                height="16"
                fill="white "
                className="bi bi-twitter"
                viewBox="0 0 33 33"
              >
                <path d="M.8 24.832q.608.064 1.376.064 4.032 0 7.168-2.464-1.888-.032-3.36-1.152t-2.048-2.848q.608.096 1.088.096.768 0 1.536-.192-2.016-.416-3.328-1.984t-1.312-3.68v-.064q1.216.672 2.624.736-1.184-.8-1.888-2.048t-.704-2.752q0-1.568.8-2.912Q4.896 8.288 8 9.888t6.656 1.76q-.16-.672-.16-1.312 0-2.4 1.696-4.064t4.064-1.696q2.496 0 4.224 1.824 1.952-.384 3.648-1.408-.64 2.048-2.528 3.2 1.664-.192 3.328-.896-1.184 1.728-2.88 2.976v.736q0 2.336-.672 4.64t-2.048 4.448-3.296 3.744-4.608 2.624-5.792.96Q4.8 27.424.8 24.832z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="bi bi-pinterest"
                width="17"
                height="17"
                viewBox="0 0 25 25"
                fill="white"
              >
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 01.083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/200/svg"
                className="bi bi-youtube"
                fill="white"
                width="15"
                height="15"
                viewBox="0 0 32 32"
              >
                <path d="M0 16q0-1.728.032-2.688T.16 10.88t.416-2.624q.288-1.312 1.216-2.208t2.24-1.024Q7.968 4.576 16 4.576t11.968.448q1.28.128 2.24 1.024t1.248 2.208q.224 1.152.384 2.624t.128 2.432T32 16t-.032 2.688-.128 2.432-.416 2.624q-.288 1.312-1.216 2.208t-2.24 1.024q-3.936.448-11.968.448t-11.968-.448q-1.28-.128-2.24-1.024T.544 23.744Q.32 22.592.16 21.12t-.128-2.432T0 16zm11.424 5.728q0 .672.608.992.288.128.544.128.352 0 .608-.16l9.152-5.728q.512-.288.512-.96t-.512-.96l-9.152-5.728q-.544-.352-1.152-.032t-.608.992v11.456z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
      </div>
      {/* <button onClick={() => setNavigate(true)}>Contact</button> */}
    </div>
  );
}
