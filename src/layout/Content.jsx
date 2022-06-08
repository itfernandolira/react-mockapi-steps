import React from "react";
import {Routes, Route} from 'react-router-dom'
import Movies from "./Movies";

const Content= props => {
    return (
    <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:category" element={<Movies />} />
    </Routes>
    )
}

export default Content