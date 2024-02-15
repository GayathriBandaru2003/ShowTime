import { useDispatch } from "react-redux";
import { MOVIE_API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/' + movieId + 
            '/videos?language=en-US', MOVIE_API_OPTIONS);
            
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.name === "Official Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };
    
    useEffect(() => {
        getMovieVideos();
    }, []);

    return (
        <div>
            movie
        </div>
    );
};

export default useMovieTrailer;