import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./card";
import Navbar from './Navbar'
const MovieList = () => {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        getData();
    }, [type]);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results));
    };

    return (
        <>
        {/* <Navbar/> */}
        <div className="movie__list p-4">
            <h2 className="text-2xl font-bold mb-4">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movieList.map(movie => (
                    <Cards key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        </>
    );
};

export default MovieList;
