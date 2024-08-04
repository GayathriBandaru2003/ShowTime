import ShowsList from "./ShowsList";


const SecondaryContainer = ({allShowsData}) => {

    return (
        allShowsData && (
        <div className="w-full bg-zinc-900">
            <div className="-mt-[216px] mx-auto relative z-20">
                <ShowsList showsData={allShowsData} showsTitle={"All Shows"} />
            </div>
        </div>
        )
    );
};

export default SecondaryContainer;