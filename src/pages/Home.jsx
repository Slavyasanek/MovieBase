import { Loader } from "components/Loader/Loader";
import { MovieList } from "components/MovieList/MovieList";
import { STATUS } from "constants";
import { getTrendingMovies } from "helpers/api"
import { useState, useEffect } from "react"
import ReactPaginate from 'react-paginate';
import css from 'components/Pagination/Pagination.module.css';
import { TypedTitle } from "components/TypedTitle/TypedTitle";
import { Error } from "components/Error/Error";
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [total, setTotal] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams({page: 1});
    const [paginationPage, setPaginationPage] = useState(0);
    const currentPage = Number(searchParams.get("page"));

    useEffect(() => {
        setPaginationPage(currentPage - 1);
        setStatus(STATUS.PENDING);
        async function fetchData() {
            try {
                let page;
                currentPage === 0 ? page = 1 : page = currentPage;
                const movies = await getTrendingMovies(page);
                setMovies(movies.results);
                setTotal(movies.total_pages);
                setStatus(STATUS.RESOLVED);
            } catch (e) {
                setStatus(STATUS.REJECTED)
            }
        }
        fetchData();
    }, [currentPage]);

    const loadMore = (event) => {
        setSearchParams({page: event.selected + 1});
    }

    if (status === STATUS.PENDING) {
        return (<Loader />)
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
            pageCount={total / movies.length}
            previousLabel="<<"
            forcePage={paginationPage}
        />
            </>
        )
    } else if (status === STATUS.REJECTED) {
        return (<Error/>)
    }
}

export default Home;