import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./movies-search.module.css";

function MoviesSearchForm({onSubmit}) {
    const [state, setState] = useState({
        query: ""
    });

    const handleChange = ({target}) => {
        const {name, value} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit({...state});
        setState({query: ""})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className={styles.input} 
                name="query" value={state.query} 
                onChange={handleChange} type="text" 
                placeholder="      Search movies" 
            />
            <button className={styles.button} type="submit">Search</button>
        </form>
    )
}

MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default MoviesSearchForm;