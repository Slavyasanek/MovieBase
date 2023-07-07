import { instance } from "./instance";
import { ROUTES } from "./routes";

export const getTrendingMovies = async (page = 1, language = 'en-US') => {
    const searchParams = new URLSearchParams({
        page: page,
        language: language,
    })
    const response = await instance.get(`${ROUTES.TRENDING}?${searchParams}`)
    return response.data;
}

export const searchMovies = async (query, page = 1) => {
    const searchParams = new URLSearchParams({
        query: query, 
        page: page
    })
    const response = await instance.get(`${ROUTES.SEARCH}?${searchParams}`);
    return response.data
}

export const getMovie = async (id) => {
    const response = await instance.get(`${ROUTES.MOVIE}${id}`);
    return response.data
}

export const getMovieReviews = async (id) => {
    const response = await instance.get(`${ROUTES.MOVIE}${id}/reviews`);
    return response.data
}

export const getMovieCredits = async (id) => {
    const response = await instance.get(`${ROUTES.MOVIE}${id}/credits`);
    return response.data
}

export const getMovieVideo= async (id) => {
    const response = await instance.get(`${ROUTES.MOVIE}${id}/videos`);
    return response.data
}

export const getMovieSimilar = async (id) => {
    const response = await instance.get(`${ROUTES.MOVIE}${id}/similar`);
    return response.data
}

export const getMovieCollection = async (id) => {
    const response = await instance.get(`${ROUTES.COLLECTION}${id}`);
    return response.data;
}

export const discoverMovies = async (page, language, genres) => {
    const searchParams = new URLSearchParams({
        include_adult: false, 
        page: page,
        language: language,
        // sort_by: 'popularity_desc',
        with_genres: genres.length === 1 ? genres[0] : genres.join(", ")
    })
    const response = await instance.get(`${ROUTES.DISCOVER}?${searchParams}`);
    return response.data
}