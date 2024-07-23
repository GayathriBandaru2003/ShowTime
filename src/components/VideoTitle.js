import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-full aspect-video pt-[18%] pl-14 absolute text-white 
          bg-gradient-to-r from-zinc-900">
            <h1 className="text-5xl font-bold w-2/5">{title}</h1>
            <p className="py-4 text-sm w-2/5">{overview}</p>
            <div className="flex">
                <button 
                   className="bg-white text-black py-[6px] px-5 text-lg rounded-sm hover:bg-opacity-80
                   flex items-center"
                >
                   <div className="px-1 text-xl"><FaPlay /></div>
                   <span>Play</span>
                </button>
                <button 
                   className="bg-gray-600 text-white mx-2 py-[6px] px-5 text-lg bg-opacity-70
                   hover:bg-opacity-40 rounded-sm flex items-center"
                >
                    <div className="pr-1 text-2xl"><MdInfoOutline /></div>
                   <span className="pl-1">More Info</span>
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;