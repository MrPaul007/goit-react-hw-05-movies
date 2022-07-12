import TrendingMovies from "../../modules/TrendingMovies/TrendingMovies";
import styles from "./home-page.module.css";

function HomePage() {

    return(
        <div className={styles.container}>
            <h2>Trending today</h2>
            <TrendingMovies />
        </div>
    )
}

export default HomePage;