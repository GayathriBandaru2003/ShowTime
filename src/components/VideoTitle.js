import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-4 text-lg w-1/3">{overview}</p>
            <div className="flex">
                <button 
                   className="bg-gray-600 text-black py-2 px-6 text-lg rounded-sm flex items-center"
                >
                   <div className="px-2 text-2xl"><FaPlay /></div>
                   <span>Play</span>
                </button>
                <button 
                   className="bg-gray-600 text-white mx-2 py-2 px-7 text-lg rounded-sm flex 
                    items-center"
                >
                    <div className="pr-1 text-3xl"><MdInfoOutline /></div>
                   <span className="pl-1">More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;