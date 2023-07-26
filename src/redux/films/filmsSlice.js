import { createSlice } from "@reduxjs/toolkit"
import { LANGUAGES, STATUS } from "./constants"
import { TrendingMovies, filteringMovies, getPopular, searchingMovies } from "./operations"

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        movies: [],
        status: STATUS.IDLE,
        language: LANGUAGES.ENG,
        query: '',
        page: 1,
        total_pages: 1,
        genres: [],
        isFiltered: false,
        year: null,
        popular: []
    },
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        toggleGenre(state, action) {
            state.isFiltered = true;
            if (state.genres.includes(action.payload)) {
                const index = state.genres.findIndex(genre => genre === action.payload);
                state.genres.splice(index, 1);
            } else {
                state.genres.push(action.payload);
            }
        },
        deleteAllGenres(state) {
            console.log(`working`);
            state.isFiltered = false;
            state.genres = [];
        },
        setFilter(state, action) {
            state.isFiltered = action.payload;
        },
        setQuery(state, action) {
            state.query = action.payload;
        },
        toggleYear(state, action) {
            if (state.year === action.payload) {
                state.isFiltered = false;
                state.year = null;
            } else {
                state.isFiltered = true;
                state.year = action.payload;
            }
        },
    },
    extraReducers: builder => {
        builder
            .addCase(TrendingMovies.pending, (state) => {
                state.status = STATUS.PENDING;
                state.movies = [];
                state.genres = [];
            })
            .addCase(TrendingMovies.fulfilled, (state, action) => {
                state.status = STATUS.RESOLVED;
                state.movies = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(TrendingMovies.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.movies = [];
            })
            .addCase(filteringMovies.pending, (state) => {
                state.status = STATUS.PENDING;
                state.movies = [];
            })
            .addCase(filteringMovies.fulfilled, (state, action) => {
                state.status = STATUS.RESOLVED;
                state.movies = action.payload.results;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(filteringMovies.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.movies = [];
            })
            .addCase(searchingMovies.pending, (state) => {
                state.status = STATUS.PENDING;
                state.movies = [];
                state.genres = [];
                state.isFiltered = false;
            })
            .addCase(searchingMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.status = STATUS.RESOLVED;
                state.total_pages = action.payload.total_pages;
            })
            .addCase(searchingMovies.rejected, (state) => {
                state.status = STATUS.REJECTED;
                state.movies = [];
            })
            .addCase(getPopular.pending, (state) => {
                state.status = STATUS.PENDING;
                state.popular = [];
            })
    }
})

export const { setPage, setLanguage, toggleGenre, deleteAllGenres, setQuery,  toggleYear } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
