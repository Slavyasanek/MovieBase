import { discoverMovies, getTopRated, getTrendingMovies, searchMovies } from "helpers/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const TrendingMovies = createAsyncThunk(
    'films/trending',
    async (_, thunkAPI) => {
        try {
            const { films: { page, language } } = thunkAPI.getState()
            return await getTrendingMovies(page, language);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const filteringMovies = createAsyncThunk('fims/filtering',
    async (_, thunkAPI) => {
        try {
            const { films: { page, language, genres, year } } = thunkAPI.getState();
            return await discoverMovies(page, language, genres, year)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })

export const searchingMovies = createAsyncThunk('films/search',
    async (_, thunkAPI) => {
        try {
            const { films: { page, query, language } } = thunkAPI.getState()
            return await searchMovies(query, page, language)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })


export const getPopular = createAsyncThunk('films/popular',
    async (_, thunkAPI) => {
        try {
            const { films: { language } } = thunkAPI.getState();
            return await getTopRated(language);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    })