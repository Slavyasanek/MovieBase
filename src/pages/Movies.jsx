import { useState, useEffect, useRef} from "react";
import { SearchBar } from "components/SearchBar/SearchBar";
import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import ReactPaginate from 'react-paginate';
import css from 'components/Pagination/Pagination.module.css';
import { searchMovies } from "helpers/api";
import { useSearchParams } from "react-router-dom";
import { TypedTitle } from "components/TypedTitle/TypedTitle";

export const Movies = () => {
    const [results, setResults] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");

    const queryRef = useRef(query)
    useEffect(() => {
        if (!query) return;
        if (query !== queryRef.current) {
            setCurrentPage(0)
            queryRef.current = query
        }
        setStatus(STATUS.PENDING);
        async function fetchData() {
                try {
                    const pageFetch = currentPage + 1;
                    const movies = await searchMovies(query, pageFetch);
                    setResults(movies.results);
                    setTotalPages(movies.total_pages);
                    setStatus(STATUS.RESOLVED)
                    console.log(movies);
                } catch (e) {
                    setStatus(STATUS.REJECTED)
                }
        }
        fetchData()
    }, [currentPage, query])

    const handleQuery = (query) => {
        setSearchParams({query});
    }

    const loadMore = (event) => {
        setCurrentPage(event.selected)
    }

    return (<>
        <SearchBar searchFunc={handleQuery} />
        {status === STATUS.PENDING && <Loader />}
        {status === STATUS.RESOLVED &&
            results.length > 0 ?
            (<>
                <TypedTitle typing={['Results:', 800, `Results: ${query}`]} />
                <MovieList movies={results} />
                {totalPages > 1 && <ReactPaginate
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
                    pageCount={totalPages}
                    previousLabel="<<"
                    forcePage={Number.parseInt(currentPage)}
                />}
            </>) : <TypedTitle typing={['No results']} />}
    </>)
}