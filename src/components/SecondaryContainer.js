import ShowsList from "./ShowsList";


const SecondaryContainer = ({allShowsData}) => {

    return (
        allShowsData && (
        <div className="w-full bg-zinc-900">
            <div className="-mt-12 xs:-mt-20 sm:-mt-32 md:-mt-40 lg:-mt-32 xl:mt-[-200px] mx-auto relative z-20">
                <ShowsList showsData={allShowsData} showsTitle={"All Shows"} />
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;