import { BackLink } from "components/BackLink/BackLink";
import { Movie } from "components/Movie/Movie";
import { getMovie } from "helpers/api";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/movies'

    useEffect(() => {
        async function getFilm() {
            try {
                const movie = await getMovie(movieId);
                setMovie(movie)
                console.log(movie);
            } catch (e) {
                return;
            }
        }
        getFilm()
    }, [movieId])
    return (<>
        {movie &&
            <>
                <BackLink to={backLink} />
                <Movie film={movie} />
            </>}
        <Outlet />
    </>)
}