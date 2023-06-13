import  PropTypes  from "prop-types";
import { MovieCard } from "components/MovieCard/MovieCard"
import { ListWrapper } from "./MovieList.styled";

export const MovieList = ({movies}) => {
    return (
        <>
        <ListWrapper>
            {movies.map(({ original_title, poster_path, vote_average, id }) =>
            (<MovieCard
                title={original_title}
                poster={poster_path}
                key={id}
                rate={vote_average}
                id={id}
            />))}
        </ListWrapper>
        </>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape).isRequired
}