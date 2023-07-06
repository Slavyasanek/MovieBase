import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "./constants"
import { TrendingMovies, filteringMovies } from "./operations"

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        movies: [],
        status: STATUS.IDLE,
        language: 'en-US',
        query: '',
        page: 1,
        total_pages: 1,
        genres: [],
        isFiltered: false
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
        }
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
    }
})

export const { setPage, setLanguage, toggleGenre, deleteAllGenres } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;
