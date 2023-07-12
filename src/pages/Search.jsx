import { useEffect, useRef} from "react";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import { Error } from "components/Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, selectMovies, selectQuery, selectStatus } from "redux/films/selectors";
import { FilterWrapper } from "components/Filters/Filters.styled";
import { useSearchParams } from "react-router-dom";
import { setPage, setQuery} from "redux/films/filmsSlice";
import { searchingMovies } from "redux/films/operations";
import { Title } from "components/Title/Title";
import { LANGUAGES } from "redux/films/constants";

const Search = () => {
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const query= useSelector(selectQuery);
    const currentLanguage = useSelector(selectLanguage);
    const movies = useSelector(selectMovies);

    const [searchParams, setSearchParams] = useSearchParams({page: 1, query});
    const currentPage = Number(searchParams.get("page"));

    const queryParam = searchParams.get("query");
    const queryRef = useRef(query);

    useEffect(() => {
        if (!queryParam) return;
        dispatch(setQuery(queryParam));
    }, [dispatch, queryParam])

    useEffect(() => {
        if (query !== queryRef.current) {
            setSearchParams({page: 1, query});
            dispatch(setPage(1));
            queryRef.current = query;
        } else {
            setSearchParams({page: currentPage, query})
        }
        dispatch(searchingMovies());
    }, [dispatch, currentPage, setSearchParams, query])

    return (
        <>
            {status === STATUS.PENDING && <Loader />}
            {status === STATUS.REJECTED && <Error />}
            <FilterWrapper>
                {movies.length > 0 && <Title sequence={currentLanguage === LANGUAGES.ENG ? `Results: ${query}` : `Результат: ${query}`}/>}
                {movies.length > 0 ? <MovieList /> : <Title sequence={currentLanguage === LANGUAGES.ENG ? `No results` : `Немає результатів`}/>}
            </FilterWrapper>
        </>
    )
}

export default Search;