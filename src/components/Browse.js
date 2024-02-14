import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import Header from "./Header";


const Browse = () => {

    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API_OPTIONS);
        const json = await data.json();
        console.log(json);
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return  (
        <div>
            <Header />
        </div>
    );
};

export default Browse;