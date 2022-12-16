import React, { useState, useEffect } from "react";
// Assets
import noimage from "../Assets/noimage.jpg";
// Components
import MovieSearch from "./movieSearch";
import MovieCard from "./movieCard";
// Datas
import MovieLists from './movieLists';


export default function Assembling() {
    const [titleFilter, setFilter] = useState("");
    const [addMovie, setAddMovie] = useState({
        id: Date.now(),
        img: noimage,
        title: "",
        rate: "",
        desc: "",
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
    return (
    <>
        <MovieSearch
            titleFilter={titleFilter}
            handleTitleSearch={handleTitleSearch}
            addMovie={addMovie}
            setAddMovie={setAddMovie}
            handleSubmit={handleSubmit}
        />
        <MovieCard
            MovieList={MovieLists}
            dataSearch={dataSearch}
            movies={movies}
        />
    </>
);}