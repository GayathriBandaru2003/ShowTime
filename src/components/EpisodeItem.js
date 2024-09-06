

const EpisodeItem = ({ episodeDetails }) => {
  return (
    <article className="grid grid-cols-8 gap-x-8 py-4 border-t-[1px] border-t-[#262626]">
      <div className="col-start-1 col-end-3">
        <div className="w-full h-28 rounded-md overflow-hidden border-[1px] border-[#262626]">
          <img className="w-full h-full object-cover"
            src={episodeDetails?.image?.medium} alt={episodeDetails?.name}
          />
        </div>
      </div>
      <div className="col-start-3 col-end-9">
        <div className="">
          <h4 className="text-sm font-normal text-gray-300">Episode {episodeDetails?.number}</h4>
          <h4 className="text-lg font-medium mb-1">{episodeDetails?.name}</h4>
          <p
            className="text-xs font-normal text-gray-300"
            dangerouslySetInnerHTML={{
              __html: episodeDetails?.summary.length > 240 ? episodeDetails?.summary?.substring(0, 240) + " ..." : episodeDetails?.summary,
            }}
          ></p>
        </div>
      </div>
    </article>
  )
}

export default EpisodeItem