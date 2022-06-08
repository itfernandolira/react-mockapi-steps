import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import './Post.css';
import SinglePost from "./SinglePost";

const Post = props => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    var { category, movie } = useParams();

    useEffect(() => {
        fetch("https://629a16cd7b866a90ec4954ee.mockapi.io/api/v1/categories/" + category + "/movies/" + movie + "/posts?sortBy=createdAt&order=desc")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    //console.log(data);
                    setPosts(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                {posts.map(post => (
                    <SinglePost key={post.id} avatar={post.avatar} post={post.post} name={post.name}></SinglePost>
                ))}
            </>
        );
    }

}

export default Post 