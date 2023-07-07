import { MovieCard } from "components/MovieCard/MovieCard"
import { ListWrapper, Pagination } from "./MovieList.styled";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovies, selectTotalPages, selectIsFiltered} from "redux/films/selectors";
import ReactPaginate from 'react-paginate';
import css from 'components/Pagination/Pagination.module.css';
import { setPage } from "redux/films/filmsSlice";
import { useEffect, useRef } from "react";

export const MovieList = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
    const currentPage = Number(searchParams.get("page"));
    const [paginationPage, setPaginationPage] = useState(0);
    const movies = useSelector(selectMovies);
    const totalPages = useSelector(selectTotalPages);
    const dispatch = useDispatch();
    const isFiltered = useSelector(selectIsFiltered);
    const isFilteredRef = useRef(isFiltered)

    const pagesCount = Math.ceil(totalPages) > 500 ? 500 : Math.ceil(totalPages);

    useEffect(() => {
        if (isFiltered !== isFilteredRef.current) {
            dispatch(setPage(1));
            setSearchParams({ page: 1 });
            setPaginationPage(0);
            isFilteredRef.current = isFiltered;

        }
    }, [isFiltered, dispatch, setSearchParams])

    useEffect(() => {
        dispatch(setPage(currentPage));
    }, [dispatch, currentPage])

    const loadMore = (event) => {
        setSearchParams({ page: event.selected + 1 });
        setPaginationPage(event.selected);
    }

    return (
        <Pagination>
            <ListWrapper>
                {movies.map(({ title, poster_path, vote_average, id }) =>
                (<MovieCard
                    title={title}
                    poster={poster_path}
                    key={id}
                    rate={vote_average}
                    id={id}
                    path={{ from: location }}
                />))}
            </ListWrapper>
            {movies.length > 0 && <ReactPaginate
                containerClassName={css.pagination__container}
                pageClassName={css.pagination__page}
                activeClassName={css.selected}
                previousClassName={css.pagination__arrow}
                nextClassName={css.pagination__arrow}
                disabledClassName={css.disabled}
                breakLabel="..."
                nextLabel=">>"
                onPageChange={loadMore}
                pageRangeDisplayed={1}
                pageCount={pagesCount}
                previousLabel="<<"
                forcePage={Number(paginationPage)}
            />}
        </Pagination>
    )
}