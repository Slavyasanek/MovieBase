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

export const searchMovies = async (query, page = 1, language) => {
    const searchParams = new URLSearchParams({
        query: query, 
        page: page,
        language: language
    })
    const response = await instance.get(`${ROUTES.SEARCH}?${searchParams}`);
    return response.data
}

export const getMovie = async (id, language) => {
    const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.MOVIE}${id}?${searchParams}`);
    return response.data
}

export const getMovieReviews = async (id, language) => {
        const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.MOVIE}${id}/reviews?${searchParams}`);
    return response.data
}

export const getMovieCredits = async (id,  language) => {
    const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.MOVIE}${id}/credits?${searchParams}`);
    return response.data
}

export const getMovieVideo= async (id, language) => {
    const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.MOVIE}${id}/videos?${searchParams}`);
    return response.data
}

export const getMovieSimilar = async (id, language) => {
    const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.MOVIE}${id}/similar?${searchParams}`);
    return response.data
}

export const getMovieCollection = async (id, language) => {
    const searchParams = new URLSearchParams({
        language: language
    })
    const response = await instance.get(`${ROUTES.COLLECTION}${id}?${searchParams}`);
    return response.data;
}

export const discoverMovies = async (page, language, genres) => {
    const searchParams = new URLSearchParams({
        include_adult: false, 
        page: page,
        language: language,
        with_genres: genres.length === 1 ? genres[0] : genres.join(", ")
    })
    const response = await instance.get(`${ROUTES.DISCOVER}?${searchParams}`);
    return response.data
}