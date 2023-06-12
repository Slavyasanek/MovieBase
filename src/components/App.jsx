import { Home } from "pages/Home";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>}/>
      </Route>
      <Route path="movies/:movieId" element={<MovieDetails/>}/>
    </Routes>
    </>
  );
};
