import { useSelector } from "react-redux"


const ShowCast = () => {
  
    const castData = useSelector((store) => store?.shows?.singleShow?._embedded?.cast)

  return (
    <section className="text-white overflow-hidden p-6">
        <h2 className="mb-2 text-xl font-medium">Cast</h2>
        <div className="shows-list grid grid-cols-4 gap-x-6 gap-y-6">
            {castData?.map((cast) => (
                <div className=""
                  key={cast?.character?.id} 
                >
                    <div className="w-44 h-60 mb-1 rounded-sm overflow-hidden border-[1px] border-[#262626]">
                        <img className="w-full h-full object-cover"
                          src={cast?.character?.image?.medium} alt={cast?.character?.name}
                        />
                    </div>
                    <h3 className="font-medium text-sm">{cast?.person?.name}</h3>
                    <h4 className="font-normal text-xs text-gray-300">as 
                        <span className="text-white font-medium"> {cast?.character?.name}</span>
                    </h4>
                </div>
            ))}
            </div>
    </section>
  )
}

export default ShowCast