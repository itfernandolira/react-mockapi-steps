import React from "react";
import {Routes, Route} from 'react-router-dom'
import Movies from "./Movies";
import Movie from "./Movie";

const Content= props => {
    return (
    <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:category" element={<Movies />} />
        <Route path="/:category/movies/:movie" element={<Movie />} />
    </Routes>
    )
}

export default Content