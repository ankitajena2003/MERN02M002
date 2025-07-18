import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/movie-bg.jpg"; // exact name and path

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 backdrop-blur-md p-10 rounded-lg shadow-2xl max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4 animate-pulse">
          Welcome to MovieApp 🎬
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Search and explore movie details from IMDb
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/movies"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Browse Movies
          </Link>
          <a
            href="https://www.imdb.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Visit IMDb
          </a>
        </div>
      </div>
    </div>
  );
}
