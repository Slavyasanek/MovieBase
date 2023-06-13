import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import { getTrendingMovies } from "helpers/api"
import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import css from 'components/Pagination/Pagination.module.css';
import { TypedTitle } from "components/TypedTitle/TypedTitle";

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                const pageFetch = currentPage + 1;
                const movies = await getTrendingMovies(pageFetch);
                setMovies(movies.results);
                console.log(movies);
                setStatus(STATUS.RESOLVED);
                setTotal(movies.total_pages);
            } catch (e) {
                setStatus(STATUS.REJECTED)
            }
        }
        fetchData();
    }, [currentPage]);

    const loadMore = (event) => {
        setCurrentPage(event.selected);
    }

    if (status === STATUS.PENDING) {
        return (<>
            <Loader />
        </>)
    } else if (status === STATUS.RESOLVED) {
        return (
            <>
            <TypedTitle typing={['Tranding', 1000, 'Trending', 800, 'Trending movies of the day']}/>
            <MovieList movies={movies}/>
            <ReactPaginate
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
            pageCount={Math.ceil(total / movies.length)}
            previousLabel="<<"
            forcePage={currentPage}
        />
            </>
        )
    }
}