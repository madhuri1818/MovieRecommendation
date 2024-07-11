import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "./movieList";
import Navbar from "./Navbar";
const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, []);

    return (
        <>
        {/* <Navbar/> */}
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    interval={3000}
                    transitionTime={1000}
                    infiniteLoop={true}
                    showStatus={false}
                    className="carousel"
                >
                    {popularMovies.map(movie => (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            className="no-underline text-white"
                        >
                            <div className="relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.original_title}
                                    className="w-full h-screen object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                                    <h2 className="text-3xl font-bold">{movie.original_title}</h2>
                                    <p>{movie.release_date}</p>
                                    <p className="flex items-center">
                                        {movie.vote_average}
                                        <i className="fas fa-star ml-1" />
                                    </p>
                                    <p className="mt-2">{movie.overview}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <MovieList />
            </div>
        </>
    );
};

export default Home;