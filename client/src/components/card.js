import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css';

const Cards = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="cards p-4">
                    <SkeletonTheme baseColor="bg-gray-800" highlightColor="bg-gray-600">
                        <Skeleton height={300} duration={2} className="rounded-lg" />
                    </SkeletonTheme>
                </div>
            ) : (
                <Link to={`/movie/${movie.id}`} className="no-underline text-white">
                    <div className="cards max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                        <img
                            className="w-full h-72 object-cover"
                            src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
                            alt={movie ? movie.original_title : "Movie Poster"}
                        />
                        <div className="px-6 py-4 bg-gray-900">
                            <div className="font-bold text-xl mb-2">
                                {movie ? movie.original_title : ""}
                            </div>
                            <p className="text-gray-400 text-base">
                                {movie ? movie.release_date : ""}
                                <span className="float-right text-yellow-500">
                                    {movie ? movie.vote_average : ""}
                                    <i className="fas fa-star ml-1" />
                                </span>
                            </p>
                            <p className="text-gray-300 text-base">
                                {movie ? movie.overview.slice(0, 118) + "..." : ""}
                            </p>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

export default Cards;
