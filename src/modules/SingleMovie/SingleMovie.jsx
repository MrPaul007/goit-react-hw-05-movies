import styles from "./single-movie.module.css";
import PropTypes from "prop-types";

const SingleMovie = ({title, poster_path, release_date, vote_average, overview, genres })=> {
    const image = 'https://image.tmdb.org/t/p/w300' + poster_path;
    const year = release_date.split('-');
    console.log(genres)
    
    return (
        <div className={styles.movieContent}>
            <img src={image} alt={title} />
            <div className={styles.movieTextContent}>
                <h2>{title} ({year[0]})</h2>
                <p>User Score: {vote_average*10}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genres.length > 0 ?
                    genres.map(({ name }) => name).join(", ") :
                    "no Genres"}
                </p>
            </div>
        </div>
    )
}

SingleMovie.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ),
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    }),
};

export default SingleMovie;