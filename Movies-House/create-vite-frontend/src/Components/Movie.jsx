import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Movie = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const api = import.meta.env.VITE_IMDB_API;

  const getMovie = async () => {
    try {
      const result = await axios.get(api + "&i=" + id);
      if (result?.data) setMovieDetails(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img src={movieDetails?.Poster} alt={movieDetails?.Title} className="w-full mb-6 rounded shadow" />
      <h1 className="text-3xl font-bold mb-2">{movieDetails?.Title}</h1>
      <p className="text-gray-700 mb-1"><strong>Year:</strong> {movieDetails?.Year}</p>
      <p className="text-gray-700 mb-1"><strong>Genre:</strong> {movieDetails?.Genre}</p>
      <p className="text-gray-700"><strong>Plot:</strong> {movieDetails?.Plot}</p>
    </div>
  );
};

export default Movie;
