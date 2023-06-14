import { BackLink } from "components/BackLink/BackLink";
import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { OddInfo } from "components/OddInfo/OddInfo";
import { getMovie} from "helpers/api";
import { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLink = location.state?.from ?? '/'

    useEffect(() => {
        async function getFilm() {
            try {
                const movie = await getMovie(movieId);
                setMovie(movie);
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
                <OddInfo />
            </>}
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
    </>)
}

export default MovieDetails;