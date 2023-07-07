import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import { TypedTitle } from "components/TypedTitle/TypedTitle";
import { Error } from "components/Error/Error";
import { Filter } from "components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres, selectIsFiltered, selectLanguage, selectPage, selectStatus } from "redux/films/selectors";
import { FilterWrapper } from "components/Filters/Filters.styled";
import { useEffect } from "react";
import { TrendingMovies, filteringMovies } from "redux/films/operations";
import { useState } from "react";
import { typedTitles } from "constants/typedTitles";
import { LANGUAGES } from "redux/films/constants";

const Home = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPage);
    const isFiltered = useSelector(selectIsFiltered);
    const currentLanguage = useSelector(selectLanguage);
    const genres = JSON.stringify(useSelector(selectGenres))
    const [title, setTitle] = useState(currentLanguage === LANGUAGES.ENG 
        ? typedTitles.trendingTodayEng 
        : typedTitles.trendingTodayUa);

    useEffect(() => {
        if (isFiltered) {
            dispatch(filteringMovies());
        } else if (!isFiltered) {
            dispatch(TrendingMovies());
        }
    }, [isFiltered, dispatch, currentPage, genres, currentLanguage])

    return (
        <>
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <Error />}
            <TypedTitle typing={title} />
            <FilterWrapper>
                <Filter />
                <MovieList />
            </FilterWrapper>
        </>
    )
}

export default Home;