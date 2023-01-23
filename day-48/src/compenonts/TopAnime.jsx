import { useState, useEffect } from "react";

export default function TopAnime() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(1);
  const URL = `https://api.jikan.moe/v4/top/anime?page=${page}`;
  useEffect(() => {
    callData();
  }, [page]);
  async function callData() {
    const JSONdata = await fetch(URL);
    const RFESULTdata = await JSONdata.json();
    console.log(RFESULTdata);
    console.log(animes);
    setAnimes(RFESULTdata.data);
  }

  return (
    <div>
      <h1>Day-48 Top anime</h1>
      {animes &&
        animes.map((anime, ind) => {
          return <h6 key={ind}>{anime.title}</h6>;
        })}
      {/* <button onClick={callData}>Fetch top anime</button> */}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next page
      </button>
    </div>
  );
}
