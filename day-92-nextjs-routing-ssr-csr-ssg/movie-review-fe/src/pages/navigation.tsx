import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function NavigationPage(): JSX.Element {
  const [navigate, setNavigate] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (navigate) {
      router.push("/contact");
    }
  }, [navigate]);
  return (
    <div className={styles.main_root}>
      
      <div className={styles.navigation}>
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
        <div className={styles.top}>
          TRENDING ON RT
        </div>
      </div>
      {/* <button onClick={() => setNavigate(true)}>Contact</button> */}
    </div>
  );
}
