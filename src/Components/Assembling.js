import React, { useState, useEffect } from "react";
// Assets
import noimage from "../Assets/noimage.jpg";
// Components

import MovieCard from "./movieCard";
import Filter from "./movieSearch"
// Datas
import {MovieLists} from './movieLists';
//route 
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import Description from "./Description"


export default function Assembling() {
    const [titleFilter, setFilter] = useState("");
    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        img: noimage,
        title: "",
        rate: "",
        desc: "",
        film: "",
    });
    const [movies, setMovies] = useState([...MovieLists]);

    const handleTitleSearch = (event) => {
        setFilter(event.target.value);
    };

    let dataSearch = movies.filter(
        (movie) => movie.title.toLowerCase().includes(titleFilter.toLowerCase()) || movie.rate.includes(titleFilter)
    );


    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, addMovie]);
    };

    useEffect(() => {
        console.log(movies);
    }, [movies]);
    const location = useLocation();

    return (
    <>
        
        <Routes>
            <Route path="main" element={
                <Main 
                    titleFilter={titleFilter} 
                    handleTitleSearch={handleTitleSearch} 
                    addMovie={addMovie}
                    setAddMovie={setAddMovie}
                    handleSubmit={handleSubmit}
                />} 
            >
                <Route path="home" exact element={
                <MovieCard movies={movies} dataSearch={dataSearch}/>} 
                />
                <Route path="home/:id" element={<Description movies={movies} movieId={location.state}/>} />
            </Route>
            <Route
                path="*"
                element={<Navigate to="main/home" />}
            />
        </Routes>
    </>
    
);}

function Main({titleFilter, handleTitleSearch, addMovie, setAddMovie, handleSubmit}) {

    return (
        <>
            <div>
                <Filter 
                    titleFilter={titleFilter} 
                    handleTitleSearch={handleTitleSearch} 
                    addMovie={addMovie}
                    setAddMovie={setAddMovie}
                    handleSubmit={handleSubmit}
                />
                <Outlet/>
            </div>
        </>
    )
    }
