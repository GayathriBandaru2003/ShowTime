import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SingleShowBanner from './SingleShowBanner';

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
    <div className='bg-black'>
      {singleShowData && <SingleShowBanner showData={singleShowData} />}
    </div>
  )
}

export default ShowInfo;