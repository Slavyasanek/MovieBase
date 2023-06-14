import { Suspense, useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { OddInfo } from "components/OddInfo/OddInfo";
import { Error } from "components/Error/Error";
import { STATUS } from "constants";
import { getMovie } from "helpers/api";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [status, setStatus] = useState(STATUS.IDLE);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = useRef(location.state?.from || '/')

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function getFilm() {
            try {
                const movie = await getMovie(movieId);
                setMovie(movie);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED);
            }
        }
        getFilm()
    }, [movieId])
    if (status === STATUS.RESOLVED) {
        return (
            <>
                <BackLink to={backLink.current} />
                <Movie film={movie} background={movie.backdrop_path} />
                <OddInfo />
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </>)
    } else if (status === STATUS.PENDING) {
        return (<Loader/>)
    } else if (status === STATUS.REJECTED) {
        return (<Error/>)
    }
}
export default MovieDetails;