import React, { useState } from "react";
import { Link } from "react-router-dom";
import p from './p.webp';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        console.log("Logout clicked");
        window.location.href = "/signup"; 
    };

    return (
        <div className="bg-black text-white p-4 flex items-center justify-between relative">
            <div className="flex items-center space-x-4">
                <Link to="/home">
                    <img
                        className="w-24"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                        alt="IMDB Logo"
                    />
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/movies/popular" className="hover:text-gray-400">Popular</Link>
                    <Link to="/movies/top_rated" className="hover:text-gray-400">Top Rated</Link>
                    <Link to="/movies/upcoming" className="hover:text-gray-400">Upcoming</Link>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleToggle}
                    className="md:hidden focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                
                <Link
                    to="/profile"
                    className="flex items-center bg-gray-800 rounded-full p-2 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 hover:bg-gray-700"
                >
                    <img
                        className="w-8 h-8 rounded-full"
                        src={p}
                        alt="User"
                    />
                </Link>
             
                <button
                    onClick={handleLogout}
                    className="hidden md:flex text-white hover:text-gray-400 focus:outline-none"
                >
                    Logout
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-16 right-0 bg-black text-white p-4 rounded-md shadow-lg z-50">
                    <div className="flex flex-col space-y-4">
                        <Link to="/movies/popular" className="hover:text-gray-400" onClick={handleToggle}>Popular</Link>
                        <Link to="/movies/top_rated" className="hover:text-gray-400" onClick={handleToggle}>Top Rated</Link>
                        <Link to="/movies/upcoming" className="hover:text-gray-400" onClick={handleToggle}>Upcoming</Link>
                        <button
                            onClick={handleLogout}
                            className="text-white hover:text-gray-400 focus:outline-none"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
