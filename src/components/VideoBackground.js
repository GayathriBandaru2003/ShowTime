import { useEffect } from "react";
import { MOVIE_API_OPTIONS } from "../utils/constants";


const VideoBackground = ({movieId}) => {

    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/955916/videos?language=en-US', MOVIE_API_OPTIONS);
        const json = await data.json();
        console.log(json);
        const filterData = json.results.filter((video) => video.name === "Official Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
    };
    
    useEffect(() => {
        getMovieVideos();
    }, []);

    return (
        <div>
            VideoBackground
        </div>
    );
};

export default VideoBackground;