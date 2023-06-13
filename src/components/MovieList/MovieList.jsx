import  PropTypes  from "prop-types";
import { MovieCard } from "components/MovieCard/MovieCard"
import { ListWrapper } from "./MovieList.styled";
import { useLocation } from "react-router-dom";

export const MovieList = ({movies}) => {
    const location = useLocation();

    return (
        <>
        <ListWrapper>
            {movies.map(({ title, poster_path, vote_average, id }) =>
            (<MovieCard
                title={title}
                poster={poster_path}
                key={id}
                rate={vote_average}
                id={id}
                path={{from: location}}
            />))}
        </ListWrapper>
        </>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape).isRequired
}