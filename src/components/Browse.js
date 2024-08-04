import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAllShows from "../hooks/useAllShows";
import { useEffect } from "react";


const Browse = () => {

    useAllShows();

    const allShowsData = useSelector((store) => store?.shows?.allShows);

    useEffect(() => 
        window.scrollTo(0, 0)
    , []);
    
    if(allShowsData === null)
    return <h1>Loading...</h1>

    return  (
        <div className="w-full overflow-hidden m-0 p-0">
            <Header />
            
            <MainContainer />
            <SecondaryContainer allShowsData={allShowsData}/>
        </div>
    );
};

export default Browse;