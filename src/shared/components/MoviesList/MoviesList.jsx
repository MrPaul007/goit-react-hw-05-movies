import {Link, useLocation} from "react-router-dom";
import styles from "./movies-list.module.css";


const MoviesList = ({ items }) => {
    const location = useLocation();

    const elements = items.map(({ id, title }) => <li key={id} className={styles.movieItem}>
        <Link to={`/movies/${id}`} state={{prevPageLocation: location}}>{title}</Link>
    </li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default MoviesList;

MoviesList.defaultProps = {
    items: []
}