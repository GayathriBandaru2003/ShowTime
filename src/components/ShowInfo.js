import { useParams } from 'react-router-dom'
import useSingleShow from '../hooks/useSingleShow';

const ShowInfo = () => {

  const { id } = useParams();
  //console.log(id);
  useSingleShow(id);

  return (
    <div className='text-5xl text-center text-black'>showinfo</div>
  )
}

export default ShowInfo;