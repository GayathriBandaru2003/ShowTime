import { useEffect } from "react";
import axios from "axios";
import { urlConstants } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addSingleShow } from "../utils/showsSlice";


const useSingleShow = (showId) => {
  
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleShow = async () => {
            //console.log(showId);
            const response = await axios.get(`${urlConstants?.fetchShowsUrl}/${showId}${urlConstants?.seasonsCastEpisodesEmbed}`);
            //console.log(response);
            dispatch(addSingleShow(response.data));
        }
        fetchSingleShow();
    }, [showId, dispatch]);
};

export default useSingleShow