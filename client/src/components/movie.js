import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from './Navbar'
const Movie = () => {
    const [currentMovieDetail, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0);
    }, []);

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data));
    };

    return (
        <>
        {/* <Navbar/> */}
        <div className="movie">
            <div className="movie__intro">
                <img
                    className="w-full h-96 object-cover"
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.backdrop_path || ""}`}
                    alt={currentMovieDetail?.original_title}
                />
            </div>
            <div className="movie__detail flex flex-wrap justify-center p-4">
                <div className="movie__detailLeft w-full md:w-1/3">
                    <img
                        className="w-full h-auto rounded"
                        src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path || ""}`}
                        alt={currentMovieDetail?.original_title}
                    />
                </div>
                <div className="movie__detailRight w-full md:w-2/3 mt-4 md:mt-0 md:ml-4">
                    <h1 className="text-2xl font-bold">{currentMovieDetail?.original_title}</h1>
                    <p className="italic">{currentMovieDetail?.tagline}</p>
                    <p className="flex items-center mt-2">
                        {currentMovieDetail?.vote_average}
                        <i className="fas fa-star text-yellow-500 ml-1" />
                        <span className="ml-2">({currentMovieDetail?.vote_count} votes)</span>
                    </p>
                    <p>{currentMovieDetail?.runtime} mins</p>
                    <p>Release date: {currentMovieDetail?.release_date}</p>
                    <div className="mt-2">
                        {currentMovieDetail?.genres?.map(genre => (
                            <span key={genre.id} className="bg-gray-200 text-gray-700 px-2 py-1 rounded mr-2">{genre.name}</span>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold">Synopsis</h2>
                        <p>{currentMovieDetail?.overview}</p>
                    </div>
                </div>
            </div>
            <div className="movie__links p-4">
                <h2 className="text-xl font-semibold">Useful Links</h2>
                {currentMovieDetail?.homepage && (
                    <a href={currentMovieDetail.homepage} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
                        Homepage <i className="fas fa-external-link-alt" />
                    </a>
                )}
                {currentMovieDetail?.imdb_id && (
                    <a href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`} target="_blank" rel="noopener noreferrer" className="block mt-2 text-blue-500">
                        IMDb <i className="fas fa-external-link-alt" />
                    </a>
                )}
            </div>
            <div className="movie__production p-4">
                <h2 className="text-xl font-semibold">Production Companies</h2>
                <div className="flex flex-wrap">
                    {currentMovieDetail?.production_companies?.map(company => (
                        company.logo_path && (
                            <div key={company.id} className="w-1/2 md:w-1/4 p-2">
                                <img className="w-full h-auto" src={`https://image.tmdb.org/t/p/original${company.logo_path}`} alt={company.name} />
                                <p className="text-center mt-2">{company.name}</p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default Movie;
