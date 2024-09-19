import React from 'react'
import { SEARCH_BG_URL } from '../utils/constants'

export const SearchPage = () => {
  return (
    <section className="max-w-full xl:max-w-[1351px] overflow-x-hidden my-0 mx-auto p-0">
        <div className='w-full absolute -z-10 overflow-hidden top-0 left-0'>
            <img className="h-[105vh] w-full object-cover"
              src={SEARCH_BG_URL} 
              alt="searchbg"
            />
        </div>
        <div className='max-w-[1000px] mx-auto relative z-0'>
          <div className="flex justify-center mt-[18%]">
            <form className="w-full xs:w-4/5 sm:w-2/3 md:w-3/5 lg:w-1/2 grid grid-cols-9">
                <button
                    className="text-white text-xl font-medium col-span-2 xs:m-2 rounded-sm bg-transparent"
                >
                    Search:
                </button>
                <input 
                    className="relative z-0 h-[40px] p-4 m-2 col-span-7 rounded-sm border-slate-400 border-[1px] outline-none bg-transparent backdrop-blur-lg text-sm text-white placeholder:text-sm placeholder-slate-300 focus:placeholder-slate-500"
                    type="text"
                    placeholder="What would you like to watch?"
                />
            </form>
          </div>
        </div>
    </section>
  )
}
