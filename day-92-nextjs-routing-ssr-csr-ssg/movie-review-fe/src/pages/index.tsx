import React from "react";
import Link from "next/link";
import NavigationBar from "@/components/navigation.bar";
import styles from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/movies/list");
  const theaterData = await theaterRequest.json();
  console.log(theaterData);
  return {
    props: {
      theater: theaterData,
    },
  };
}

export default function Home(props: any): JSX.Element {
  console.log(props);

  const side = typeof window ? "client" : "server";
  return (
    <div className={styles.main}>
      <NavigationBar />
      {/* <div>Welcome !</div> <div>You're current on the {side}-side</div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact Page</Link>
      <Link href="/greeting/Jhon?age=18">Greeting Page</Link>
      <Link href="/post/05-20-2023/first-props">Posts Page</Link>
      <Link
        href={{
          pathname: "/post/[date]/[slug]",
          query: { date: "2023-08-01", slug: "first-post" },
        }}
      >
        Posts Page
      </Link> */}
    </div>
  );
}
