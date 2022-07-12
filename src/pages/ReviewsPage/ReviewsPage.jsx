import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "../../shared/api/movies";

const ReviewsPage = () => {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
        totalReviews: 1
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            setState(prevState => ({
                ...prevState,
                loading: true,
            }));

            try {
                const data = await getReviews(id);
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    items: data.results,
                    totalReviews: data.total_results
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    error,
                }))
            }
        };

        fetchReviews()
    }, [id])

    const { items, totalReviews } = state;

    const elements = items.map(({ id, author, content }) => 
        <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
        </li>
    )

    return (
        <ul>
            {!totalReviews && <p>We don`t have any reviews for this movie</p>}
            {elements}
        </ul>
    )
}

export default ReviewsPage;