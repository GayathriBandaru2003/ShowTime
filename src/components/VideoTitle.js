import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white 
          bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-4 text-md w-1/3">{overview}</p>
            <div className="flex">
                <button 
                   className="bg-white text-black py-2 px-6 text-lg rounded-sm hover:bg-opacity-80
                   flex items-center"
                >
                   <div className="px-2 text-2xl"><FaPlay /></div>
                   <span>Play</span>
                </button>
                <button 
                   className="bg-gray-600 text-white mx-2 py-2 px-7 text-lg bg-opacity-70
                   hover:bg-opacity-40 rounded-sm flex items-center"
                >
                    <div className="pr-1 text-3xl"><MdInfoOutline /></div>
                   <span className="pl-1">More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;