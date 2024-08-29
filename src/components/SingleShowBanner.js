import { MdLanguage } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

const SingleShowBanner = ({ showData }) => {
  return (
    <section className="">
      <div className="my-0 mx-auto max-w-[1600px] px-0">
        <div className="min-h-[654px] py-14 px-9 flex justify-center items-center"
        style={{
          background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${showData?.image?.original}) top/cover no-repeat fixed`,
        }}
        >
          <div className="max-w-[1000px] mx-auto text-center">
            <h1 className="font-medium text-white text-3xl drop-shadow-[2px_2px_4px_#262626]">{showData?.name}</h1>
            <div className="text-white mt-6"
              dangerouslySetInnerHTML={{
                __html: showData?.summary?.substring(0, 380) + " ...",
              }}>
            </div>
            <div className="mt-6 gap-y-4 flex flex-col items-center">
              <div className="flex items-center flex-wrap gap-x-6">
                <p className="text-sm text-[#cbd5e1]">
                  <span className="font-medium text-white">Genre :{" "}</span>
                  <span className="font-normal">
                    {showData?.genres?.join(", ")}
                  </span>
                </p>
                <ul className="text-sm text-white gap-y-2 gap-x-6 flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center">
                    <span className="text-lg inline-flex items-center justify-center mr-1">
                      <MdLanguage />
                    </span>
                    <span>
                      {showData?.language}
                    </span>
                  </li>
                  <li className="inline-flex items-center info-item">
                    <span className="inline-flex items-center justify-center text-lg mr-1">
                      <IoMdStar />
                    </span>
                    <span>
                      {showData?.rating?.average}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleShowBanner