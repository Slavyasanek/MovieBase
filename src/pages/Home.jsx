import { Loader } from "components/Loader/Loader";
import { STATUS } from "constants";
import { getTrendingMovies } from "helpers/api"
import { useState } from "react"
import { useEffect } from "react"
import { MovieCard } from "components/MovieCard/MovieCard";
import { MovieList } from "components/MovieList/MovieList.styled";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const movies = await getTrendingMovies();
                setStatus(STATUS.RESOLVED);
                setMovies(movies.results);
                console.log(movies);
            } catch (e) {
                setStatus(STATUS.REJECTED)
            }
        }
        fetchData()
    }, []);

    if (status === STATUS.PENDING) {
        return (<>
            <Loader />
        </>)
    } else if (status === STATUS.RESOLVED) {
        return (<MovieList>
            {movies.map(({ original_title, poster_path, vote_average, id }) =>
            (<MovieCard
                title={original_title}
                poster={poster_path}
                key={id}
                rate={vote_average}
            />))}
        </MovieList>)
    }
}