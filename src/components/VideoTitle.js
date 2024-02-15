

const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-4 text-lg w-1/3">{overview}</p>
            <div>
                <button className="bg-gray-600 text-white py-2 px-10 text-lg rounded-sm">
                   
                    Play
                </button>
                <button className="bg-gray-600 text-white mx-2 py-2 px-10 text-lg rounded-sm">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;