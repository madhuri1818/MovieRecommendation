import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/home';
import MovieList from './components/movieList';
import Movie from './components/movie';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/profile';
function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const showNavbar = !(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup");

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies/:type" element={<MovieList />} />
        <Route path="/*" element={<h1>Error Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
