import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

// Javascript: sync + async
// async: Handle multiple tasks simultaneously
// After one task is completed, async can control which next task can be executed.
// Async-Await
// async always return Promise

//:3 ways to get promise
// useEffect(()=> {
//   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
//   .then((response)=> response.json())
//   .then((json) => {
//     setMovies(json.data.movies)
//     setLoading(false)
//   });
// }, []);

// const getMovies = async() => {
//   const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
//   const json = await response.json();
//   setMovies(json.data.movies);
//   setLoading(false);
//   };

// const getMovies = async() => {
//     const json = await(
//       await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
//       setMovies(json.data.movies);
//       setLoading(false);
//   };
