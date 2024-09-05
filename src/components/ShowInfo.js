import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SingleShowBanner from './SingleShowBanner';
import ShowDetails from './ShowDetails';

const ShowInfo = () => {

  const { id } = useParams();

  useEffect(() => 
    window.scrollTo(0, 0)
, []);

  //console.log(id);
  useSingleShow(id);

  const singleShowData = useSelector((store) => store?.shows?.singleShow);
  console.log(singleShowData);

  if(singleShowData === null)
    return <h1>Loading...</h1>

  return (
    <div className='bg-[#141414]'>
      {singleShowData && <SingleShowBanner showData={singleShowData} />}
      <div className='max-w-[90vw] md:w-[70vw] md:max-w-[956px] mx-auto px-4'>
        {singleShowData && <ShowDetails />}
      </div>
      
    </div>
  )
}

export default ShowInfo;