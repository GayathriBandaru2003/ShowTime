import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
    <div className='text-5xl text-center text-black'>showinfo</div>
  )
}

export default ShowInfo;