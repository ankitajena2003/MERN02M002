import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Movies from "../Components/Movies";
import Movie from "../Components/Movie";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
};

export default AllRoutes;
