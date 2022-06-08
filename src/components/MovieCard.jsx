import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'

import './MovieCard.css';

const MovieCard = props => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    var { category } = useParams();
    if (!category)
        category = 1;

    useEffect(() => {
        fetch("https://629a16cd7b866a90ec4954ee.mockapi.io/api/v1/categories/"+category+"/movies?page=1&limit=10&sortBy=createdAt&order=desc")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setMovies(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    },[]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {movies.map(movie => (
                    <div className="card mb-3" key={movie.id}>
                        <img src={movie.avatar} className="card-img-top filme" alt={movie.name} />
                            <div className="card-body">
                                <h5 className="card-title"><a href={movie.categoryId + '/movies/' + movie.id}>{movie.name}</a></h5>
                                <p className="card-text">{ movie.info.slice(0,200) + "..." }</p>
                                <p className="card-text"><small className="text-muted">Created at {movie.createdAt.slice(0,10)}</small></p>
                            </div>
                    </div>
                ))}
            </>
        );
    }
}

export default MovieCard;