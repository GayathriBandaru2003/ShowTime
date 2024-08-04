import { useEffect } from "react"
import { urlConstants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllShows } from "../utils/showsSlice";
import axios from "axios";


const useAllShows = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllShows = async () => {
            const response = await axios.get(urlConstants?.fetchShowsUrl);
            console.log(response.data);
            dispatch(addAllShows(response.data));
        }
        fetchAllShows();
    }, [dispatch]);
}

export default useAllShows;