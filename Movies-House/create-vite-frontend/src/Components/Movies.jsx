import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import bgImage from "../assets/movies-bg.jpg"; // Make sure the path is correct

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const api = import.meta.env.VITE_IMDB_API; // Should look like: https://www.omdbapi.com/?apikey=YOUR_KEY
  const navigate = useNavigate();

  const getMovies = async (s = "avengers") => {
    try {
      const result = await axios.get(api + "&s=" + s);
      if (result.data.Response === "True") {
        setMoviesData(result.data.Search);
      } else {
        setMoviesData([]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    getMovies(); // initial load with 'avengers'
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      getMovies(search.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="p-6 bg-black bg-opacity-60 min-h-screen">
        {/* Search Input */}
        <div className="flex gap-4 mb-6 justify-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-white text-black placeholder-black border px-4 py-2 w-full max-w-md rounded"
            placeholder="Search movies..."
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Movie Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {moviesData.length > 0 ? (
            moviesData.map((movie) => (
              <div
                key={movie.imdbID}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
                className="bg-white bg-opacity-90 shadow hover:shadow-lg cursor-pointer rounded overflow-hidden transition transform hover:scale-105"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-3 text-black">
                  <h2 className="font-bold text-lg">{movie.Title}</h2>
                  <p className="text-sm text-gray-600">
                    {movie.Year} - {movie.Type}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-white text-lg">
              No movies found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
