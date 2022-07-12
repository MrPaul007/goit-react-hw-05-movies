import {useState, useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import MoviesList from "../../shared/components/MoviesList";
import MoviesSearchForm from "./MoviesSearchForm";
import {searchMovies} from "../../shared/api/movies";

import styles from "./movies-search.module.css";

function MoviesSearch() {
    const [state, setState] = useState({
        items:[],
        loading: false,
        error: null,
        totalResults: true
    });
    
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");

    useEffect(()=> {
        const fetchMovies = async() => {
            setState(prevState => ({
                ...prevState,
                items: [],
                loading: true,
            }));

            try {
                const data = await searchMovies(query);
                setState(prevState => ({
                    ...prevState,
                    items: data.results,
                    loading: false,
                    totalResults: data.total_results
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        if(query) {
            fetchMovies();
        }
    }, [query, setState])

    const changeSearch = ({query}) => setSearchParams({query});

    const {items, loading, error, totalResults} = state;

    return(
        <div className={styles.container}>
            <MoviesSearchForm onSubmit={changeSearch} />
            {loading && <p>...Loading</p>}  
            {error && <p>Movies not found</p>}
            {totalResults ? <MoviesList items={items} /> : <p>Movies not found</p>}
        </div>
    )
};

export default MoviesSearch;