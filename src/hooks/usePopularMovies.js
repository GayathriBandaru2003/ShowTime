import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        const getPopularMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', MOVIE_API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json.results));
        };
        getPopularMovies();
    }, [dispatch]);
};

export default usePopularMovies;