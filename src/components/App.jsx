import { lazy } from "react";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyle } from 'constants';
import { useSelector } from "react-redux";
import { selectTheme } from "redux/theme/selectors";
import { THEME } from "redux/theme/slice";

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import("../pages/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import('./Reviews/Reviews'))
const Trailer = lazy(() => import('./Trailer/Trailer'));
const Similar = lazy(() => import('./Similar/Similar'));
const Other = lazy(() => import('./Other/Other'));

export const App = () => {
  const currentTheme = useSelector(selectTheme);
  
  return (
    <ThemeProvider theme={currentTheme === THEME.LIGHT ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="trailer" element={<Trailer />} />
            <Route path="similar" element={<Similar />} />
            <Route path="parts/:partsId" element={<Other />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
