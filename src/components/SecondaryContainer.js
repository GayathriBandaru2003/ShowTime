import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        movies && (
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
        </div>
        )
    );
};

export default SecondaryContainer;