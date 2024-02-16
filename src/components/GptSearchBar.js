const GptSearchBar = () => {
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input 
                    className="p-2 m-2 col-span-9 rounded-sm"
                    type="text"
                    placeholder="What would you like to watch?"
                />
                <button
                    className="text-white col-span-3 px-2 m-2 rounded-sm bg-red-600"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;