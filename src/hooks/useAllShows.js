import { useEffect } from "react"
import { urlConstants } from "../utils/constants";


const useAllShows = () => {
    
    useEffect(() => {
        const fetchAllShows = async () => {
            const data = await fetch(urlConstants?.fetchShowsUrl);
            const result = await data.json();
            console.log(result);
        }
        fetchAllShows();
    }, []);
}

export default useAllShows;