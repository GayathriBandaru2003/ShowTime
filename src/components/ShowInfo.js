import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SingleShowBanner from './SingleShowBanner';
import ShowDetails from './ShowDetails';
import ShowCast from './ShowCast';

const ShowInfo = () => {

  const { id } = useParams();

  useEffect(() => 
    window.scrollTo(0, 0)
, []);

  //console.log(id);
  useSingleShow(id);

  const singleShowData = useSelector((store) => store?.shows?.singleShow);
  console.log(singleShowData);

  

  return singleShowData === null ? (
    <h1>Loading...</h1>
  ) : (
    <div className='bg-[#141414]'>
      {singleShowData && <SingleShowBanner showData={singleShowData} />}
      <div className='max-w-full md:w-[80vw] md:max-w-[956px] mx-auto sm:px-4'>
        {singleShowData && <ShowDetails />}
      </div>
      <div className='max-w-full md:w-[80vw] md:max-w-[956px] mx-auto sm:px-4'>
        <ShowCast />
      </div>
    </div>
  )
}

export default ShowInfo;