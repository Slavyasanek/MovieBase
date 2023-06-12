import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import { getTrendingMovies } from "helpers/api"
import { useState, useEffect } from "react"

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const movies = await getTrendingMovies();
                setMovies(movies.results);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED)
            }
        }
        fetchData();
    }, []);

    if (status === STATUS.PENDING) {
        return (<>
            <Loader />
        </>)
    } else if (status === STATUS.RESOLVED) {
        return (
            <>
            <MovieList movies={movies}/>
            </>
        )
    }
}