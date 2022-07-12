import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getCast } from "../../shared/api/movies";
import styles from "./cast-page.module.css";

const CastPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await getCast(id);
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    items: data
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        fetchCast()
    }, [id])

    const { items } = state;

    const elements = items.map(({ id, profile_path, name, character }) =>{
        const image = 'https://image.tmdb.org/t/p/w200' + profile_path;
        return (<li key={id} className={styles.actorDescription}>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>Character: {character}</p>
            </div>
        </li>)
    })

    return (<ul>
        {elements}
    </ul>)
}

export default CastPage;