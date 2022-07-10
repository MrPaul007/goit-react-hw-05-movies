import axios from "axios";

// search https://api.themoviedb.org/3/search/movie?api_key=dd208677c341fec119543dd378b0d37a&query=Jack+Reacher
// trending today https://api.themoviedb.org/3/trending/movie/day?api_key=dd208677c341fec119543dd378b0d37a
// cast https://api.themoviedb.org/3/movie/272/credits?api_key=dd208677c341fec119543dd378b0d37a
// rewiews https://api.themoviedb.org/3/movie/272/reviews?api_key=dd208677c341fec119543dd378b0d37a 
// img path https://image.tmdb.org/t/p/w300/qCpZn2e3dimwbryLnqxZuI88PTi.jpg

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/",
});

export const getMovies = async () => {
    const {data} = await instance.get("", {
        params:{
            api_key: "dd208677c341fec119543dd378b0d37a",
        }
    });

    return data;
}

// export const getPostById = async(id) => {
//     const {data} = await instance.get(`/${id}`);
//     return data;
// }

// export const searchPosts = async (q) => {
//     const {data} = await instance.get("/", {
//         params:{
//             q
//         }
//     });

//     return data;
// }

// export const getPostComments = async (id) => {
//     const {data} = await instance.get(`/${id}/comments`);
//     return data;
// }

// API Key: dd208677c341fec119543dd378b0d37a