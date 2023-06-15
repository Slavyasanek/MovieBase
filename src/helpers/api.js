import axios from "axios";

const API_KEY = 'a5ff046cd300d2bbc6befba4bd859295';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING = '/trending/movie/day';
const SEARCH = '/search/movie';
const MOVIE = '/movie/'

export const getTrendingMovies = async (page = 1) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        page: page
    })
    const response = await axios.get(`${BASE_URL}${TRENDING}?${searchParams}`)
    return response.data;
}

export const searchMovies = async (query, page = 1) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        query: query, 
        page: page
    })
    const response = await axios.get(`${BASE_URL}${SEARCH}?${searchParams}`);
    return response.data
}

export const getMovie = async (id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const response = await axios.get(`${BASE_URL}${MOVIE}${id}?${searchParams}`);
    return response.data
}

export const getMovieReviews = async (id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const response = await axios.get(`${BASE_URL}${MOVIE}${id}/reviews?${searchParams}`);
    return response.data
}

export const getMovieCredits = async (id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const response = await axios.get(`${BASE_URL}${MOVIE}${id}/credits?${searchParams}`);
    return response.data
}

export const getMovieVideo= async (id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const response = await axios.get(`${BASE_URL}${MOVIE}${id}/videos?${searchParams}`);
    return response.data
}

export const getMovieSimilar = async (id) => {
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
    })
    const response = await axios.get(`${BASE_URL}${MOVIE}${id}/similar?${searchParams}`);
    return response.data
}