import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import MoviesForm from "./MoviesForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const retryTimer = useRef(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch(
        "https://YOUR-PROJECT-ID.firebaseio.com/movies.json"
      );

      if (!response.ok) throw new Error("Fetch failed");

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
      setIsLoading(false);

      if (retryTimer.current) clearTimeout(retryTimer.current);
    } catch (err) {
      setIsLoading(false);
      setError("Something went wrong...Retrying");

      retryTimer.current = setTimeout(fetchMoviesHandler, 5000);
    }
  }, []);

  // ?? Auto fetch initially
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  // ?? Add movie handler (POST success callback)
  const addMovieToState = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  // ?? DELETE movie
  const deleteMovieHandler = async (id) => {
    await fetch(
      `https://YOUR-PROJECT-ID.firebaseio.com/movies/${id}.json`,
      { method: "DELETE" }
    );

    // update UI after delete
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movies App</h1>

      <MoviesForm onAddMovie={addMovieToState} />

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && movies.length === 0 && <p>No movies found.</p>}

      {!isLoading &&
        movies.map((movie) => (
          <div key={movie.id}>
            <strong>{movie.title}</strong> — {movie.releaseDate}
            <button onClick={() => deleteMovieHandler(movie.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;