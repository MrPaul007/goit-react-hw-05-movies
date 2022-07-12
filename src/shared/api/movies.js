import axios from "axios";

const API_KEY = "dd208677c341fec119543dd378b0d37a";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const getMovies = async () => {
    const { data: { results } } = await instance.get("trending/movie/day", {
        params:{
            api_key: API_KEY,
        }
    });
    return results;
};

export const searchMovies = async (query) => {
    const { data } = await instance.get("search/movie", {
        params:{
            query,
            api_key: API_KEY,
        }
    });
    return data;
};

export const getMovieById = async (id) => {
    const { data } = await instance.get(`movie/${id}`, {
        params:{
            id,
            api_key: API_KEY,
        }
    });
    return data;
};

export const getCast = async (id) => {
    const { data: { cast } } = await instance.get(`movie/${id}/credits`, {
        params:{
            api_key: API_KEY,
        }
    });
    return cast;
};

export const getReviews = async (id) => {
    const { data } = await instance.get(`movie/${id}/reviews`, {
        params:{
            api_key: API_KEY,
        }
    });
    return data;
};