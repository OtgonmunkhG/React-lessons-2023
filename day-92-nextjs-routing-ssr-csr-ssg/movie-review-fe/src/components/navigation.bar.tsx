import React, { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";
import Pagination from "./pagination";
import Icon from "./icon";
import MoviesList from "./moviesList";

export default function NavigationBar(): JSX.Element {
  return (
    <div className="bg-white">
      <div className="bg-red lg:max-w-6xl mx-auto">
        <div className="sm:hidden md:block">
          {/* <h1>Navigation Bar</h1> */}
          <div className="grid grid-cols-3 justify-items-end items-center">
            <span>What's the Tomatometer®?</span>
            <span>Critics</span>

            <div>
              <button className={styles.add}>LOGIN</button>
              <button className={styles.add}>/SIGNUP</button>
            </div>
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
            <Icon />
          </div>
        </div>
      </div>
      <MoviesList />

      <Pagination />
    </div>
  );
}
