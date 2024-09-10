import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useAllShows from "../hooks/useAllShows";

const ShowsPage = () => {
    useAllShows();

    const allShowsData = useSelector((store) => store?.shows?.allShows);

    if(allShowsData === null)
        return <h1>Loading...</h1>
    
  return (
    <div className="max-w-full md:max-w-[1351px] mx-auto">
        <MainContainer />
        <SecondaryContainer allShowsData={allShowsData}/>
    </div>
  )
}

export default ShowsPage