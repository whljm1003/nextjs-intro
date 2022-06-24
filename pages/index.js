import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "ddc787342ec23589c7fd7628051f7842";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title={"Home"} />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movies) => (
        <div key={movies.id}>
          <h4>{movies.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
