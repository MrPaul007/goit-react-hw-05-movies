import {useState, useEffect} from "react";

import MoviesList from "../../shared/components/MoviesList";
import {getMovies} from "../../shared/api/movies";


const TrendingMovies = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(()=> {
        const fetchMovies = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await getMovies();
                setState(prevState => ({
                    ...prevState,
                    items: [...data],
                    loading: false,
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        fetchMovies();
    }, []);
    
    const {items, loading, error} = state;

    return (
        <>   
        {loading && <p>...Loading</p>}  
        {error && <p>Movies not found</p>}   
        <MoviesList items={items} />
        </>
    )
}

export default TrendingMovies;