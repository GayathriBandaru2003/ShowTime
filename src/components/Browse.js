import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";
import useAllShows from "../hooks/useAllShows";


const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useAllShows();
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
    if(movies === null)
    return <h1>Loading...</h1>

    return  (
        <div className="w-full overflow-hidden m-0 p-0">
            <Header />
            {showGptSearch ? (
                <GptSearchPage />
            ) : (
            <>
              <MainContainer />
              <SecondaryContainer />
            </>
            )}
        </div>
    );
};

export default Browse;