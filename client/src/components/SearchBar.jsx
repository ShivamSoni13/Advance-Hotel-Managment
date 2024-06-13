import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useContext } from 'react';
import { Cart } from '../context/OrderContext';
export default function SearchBar() {
  const {filter,setFilter}=useContext(Cart)
  return (
    <div className="w-full  flex justify-center py-4">
        <div className='border border-black bg-white rounded-md p-2'>
          <SearchRoundedIcon className='text-orangeD1'/>
          <input type="search" className=" border-none outline-none" value={filter} onChange={(e)=>(setFilter(e.target.value))}/>
        </div>
    </div>
  )
}
