import {useState, useEffect} from "react";
import {Link, Outlet, useLocation, useParams, useNavigate } from "react-router-dom";

import SingleMovie from "../../modules/SingleMovie/SingleMovie";
import { getMovieById } from "../../shared/api/movies";
import styles from "./single-movie-page.module.css";

const SingleMoviePage = ()=> {
    const [state, setState] = useState({
        movie: {},
        loading: false,
        error: null,
    });

    const {id} = useParams();

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(()=> {
        const fetchMovie = async() => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const movie = await getMovieById(id);
                setState(prevState => ({
                    ...prevState,
                    movie,
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

        fetchMovie();
    }, [id]);

    const prevPageLocation = location.state?.prevPageLocation || "/";

    const goBack = () => navigate(prevPageLocation);

    const {movie, loading, error} = state;

    const isMovie = Object.keys(movie).length > 0;
    console.log(movie)
    return (
        <main>
            <div className="container">
                {loading && <p>...Loading</p>}
                {error && <p>Movie not found</p>}
                {isMovie && <>
                              <div className={styles.container}>
                              <button className={styles.button} onClick={goBack}>Go back</button>
                              <SingleMovie {...movie} />
                              </div>
                              <div className={styles.info}>
                                <h3>Additional information</h3>
                                <ul>
                                    <li  className={styles.link}>
                                        <Link state={{prevPageLocation}} to={`cast`}>Cast</Link>
                                    </li>
                                    <li className={styles.link}>
                                        <Link state={{prevPageLocation}} to={`reviews`}>Reviews</Link>
                                    </li>
                                </ul>
                              </div>
                              <Outlet />
                            </>}
                            
            </div>
        </main>
    )
}

export default SingleMoviePage;