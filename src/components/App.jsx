import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes} from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import('./Reviews/Reviews'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
};
